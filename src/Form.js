import * as React from 'react';

class Form extends React.Component{

    constructor(){
        super();
        this.state = {text : '' , items: [], textn: '', textl: '', items2: []};
        this._handleChange = this._handleChange.bind(this);
        this._handleClick = this._handleClick.bind(this);
        this._handleChange2 = this._handleChange2.bind(this);
        this._handleChange3 = this._handleChange3.bind(this);
        this._handleClick2 = this._handleClick2.bind(this);
        this._handleClickClear = this._handleClickClear.bind(this);
    }   
    
    _handleChange(event){
        this.setState({
            text : event.target.value
        });
    }

    _handleChange2(event){
        this.setState({
            textn: event.target.value
        });
    }

    _handleChange3(event){
        this.setState({
            textl: event.target.value
        });
    }
     
    _handleClick(){
        let newItem = {
            id : Date.now(), 
            text : this.state.text
        }

        //Guardar en el estado el objeto
        this.setState(prevState => (
            { 
                items: prevState.items.concat(newItem),
                text: ''
            }
        ));
    }

    _handleClick2(){
        let newItem = {
            id : Date.now(),
            firstname : this.state.textn,
            lastname : this.state.textl
        }

        this.setState(prevState => (
            {
                items2: prevState.items2.concat(newItem),
                textn: '',
                textl: ''
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
                    onClick = {this._handleClick}
                >Click Me!</button>
                
                <input 
                    onChange = {this._handleChange}
                    value = {this.state.text}>    
                </input>
                
                <ul>
                    {this.state.items.map(item => (
                        <li key={item.id}>{item.text}</li>
                    ))}
                    
                </ul>

                <input
                    onChange = {this._handleChange2}
                    value = {this.state.textn}>    
                </input>
                
                <input
                    onChange = {this._handleChange3}
                    value = {this.state.textl}>   
                </input>

                <button
                    onClick = {this._handleClick2}>
                    Save!
                </button>

                <ul>
                    {this.state.items2.map(item => (
                        <li key={item.id}>{item.firstname} {item.lastname}</li>
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