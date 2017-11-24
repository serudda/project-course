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
                return user.id == action.user.id
            })
           
           newState.users.splice(indexOfUserToDelete, 1);
           return newState;

           case 'UPDATE_USER':
           const newStateUser = Object.assign([], stateOnStore);
           const indexOfUserToUpdate = stateOnStore.users.findIndex(user => {
                return user.id == action.user.id
            })
           
            newStateUser: [
                ...newStateUser.users.slice(0,indexOfUserToUpdate),
                newStateUser.users[indexOfUserToUpdate].firstName = action.user.firstName,
                newStateUser.users[indexOfUserToUpdate].lastName = action.user.lastName,
                newStateUser.users[indexOfUserToUpdate].country = action.user.country,
                newStateUser.users[indexOfUserToUpdate].address = action.user.address,
                newStateUser.users[indexOfUserToUpdate].email = action.user.email,
                newStateUser.users[indexOfUserToUpdate].phoneNumber = action.user.phoneNumber,
                ...newStateUser.users.slice(indexOfUserToUpdate + 1) 
            ];

           return newStateUser;
           
        default:
            return stateOnStore;
    }
}

const defaultState = {
    users: []
}
export default createStore (reducer,composeWithDevTools());