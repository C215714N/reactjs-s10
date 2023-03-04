import { Component } from 'react';

class ClassButton extends Component{
    // Se ejecuta al momento de montar el componente
    render(){
        return(
            <button onClick={this.props.action}>
                {this.props.text}
            </button>
        )
    }
    // Ciclo de Vida:
    // Se ejecuta despues de montar el componente
    componentDidMount(){
    }
    // Se ejecuta tras detectar un cambio en el estado
    componentDidUpdate(){
    }
    // Se ejecuta antes de destruir el componente
    componentWillUnmount(){

    }
}

export default ClassButton;