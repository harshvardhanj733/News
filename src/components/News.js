import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export class News extends Component {
 
    constructor(){
        super();
        this.state = {
            articles: [],
            page: 1,
            totalResults: 0,
            loader: false
        }
    }

    handlePrev = async ()=>{
        this.setState({loader:true});
        let url = `https://newsapi.org/v2/top-headlines?q=${this.props.q}&sortBy=relevance&apiKey=5745f19da4bd4130ba71c07f1169721a&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
        
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        
        this.setState({articles: parsedData.articles, page: this.state.page-1, loader:false})
    }
    handleNext = async ()=>{
        this.setState({loader: true});
        let url = `https://newsapi.org/v2/top-headlines?q=${this.props.q}&sortBy=relevance&apiKey=5745f19da4bd4130ba71c07f1169721a&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
        
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        
        this.setState({articles: parsedData.articles, page: this.state.page+1, loader:false})
    }

    componentDidMount = async () => {
        this.setState({loader:true});
        let url = `https://newsapi.org/v2/top-headlines?q=${this.props.q}&sortBy=relevance&apiKey=5745f19da4bd4130ba71c07f1169721a&page=1&pageSize=${this.props.pageSize}`
        
        let data = await fetch(url);
        let parsedData = await data.json();
        // console.log(parsedData);
        
        this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults, loader:false})
        // console.log(this.state.totalResults);
        // console.log(Math.ceil(this.state.totalResults/12))
    }
    
    
    render() {
        // let {query} = this.props;
        return (
            <div className='container'>
                <h2>Top Headlines</h2>
                {this.state.loader && <Spinner/>}
                <div className="d-flex justify-content-around my-2">
                <button type="button" class="btn btn-danger" onClick={this.handlePrev} disabled={this.state.page<=1}>Previous</button>
                <button type="button" class="btn btn-danger" onClick={this.handleNext} disabled={this.state.page >= Math.ceil((this.state.totalResults)/12)}>Next</button>
                </div>
                <div className="row my-4">
                    {!this.state.loader && this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                               <NewsItem title={element.title} description={element.description} urlToImage={element.urlToImage} url={element.url}/> 
                            </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
