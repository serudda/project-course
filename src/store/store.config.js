import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';

const reducer =  (stateOnStore = defaultState, action) => {

    switch (action.type) {
        case 'ADD_NEW_USER':
           return {
               ...stateOnStore,
               users: stateOnStore.users.concat(action.user)
           }
        
           case 'DELETE_USER':
           const newState = Object.assign([], stateOnStore);
           const indexOfUserToDelete = stateOnStore.users.findIndex(user => {
                console.log('userId: ',user.id);
                console.log('actionUserId: ',action.user.id);
                return user.id == action.user.id
            })
            console.log('indexOfUserToDelete: ',indexOfUserToDelete);
           
           newState.users.splice(indexOfUserToDelete, 1);
           console.log('newState: ',newState);
           return newState;
           
        default:
            return stateOnStore;
    }
}

const defaultState = {
    users: []
}
export default createStore (reducer,composeWithDevTools());