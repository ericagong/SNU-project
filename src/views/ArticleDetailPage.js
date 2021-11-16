import React, { Component } from 'react';

import Header from '../containers/header/Header';
import ArticleDetail from '../containers/articles/ArticleDetail';

class ArticleDetailPage extends Component {


    render () {
        return (
            <div className = 'ArticleDetailPage'>
                <Header/>
                ArticleDetailPage
                <ArticleDetail/>
            </div>
        )
    }
}

export default ArticleDetailPage;