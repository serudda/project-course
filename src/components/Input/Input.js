import * as React from 'react';

class Input extends React.Component{
    constructor(){
        super(); //Inicializa al padre React.Component -- siempre hacerlo.
        this.state = {text : ''};
        this._handleChange = this._handleChange.bind(this);
    }
    
    _handleChange(event){
        this.setState({
            text : event.target.value
        });

        alert(this.state.text);
    }

    render(){
        return(
            <div>
                <input 
                    onChange = {this._handleChange}
                    value = {this.state.text}>
                </input>
               {/*<div>{this.props.max}</div>*/}
               {/*<div>{this.props.userId}</div>*/} 
            </div>
        );
    }
}

export default Input;