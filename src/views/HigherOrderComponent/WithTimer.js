import React, { Component } from 'react';

// Higher order component
function WithTimer (WrapComponent) {
    return class extends Component {
        state = {
            date: new Date()
        }
        tick () {
            this.setState({
                date: new Date()
            })
        }
        componentDidMount () {
            this.timer = window.setInterval(() => {
                this.tick()
            }, 1000)
        }
        componentWillUnmount () {
            clearInterval(this.timer)
        }
        render () {
            return <WrapComponent time={this.state.date} {...this.props}/>
        }
    }
}

export default WithTimer;