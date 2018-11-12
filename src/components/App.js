import React from 'react';
import Article from './Article';
import articles from '../data';

function App() {
    return (
        <div>
            <h1>My app Hello!</h1>
            <Article article = {articles[0]} ssss="sss"/>
        </div>
    )
}
export default App