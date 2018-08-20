import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class CommentForm extends PureComponent {
    static propTypes = {
        comments: PropTypes.object.isRequired,
        onSubmit: PropTypes.func.isRequired
    }
    state = {
        content: null
    }
    render() {
        const { onSubmit } = this.props
        return (
            <div className="comment-form">
                <form onSubmit={evt => evt.preventDefault()}>
                <textarea style={{ display: "block", width: "100%" }} ref="textarea"/>
                    <button onClick={() => onSubmit(this.refs.textarea.value)}>Submit</button>
                </form>
            </div>
        )
    }
}

CommentForm.propTypes = {

};

export default CommentForm;