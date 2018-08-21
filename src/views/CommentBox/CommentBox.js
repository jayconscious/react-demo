import React from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import "./CommentBox.css";

class CommentBox extends React.PureComponent {
    state = {
        comments: [
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
            }],
            val: ''
    }
    editComment = content => {
        console.log('content :', content)
        if (content) {
            // 写法一
            // const newList = [...this.state.comments, {content, author: 'default'}]
            // this.setState({comments: newList})
            // 写法二
            this.setState(prevState => ({
                // comments: prevState.comments.concat([{content, author: 'default'}])
                comments: [...prevState.comments, {content, author: 'default'}]
                // TODO: why can't work
                // comments: prevState.comments.push({content, author: 'default'})
            }))
            // 写法三 要用setState去触发 state的更新
            // this.state.comments.push({content, author: 'default'})
            // this.setState({
            //     comments: this.state.comments
            // })
        }
    }
    render() {
        const { comments, val } = this.state
        return (
            <div className="comment-box">
                <h2>chzu 223 共计 ({comments.length}) 人</h2>
                <CommentList comments={comments} />
                <CommentForm onSubmit={this.editComment} value={val}/>
            </div>
        );
    }
    componentDidUpdate () {
        console.log('页面更新完毕')
    }
}
export default CommentBox;