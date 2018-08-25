import React, { Component } from 'react';
import { createStore } from 'redux'

const reducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'Increament':
            return state.count + action.num
        case 'Decreament':
            return state.count - action.num
        default:
            return state
    }
}
const store = createStore(reducer)

class ReduxDemo extends Component {
    increament = () => {
        store.dispatch({ type: 'Increament', num: 1 })
    }

    decreament = () => {
        store.dispatch({ type: 'Decreament', num: 2 })
    }
    render() {
        return (
            <div>
                <button onClick={this.increament}>Plus Number</button><br />
                <button onClick={this.increament}>Minus Number</button><br />
                <span>当前数字是：{store.count}</span>
            </div>
        );
    }
}

export default ReduxDemo;