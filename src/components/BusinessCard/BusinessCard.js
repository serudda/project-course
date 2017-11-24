import * as React from 'react';
import store from './../../store/store.config';


class BusinessCard extends React.Component{

    constructor(){
        super();
    }

    render(){
        return(
            <div className='container-ppal'>
                <ul>
                    <div className='container'>
                        <button onClick={this.props.onClickDelete(this.props.user)}>x</button>
                        <button onClick={this.props.onClickEdit(this.props.user.id)}>Edit</button>    
                        <div className='logo'>
                            <span>Stylepills</span>
                            <img src="https://gallery.mailchimp.com/b3e989300a2825ea7b313fcbd/images/44442f6a-2da3-4950-89f1-76e0a2fd3fc8.png"
                            alt='logo'></img>
                        </div>
                        <p id='name'>{this.props.user.firstName} {this.props.user.lastName}</p>
                        <p className='title'>First Job Title</p>
                        <p className='title'>Second Job Title</p>
                        <p id='country'>{this.props.user.country}</p>
                        <br/>
                        <p id='address'>{this.props.user.address}</p>
                        <br/>
                        <p id='phoneNumber'>P - {this.props.user.phoneNumber} / M - {this.props.user.phoneNumber} / F - {this.props.user.phoneNumber}</p>
                        <p id='email'>{this.props.user.email}</p> 
                    </div>             
                </ul>
            </div>
        )
    }
}

export default BusinessCard;