import React from 'react';
import ArticleList from './ArticleList';
import articles from '../data';

function App() {
    return (
        <div>
            <h1>My app Hello!</h1>
            <ArticleList articles = {articles} />
        </div>
    )
}
export default App