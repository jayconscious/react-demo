import React, { PureComponent } from 'react';
import './ChatApp.css'

class SnapshotBeforeUpdate extends PureComponent {
    state = {
        messages: []
    }
    handleNewMessage () {
        this.setState( prev => ({
            messages: [
                `msg ${prev.messages.length}`,
                ...prev.messages
            ]
        }))
    }
    componentDidMount() {
        for (let i = 0; i < 20; i++) {
            this.handleNewMessage();
        }
        this.timer = window.setInterval(() => {
            if (this.state.messages.length > 200) {
                window.clearInterval(this.timer)
                return
            }
            this.handleNewMessage();
        }, 1000)
    }
    componentWillUnmount () {
        window.clearInterval(this.timer)
    }
    getSnapshotBeforeUpdate() {
        return this.rootNode.scrollHeight
    }
    componentDidUpdate ( prevProps, prevState, prevScrollHeight) {
        const scrollTop = this.rootNode.scrollTop
        if (scrollTop < 5) return
        this.rootNode.scrollTop = 
            scrollTop +
            (this.rootNode.scrollHeight - prevScrollHeight)
    }
    render() {
        return (
            <div
                className="snapshot-sample"
                // TODO:
                ref={n => (this.rootNode = n)}
            >
                {this.state.messages.map(msg => <div key={msg}>{msg}</div>)}
            </div>
        );
    }
}

export default SnapshotBeforeUpdate;