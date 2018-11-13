import React from 'react';
import Article from '../Article';
import './style.css';

export default function ArticleList({articles}) {
    const articleElements = articles.map(artItem =>
        <li key={artItem.id} className="article-list__li"><Article article={artItem}/></li>
        );
    return (
        <ul style={{paddingLeft: 0}}>
            {articleElements}
            {/* <li><Article article={articles[0]}/></li>
            <li><Article article={articles[1]}/></li> */}
        </ul>
    )
} 