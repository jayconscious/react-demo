import React, { Component } from 'react';

class Timer extends Component {
    state = {
        date: new Date()
    }
    componentDidMount () {
        this.timer = setInterval(() => {
            this.tick()
        }, 1000)
    }
    tick() {
        this.setState({
            date: new Date()
        })
    }
    componentWillUnmount () {
        clearInterval(this.timer)
    }
    componentDidUpdate () {
        // console.log('页面更新了')
    }
    render() {
        return (
            <div>
                this is a Timer react component!
                <p>{this.state.date.toLocaleTimeString()}</p>
            </div>
        );
    }
}

export default Timer;