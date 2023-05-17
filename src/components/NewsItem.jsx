import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title, description, urlToImage, url} = this.props;
        return (
            <>
                <div className="card my-4" style={{ width: "18rem" }}>
                    <img src={urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">
                            {description}
                        </p>
                        <a href={url} target="_blank" rel="noreferrer" className="btn btn-primary">
                            Go to Article
                        </a>
                    </div>
                </div>
            </>
        )
    }
}

export default NewsItem
