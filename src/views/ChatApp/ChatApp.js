import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import WithTimer from '../WithTimer/WithTimer'
import FuncAsComponent from '../FuncAsComponent/FuncAsComponent'
import './ChatApp.css'

class MessageList extends PureComponent {
    static propTypes = {
        messagesList: PropTypes.array.isRequired
    }
    render() {
        return (
            <ul>{this.props.messagesList.map( msg => <li key={msg}>{msg}</li>)}</ul>
        );
    }
}

class ChatApp extends PureComponent {
    state = {
        messagesList: [],
        inpVal: ''
    }
    submitMsg = () => {
        const text = this.state.inpVal
        if (text) {
            // method one
            // this.setState( pre => (
            //     { messagesList: pre.messagesList.concat([this.state.inpVal]) }
            // ))
            // method two
            this.setState(
                { messagesList: [...this.state.messagesList, text] },
                () => { this.refs.input.value = '' }
            )
        }
    }
    // 
    handleInput = evt => {
        this.setState({
            inpVal: evt.target.value
        })
    }
    render() {
        return (
            <div>
                <MessageList messagesList={this.state.messagesList}/>
                <input ref="input" onBlur={this.handleInput}/>
                <button className="btn" onClick={this.submitMsg}>submit</button>
                <span>{this.props.time.toLocaleTimeString()}</span>
                {/* 函数作为子组件 */}
                <FuncAsComponent>
                    {(name)=> (
                        <p>{name}</p>
                    )}
                </FuncAsComponent>
            </div>
        );
    }
}
export default WithTimer(ChatApp)