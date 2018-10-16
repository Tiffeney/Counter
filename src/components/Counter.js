import React, { Component } from 'react'

class Counter extends Component {

    state = {
        value: 0
    }

    increment() {
    //     // alert('You Increased')
        this.setState((state) => {
            return {value: this.state.value+1}
        })
    }

    decrement() {
    //     // alert('You Decreased')
    this.setState((state) => {
        return {value: this.state.value-1}
        })
    }

    Reset() {
        //     // alert('You Decreased')
        this.setState((state) => {
            return {value: state.value=0}
            })
        }

    // toogleAmount() {
    //     this.setState((state) => {
    //         return {value: !state.value}
    //     })
    // }

    render () {
        return (
            <div>
                <div className="Counter">
                {this.state.value}
                </div>
                {/* <button onClick={()=>this.toogleAmount()}>Toogle</button> */}
                <button onClick={()=>this.increment()}>+</button>
                <button onClick={()=>this.decrement()}>-</button>
                <div>
                <button onClick={()=>this.Reset()}>Reset</button>
                </div>
            </div>
        )
    }
}

export default Counter
