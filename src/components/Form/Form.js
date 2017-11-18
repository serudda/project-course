import * as React from 'react';

class Form extends React.Component{

    constructor(){
        super();
        this.state = {text : '' , items: [], textFirstName: '', textLastName: '', items2: []};
        this._handleChangeText = this._handleChangeText.bind(this);
        this._handleClickSaveText = this._handleClickSaveText.bind(this);
        this._handleChangeFirstName = this._handleChangeFirstName.bind(this);
        this._handleChangeLastName = this._handleChangeLastName.bind(this);
        this._handleClickSave = this._handleClickSave.bind(this);
        this._handleClickClear = this._handleClickClear.bind(this);
    }   
    
    _handleChangeText(event){
        this.setState({
            text : event.target.value
        });
    }

    _handleChangeFirstName(event){
        this.setState({
            textFirstName: event.target.value
        });
    }

    _handleChangeLastName(event){
        this.setState({
            textLastName: event.target.value
        });
    }
     
    _handleClickSaveText(){
        let newItem = {
            id : Date.now(), 
            text : this.state.text
        }

        this.setState(prevState => (
            { 
                items: prevState.items.concat(newItem),
                text: ''
            }
        ));
    }

    _handleClickSave(){
        let newItem = {
            id : Date.now(),
            firstName : this.state.textFirstName,
            lastName : this.state.textLastName
        }

        this.setState(prevState => (
            {
                items2: prevState.items2.concat(newItem),
                textFirstName: '',
                textLastName: ''
            }
        ));
    }

    _handleClickClear(){
        this.setState({
            items: [],
            items2: []
        });
    }

    render(){
        return(
            <div>
                
                <button
                    onClick = {this._handleClickSaveText}
                >Click Me!</button>
                
                <input 
                    onChange = {this._handleChangeText}
                    value = {this.state.text}>    
                </input>
                
                <ul>
                    {this.state.items.map(item => (
                        <li key={item.id}>{item.text}</li>
                    ))}
                    
                </ul>

                <input
                    onChange = {this._handleChangeFirstName}
                    value = {this.state.textFirstName}>    
                </input>
                
                <input
                    onChange = {this._handleChangeLastName}
                    value = {this.state.textLastName}>   
                </input>

                <button
                    onClick = {this._handleClickSave}>
                    Save!
                </button>

                <ul>
                    {this.state.items2.map(item => (
                        <li key={item.id}>{item.firstName} {item.lastName}</li>
                    ))}  
                </ul>

                <button
                    onClick = {this._handleClickClear}
                >Clear!</button>

            </div>
        );
    }
}

export default Form;