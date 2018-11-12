import React from 'react'
import Article from './Article'

export default function ArticleList({articles}) {
    const articleElements = articles.map(artItem =>
        <li key={artItem.id}><Article article={artItem}/></li>
        );
    return (
        <ul>
            {articleElements}
            {/* <li><Article article={articles[0]}/></li>
            <li><Article article={articles[1]}/></li> */}
        </ul>
    )
} 