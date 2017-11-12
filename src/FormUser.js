import * as React from 'react';

class FormUser extends React.Component{
    
    constructor(){
        super();
        this.state = { users: [], nameText: '', lastNameText: '', emailText: '', phoneNumberText: '', countryText: '', addressText: ''};
        this._handleChangeFirstName = this._handleChangeFirstName.bind(this);
        this._handleChangeLastName = this._handleChangeLastName.bind(this);
        this._handleChangeCountry = this._handleChangeCountry.bind(this);
        this._handleChangeAddress = this._handleChangeAddress.bind(this);
        this._handleChangeEmail = this._handleChangeEmail.bind(this);
        this._handleChangePhoneNumber = this._handleChangePhoneNumber.bind(this);
        this._handleClick = this._handleClick.bind(this);
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

    _handleClick(){
        let newUser = {
            id : Date.now(),
            firtsname : this.state.nameText,
            lastname: this.state.lastNameText,
            country: this.state.countryText,
            address: this.state.addressText,
            email: this.state.emailText,
            phonenumber: this.state.phoneNumberText
        }
        
        this.setState(prevState => (
            {
                users: prevState.users.concat(newUser),
                nameText: '',
                lastNameText: '',
                countryText: '',
                addressText: '', 
                emailText: '',
                phoneNumberText: ''
            }
        ));    
    }

    render(){
        return(
            <div>  
                <label>Firts Name: </label>
                <input 
                    onChange = {this._handleChangeFirstName}
                    value = {this.state.nameText}>
                </input>

                <label>Last Name: </label>
                <input 
                    onChange = {this._handleChangeLastName}
                    value = {this.state.lastNameText}>
                </input>

                <label>Country :</label>
                <input
                    onChange = {this._handleChangeCountry}
                    value = {this.state.countryText}>
                </input>

                <label>Address :</label>
                <input
                    onChange = {this._handleChangeAddress}
                    value = {this.state.addressText}>
                </input>

                <label>Email: </label>
                <input
                    onChange = {this._handleChangeEmail}
                    value = {this.state.emailText}>
                </input>

                <label>Phone Number: </label>
                <input
                    onChange = {this._handleChangePhoneNumber}
                    value = {this.state.phoneNumberText}>
                </input>

                <button className='save' onClick = {this._handleClick}>Save!!</button>

                <ul>
                    {this.state.users.map(user => (
                        <div className='container' key={user.id}>
                            <label className='logo'>UNCSA</label>
                            <p id='name'>{user.firtsname} {user.lastname}</p>
                            <p className='title'>FIRST JOB TITLE</p>
                            <p className='title'>SECOND JOB TITLE</p>
                            <p id='country'>{user.country}</p>
                            <br/>
                            <p id='address'>{user.address}</p>
                            <br/>
                            <p id='phoneNumber'>P - {user.phonenumber} / M - {user.phonenumber} / F - {user.phonenumber}</p>
                            <p id='email'>{user.email}</p>   
                        </div>
                    ))}  
                </ul>
            </div>
        );
    }
}

export default FormUser;    
