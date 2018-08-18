import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import "./CommentBox.css";

const comments = [
    {
        author: "叶邓海",
        content: "南京，前端开发工程师， 一只单身汪",
    },
    { 
        author: "刘涛", 
        content: "杭州， 前端开发，可能要分手了" 
    },
    { 
        author: "司红新", 
        content: "杭州，研究生在读（导师虐待中？）" 
    },
    { 
        author: "朱志勇", 
        content: "杭州，前端开发，react studying"
    },
];
class CommentBox extends React.PureComponent {
    render() {
        return (
            <div className="comment-box">
                <h2>chzu 223 共计 ({comments.length}) 人</h2>
                <CommentList comments={comments} />
                <CommentForm />
            </div>
        );
    }
}
export default CommentBox;