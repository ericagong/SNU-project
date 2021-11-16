import React, { Component } from 'react';

import Header from '../containers/header/Header';
import ArticleCreate from '../containers/articles/ArticleCreate';

class ArticleCreatePage extends Component {


    render () {
        return (
            <div className = 'ArticleCreatePage'>
                <Header/>
                ArticleCreatePage
                <ArticleCreate/>
            </div>
        )
    }
}

export default ArticleCreatePage;