import React, { Component } from 'react';

import Header from '../containers/header/Header';
import ArticleEdit from '../containers/articles/ArticleEdit';

class ArticleEditPage extends Component {


    render () {
        return (
            <div className = 'ArticleEditPage'>
                <Header/>
                ArticleEditPage
                <ArticleEdit/>
            </div>
        )
    }
}

export default ArticleEditPage;