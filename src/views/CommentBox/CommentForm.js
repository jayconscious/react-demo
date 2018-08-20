import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class CommentForm extends PureComponent {
    static propTypes = {
        comments: PropTypes.object.isRequired,
        onSubmit: PropTypes.func.isRequired,
        value: PropTypes.string
    }
    state = {
        content: null
    }
    handleInput = evt => {
        console.log(`输入值 ${evt.target.value}`)
        this.setState({
            content:  evt.target.value
        }, () => {
            this.refs.textarea.value = ''
        })
    }
    render() {
        const { onSubmit, value } = this.props
        const { content } = this.state
        return (
            <div className="comment-form">
                <form onSubmit={evt => evt.preventDefault()}>
                <textarea style={{ display: "block", width: "100%" }} ref="textarea" onBlur={this.handleInput}/>
                    <button onClick={() => onSubmit(content)}>Submit</button>
                </form>
            </div>
        )
    }
}

CommentForm.propTypes = {

};

export default CommentForm;