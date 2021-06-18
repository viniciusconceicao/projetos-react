import React, { Component } from 'react'

class Contador extends Component {

    state = {
            numero: this.props.nroInicial
        }

        
        inc(){
             this.setState({
                 numero: this.state.numero+1
             })
        }

    render() {
        return (
            <div>
                <h2>Contador</h2>
                <h3>{this.state.nnumero}</h3>
                <button onClick={this.inc}>+</button>
            </div>
        )
    }

}

export default Contador