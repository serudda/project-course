import * as React from 'react';
import BusinessCard from './../BusinessCard/BusinessCard'
import store from './../../store/store.config';


class FormUser extends React.Component{
    
    constructor(){
        super();
        this.state = { users: [], nameText: '', lastNameText: '', emailText: '', phoneNumberText: '', countryText: '', addressText: ''};
        
        store.subscribe(() => {
            this.setState({
                users: store.getState().users
            });
        });
        
        this._handleChangeFirstName = this._handleChangeFirstName.bind(this);
        this._handleChangeLastName = this._handleChangeLastName.bind(this);
        this._handleChangeCountry = this._handleChangeCountry.bind(this);
        this._handleChangeAddress = this._handleChangeAddress.bind(this);
        this._handleChangeEmail = this._handleChangeEmail.bind(this);
        this._handleChangePhoneNumber = this._handleChangePhoneNumber.bind(this);
        this._handleClickAdd = this._handleClickAdd.bind(this);
        this._handleClickDelete = this._handleClickDelete.bind(this);
        this._handleClickEdit = this._handleClickEdit.bind(this);
        this._handleClickSaveEdit = this._handleClickSaveEdit.bind(this);
    }

    _handleChangeFirstName(event){
        this.setState({
            nameText: event.target.value
        });
    }

    _handleChangeLastName(event){
        this.setState({
            lastNameText: event.target.value
        });
    }

    _handleChangeCountry(event){
        this.setState({
            countryText: event.target.value
        });
    }

    _handleChangeAddress(event){
        this.setState({
            addressText: event.target.value
        });
    }

    _handleChangeEmail(event){
        this.setState({
            emailText: event.target.value
        });
    }

    _handleChangePhoneNumber(event){
        this.setState({
            phoneNumberText: event.target.value
        });
    }

    _handleClickAdd(){
        let newUser = {
            id : Date.now(),
            firstName : this.state.nameText,
            lastName: this.state.lastNameText,
            country: this.state.countryText,
            address: this.state.addressText,
            email: this.state.emailText,
            phoneNumber: this.state.phoneNumberText
        }
        
        store.dispatch ({
            type: 'ADD_NEW_USER',
            user: newUser
        })
    }

    _handleClickEdit = (id) => (e) => {

        let user = this.state.users.map(function(user) {
            if (user.id === id){
              return user
            } 
        }, this);
        
        let index = this.state.users.findIndex(user => 
            user.id === id
        ); 
        
        this.setState({

            nameText: user[index].firstName,
            lastNameText: user[index].lastName,
            countryText: user[index].country,
            addressText: user[index].address, 
            emailText: user[index].email,
            phoneNumberText: user[index].phoneNumber,
            shown: !this.state.shown
        })
    }
      
    _handleClickSaveEdit = (id) => (e) => {
        let user = this.state.users.map(function(user) {
            if (user.id === id){
                return user
            } 
        }, this);
        
        let index = this.state.users.findIndex(user => 
            user.id === id
        ); 
        
        this.setState({

            user: [
                ...user.slice(0,index),
                user[index].firstName = this.state.nameText,
                user[index].lastName = this.state.lastNameText,
                user[index].country = this.state.countryText,
                user[index].address = this.state.addressText,
                user[index].email = this.state.emailText,
                user[index].phoneNumber = this.state.phoneNumberText,
                ...user.slice(index + 1) 
            ],
            
            nameText: '',
            lastNameText: '',
            countryText: '',
            addressText: '', 
            emailText: '',
            phoneNumberText: '',
            shown: !this.state.shown
            
        })
    }

    _handleClickDelete = (user) => (e) => {

        store.dispatch({
            type : 'DELETE_USER',
            user
        })

      }    

    render(){
        return(
            <div className='row'>  
                
                <div className='column'>
                    <label>First Name: </label>
                    <input ref='inputName'
                        onChange = {this._handleChangeFirstName}
                        value = {this.state.nameText}>
                    </input>
                    <br/>
                    <label>Last Name: </label>
                    <input 
                        onChange = {this._handleChangeLastName}
                        value = {this.state.lastNameText}>
                    </input>
                    <br/>
                    <label>Country :</label>
                    <input
                        onChange = {this._handleChangeCountry}
                        value = {this.state.countryText}>
                    </input>
                </div>

                <div className='column'>
                    <label>Address :</label>
                    <input
                        onChange = {this._handleChangeAddress}
                        value = {this.state.addressText}>
                    </input>
                    <br/>
                    <label>Email: </label>
                    <input
                        onChange = {this._handleChangeEmail}
                        value = {this.state.emailText}>
                    </input>
                    <br/>
                    <label>Phone Number: </label>
                    <input
                        onChange = {this._handleChangePhoneNumber}
                        value = {this.state.phoneNumberText}>
                    </input>
                </div>

                <div className='columnb'>    
                    <button onClick = {this._handleClickAdd}>Save!!</button>
                </div>

                {this.state.users.map(user => (
                    <BusinessCard user={user} 
                                  onSaveEditClick={this._handleClickSaveEdit} 
                                  onClickDelete={this._handleClickDelete}
                                  onClickEdit={this._handleClickEdit}
                                  key={user.id}/>
                ))} 
            </div>
        );
    }
}

export default FormUser;    
