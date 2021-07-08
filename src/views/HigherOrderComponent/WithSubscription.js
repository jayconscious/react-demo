import React, { Component } from 'react';

// DataSource 全局外部数据资源
/**
 * @param {Com} WrappedComponent 
 * @param {Func} selectData
 */
function WithSubscription(WrappedComponent, selectData) {
    // ……返回另一个新组件……
    return class extends Component{
        // 初始化 可以相关传递的props
        constructor (props) {
            super()
            this.handleChange = this.handleChange.bind(this)
            this.state = {
                data: selectData(DataSource, props)
            }
        }
        componentDidMount () {
            DataSource.addChangeListener(this.handleChange)
        }
        componentWillUnmount () {
            DataSource.removeChangeListener(this.handleChange)
        }
        handleChange () {
            this.setState({
                data: selectData(DataSource, this.props)
            })
        }
        render () {
            const { data } = this.state
            return (
                <WrappedComponent {...props} data={data}/>
            )
        }
    }
}

export default WithSubscription;

// How to use Hoc
// case 1
const CommentListWithSubscription = WithSubscription(
    CommentList,
    (DataSource) => DataSource.getComments()
);
// case 2
const BlogPostWithSubscription = withSubscription(
    BlogPost,
    (DataSource, props) => DataSource.getBlogPost(props.id)
);

// stores/ListStore.js
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ListStore = assign({}, EventEmitter.prototype, {
  items: [],

  getAll: function () {
    return this.items;
  },

  addNewItemHandler: function (text) {
    this.items.push(text);
  },

  emitChange: function () {
    this.emit('change');
  },

  addChangeListener: function(callback) {
    this.on('change', callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener('change', callback);
  }
});
