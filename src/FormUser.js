import * as React from 'react';

class FormUser extends React.Component{
    
    constructor(){
        super();
        this.state = { users: [], textn: '', textl: '', texte: '', textp: '', textc: '', texta: ''};
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
            textn: event.target.value
        });
    }

    _handleChangeLastName(event){
        this.setState({
            textl: event.target.value
        });
    }

    _handleChangeCountry(event){
        this.setState({
            textc: event.target.value
        });
    }

    _handleChangeAddress(event){
        this.setState({
            texta: event.target.value
        });
    }

    _handleChangeEmail(event){
        this.setState({
            texte: event.target.value
        });
    }

    _handleChangePhoneNumber(event){
        this.setState({
            textp: event.target.value
        });
    }

    _handleClick(){
        let newUser = {
            id : Date.now(),
            firtsname : this.state.textn,
            lastname: this.state.textl,
            country: this.state.textc,
            address: this.state.texta,
            email: this.state.texte,
            phonenumber: this.state.textp
        }
        
        this.setState(prevState => (
            {
                users: prevState.users.concat(newUser),
                textn: '',
                textl: '',
                textc: '',
                texta: '', 
                texte: '',
                textp: ''
            }
        ));    
    }

    render(){
        return(
            <div>  
                <label>Firts Name: </label>
                <input 
                    onChange = {this._handleChangeFirstName}
                    value = {this.state.textn}>
                </input>

                <label>Last Name: </label>
                <input 
                    onChange = {this._handleChangeLastName}
                    value = {this.state.textl}>
                </input>

                <label>Country :</label>
                <input
                    onChange = {this._handleChangeCountry}
                    value = {this.state.textc}>
                </input>

                <label>Address :</label>
                <input
                    onChange = {this._handleChangeAddress}
                    value = {this.state.texta}>
                </input>

                <label>Email: </label>
                <input
                    onChange = {this._handleChangeEmail}
                    value = {this.state.texte}>
                </input>

                <label>Phone Number: </label>
                <input
                    onChange = {this._handleChangePhoneNumber}
                    value = {this.state.textp}>
                </input>

                <button className='save' onClick = {this._handleClick}>Save!!</button>

                <ul>
                    {this.state.users.map(user => (
                        <div className='container'>
                            <div key={user.id} className='prueba'>
                                <table>
                                    <tr><td className='logo'>UNCSA</td></tr>
                                
                                    <tr><td className='name'>{user.firtsname} {user.lastname}</td></tr>
                                
                                    <tr><td className='title'>FIRST JOB TITLE</td></tr>
                                        
                                    <tr><td className='title'>SECOND JOB TITLE</td></tr>
                                        
                                    <tr><td className='department'>{user.country}</td></tr>
                                        
                                    <tr></tr>
                                        
                                    <tr><td className='address'>{user.address}</td></tr>
                                        
                                    <tr></tr>

                                    <tr><td className='number'>P - {user.phonenumber} / M - {user.phonenumber} / F - {user.phonenumber}</td></tr>

                                    <tr><td className='email'>{user.email}</td></tr>
                                </table>
                            </div>
                        </div>
                    ))}  
                </ul>
            </div>
        );
    }
}

export default FormUser;    