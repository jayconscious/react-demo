import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class CommentItem extends PureComponent {
    static propTypes = {
        comment: PropTypes.object.isRequired
    };
    render() {
        const { author, content } = this.props.comment
        return (
            <div className="comment-item">
                <span className="avatar"></span>
                <p>{ author }</p>
                <span>{ content }</span>
            </div>
        );
    }
}