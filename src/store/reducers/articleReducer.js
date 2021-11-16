import * as actionTypes from '../actions/ActionTypes';

const initialArticleState = {
    articles: [
        {
          "id": 0,
          "author_id": 1,
          "title": "10 React JS Articles Every Web Developer Should Read",
          "content": "Hello Guys, React or React JS is a JavaScript front-end library from Facebook which lets you create HTML based GUI. It makes the task easier by providing a component-based architecture which was only available to languages like Java and C# before."
        },
        {
          "id": 11,
          "author_id": 2,
          "title": "React: A JavaScript library for building user interfaces",
          "content": "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes."
        },
        {
          "id": 12,
          "author_id": 1,
          "title": "Building the New facebook.com with React, GraphQL and Relay",
          "content": "Open source projects like React, GraphQL and Relay are powering more and more Facebook services. In this session, we'll discuss how we use the latest features of these technologies, like React Suspense, to help deliver a high quality, modern web experience at Facebook."
        },
        {
          "id": 13,
          "author_id": 1,
          "title": "React State with Hooks: useReducer, useState, useContext",
          "content": "If you haven't used state management excessively in React Function Components, this tutorial may help you to get a better understanding of how React Hooks -- such as useState, useReducer, and useContext -- can be used in combination for impressive state management in React applications. In this tutorial, we will almost reach the point where these hooks mimic sophisticated state management libraries like Redux for globally managed state. Let's dive into the application which we will implement together step by step."
        },
        {
          "id": 14,
          "author_id": 3,
          "title": "From Redux to Hooks: A Case Study",
          "content": "Having a single store in Redux comes with benefits, but at the same time you end up putting everything into global namespace. Most applications profit from this, you can even create nested reducers and use naming conventions for actions. But if your global state is small and you know for sure that specific slices of state will only be used by specific areas of your application, making them global makes you feel.. uneasy."
        },
        {
          "id": 15,
          "author_id": 2,
          "title": "Application State Management with React",
          "content": "One of the reasons redux was so successful was the fact that react-redux solved the prop drilling problem. The fact that you could share data across different parts of your tree by simply passing your component into some magical connect function was wonderful. Its use of reducers/action creators/etc. is great too, but I'm convinced that the ubiquity of redux is because it solved the prop drilling pain point for developers."
        },
        {
          "id": 16,
          "author_id": 2,
          "title": "What I wish I knew when I started to work with React.js",
          "content": "After its initial release on May 29, 2013, React.js has taken over the internet. It’s not a secret that myself and many other developers owe their success to this amazing framework."
        },
        {
          "id": 17,
          "author_id": 2,
          "title": "React’s Five Fingers of Death. Master these five concepts, then master React.",
          "content": "A few years ago, my friend Sean started telling me how this brand new front-end library called React was going to take over the web. At first I dismissed it as just another framework fad. But then I started hearing about React more and more, to the point where I felt like ignoring it just wasn’t an option anymore."
        },
        {
          "id": 18,
          "author_id": 3,
          "title": "Semantic UI: User Interface is the language of the web",
          "content": "Semantic 2.4 brings a new components for handling content loading ui placeholder, as well as a new type of segment used to reserve space for content: ui placeholder segment."
        },
        {
          "id": 19,
          "author_id": 3,
          "title": "Bootstrap: Build responsive, mobile-first projects on the web with the world’s most popular front-end component library",
          "content": "Bootstrap is an open source toolkit for developing with HTML, CSS, and JS. Quickly prototype your ideas or build your entire app with our Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful plugins built on jQuery."
        },
        {
          "id": 20,
          "author_id": 3,
          "title": "ReactJS Testing",
          "content": "Jest is a delightful JavaScript Testing Framework with a focus on simplicity."
        }
    ],
    selectedArticle : null
}

const articleReducer = (state = initialArticleState, action) => {
  switch(action.type) {
    case actionTypes.GET_ARTICLES:
      return state
    case actionTypes.GET_ARTICLES:
      const target = state.articles.find((article) => (article.id === action.targetArticle.id))
      return { ...state, selectedArticle : target }
    case actionTypes.CREATE_ARTICLE:
      const newArticle = {
        id : state.articles.length + 1,
        author_id : action.author_id,
        title : action.title,
        content : action.content
      }
      return { ...state, articles : [ ...state.articles, newArticle ], selectedArticle : newArticle }
    case actionTypes.EDIT_ARTICLE:
      const modified = state.articles.map((article) => {
        if(article.id === action.targetArticle.id) {
          return { ...article, title : action.editTitle, content : action.editContent }
        }
        else return { ...article }
      })
      return { ...state, articles : modified }
    case actionTypes.DELETE_ARTICLE:
      const deleted = state.article.filter((article) => {
        return (article.id !== action.targetArticle.id)
      })
      return { ...state, articles : deleted }
    default:
      return state
  }
}

export default articleReducer;