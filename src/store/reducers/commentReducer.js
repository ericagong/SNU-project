import * as actionTypes from '../actions/ActionTypes';

const initialState = {
    comments : [
        {
          "id": 1,
          "article_id": 0,
          "author_id": 2,
          "content": "What do you mean wow?"
        },
        {
          "id": 2,
          "article_id": 0,
          "author_id": 3,
          "content": "I was surprised"
        },
        {
          "id": 4,
          "article_id": 11,
          "author_id": 3,
          "content": "I agree with you"
        },
        {
          "id": 5,
          "article_id": 12,
          "author_id": 3,
          "content": "Haha this is funny"
        },
        {
          "id": 6,
          "article_id": 12,
          "author_id": 2,
          "content": "Yes, it is hilarious"
        },
        {
          "id": 7,
          "article_id": 13,
          "author_id": 1,
          "content": "I am sad"
        },
        {
          "id": 8,
          "article_id": 13,
          "author_id": 2,
          "content": "I do not want to see you sad"
        },
        {
          "id": 9,
          "article_id": 14,
          "author_id": 3,
          "content": "I do not want to work"
        },
        {
          "id": 10,
          "article_id": 15,
          "author_id": 3,
          "content": "What time is it?"
        },
        {
          "id": 11,
          "article_id": 15,
          "author_id": 2,
          "content": "It is 5 in the morning"
        },
        {
          "id": 12,
          "article_id": 16,
          "author_id": 1,
          "content": "I like it"
        },
        {
          "id": 13,
          "article_id": 17,
          "author_id": 1,
          "content": "I don't think so"
        },
        {
          "id": 14,
          "article_id": 17,
          "author_id": 2,
          "content": "Me neither"
        },
        {
          "id": 15,
          "article_id": 18,
          "author_id": 2,
          "content": "I am so stressed out"
        },
        {
          "id": 16,
          "article_id": 18,
          "author_id": 3,
          "content": "Stress is bad"
        },
        {
          "id": 17,
          "article_id": 18,
          "author_id": 2,
          "content": "Yeah, I should try to feel better"
        },
        {
          "id": 18,
          "article_id": 19,
          "author_id": 1,
          "content": "My dog is cute"
        },
        {
          "id": 19,
          "article_id": 19,
          "author_id": 2,
          "content": "I think so as well"
        },
        {
          "id": 20,
          "article_id": 20,
          "author_id": 3,
          "content": "Tornado has hit our town"
        },
        {
          "id": 21,
          "article_id": 20,
          "author_id": 1,
          "content": "Oh, what a misery"
        },
        {
          "author_id": 1,
          "article_id": 0,
          "content": "Wow!",
          "id": 22
        }
    ],
    selectedComment : null
}

export default commentReducer;