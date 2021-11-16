import React, { Component } from 'react';

import Header from '../containers/header/Header';
import ArticleList from '../containers/articles/ArticleList';

class ArticleListPage extends Component {


    render () {
        return (
            <div className = 'ArticleListPage'>
                <Header/>
                ArticleListPage
                <ArticleList/>
            </div>
        )
    }
}

export default ArticleListPage;