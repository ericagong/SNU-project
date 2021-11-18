import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';  

const getMockReducer = jest.fn(
    initialState => {(state = initialState, action) => {
        return state;
        }
    }
)

export const getMockStore = (initialState) => {
    const mockUsersReducer = getMockReducer(initialState);
    const mockArticlesReducer = getMockReducer(initialState);
    const mockCommentsReducer = getMockReducer(initialState);
  
    const rootReducer = combineReducers({
      userR: mockUsersReducer,
      articleR: mockArticlesReducer,
      commentR: mockCommentsReducer,
    });
  
    return createStore(rootReducer, applyMiddleware(thunk))
}
