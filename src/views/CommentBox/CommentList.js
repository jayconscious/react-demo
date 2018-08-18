import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import CommentItem from './CommentItem'

class CommentList extends PureComponent {
    static propTypes = {
        comments: PropTypes.array.isRequired
    }
    render() {
        const { comments } = this.props
        return (
            <div>
                {comments.map( (comment, index) => (
                    <CommentItem comment={comment} key={index}/>
                ))}
            </div>
        );
    }
}



export default CommentList;