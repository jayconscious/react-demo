import React, { Component } from 'react';

const DataSource = {
    getComments: function () {
        return ['zw', 'zzy', 'syx']
    }
}

class CommentList extends Component {
    constructor () {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.state = {
            // DataSource 作为全局的数据资源
            comments: DataSource.getComments()
        }
    }
    componentDidMount () {
        // 第三方库所提供的监听
        DataSource.addChangeListener(this.handleChange)
    }
    componentWillUnmount () {
        DataSource.removeChangeListener(this.handleChange)
    }
    handleChange = () => {
        this.setState({
            comments: DataSource.getComments()
        })
    }
    render() {
        const { comments } = state
        return (
            <div>
                <ul>
                    {comments.map((com, i) => (
                        <li key={i}>{com}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default CommentList;