import React from 'react'
import { createStore } from 'redux'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Myname from './component/Myname'
import Timer from './component/Timer'
import Hello from './component/Hello'
import ListSample from './component/ListSample'
import WizardSample from './component/WizardSample'
import CommentBox from './views/CommentBox/CommentBox'
import TabSelector from './views/TabSelect/TabSelector'
import ChatApp from './views/ChatApp/ChatApp'
import SnapshotBeforeUpdate from './views/ChatApp/SnapshotBeforeUpdate'
import ComponentChannel from './views/ContextApi/ComponentChannel'
import ReduxDemo from './views/Redux/ReduxDemo'
import ChangeContext  from './views/ContextApi/ChangeContext'
import reducer from './reducers'
import NestedRouter from './views/Router/NestedRouter'

const routeMap = {
  '/my-name': Myname,
  '/comment-box': CommentBox,
  '/tab-selector': TabSelector,
  '/chat-app': ChatApp,
  '/snapshot-before-update': SnapshotBeforeUpdate,
  '/timer': Timer,
  '/hello': Hello,
  '/component-channel': ComponentChannel,
  '/change-context': ChangeContext,
  '/redux-demo': ReduxDemo,
  '/topic': NestedRouter
}

const styles = {
  fontFamily: 'sans-serif',
  paddingLeft: '250px'
}

let store = createStore(reducer)
console.log(store.getState())

export default class App extends React.PureComponent {
  constructor (props) {
    super(props)
  }
  componentDidUpdate (props) {
    console.log(props)
  }
  handleLinkClick = key => {
    window.history.pushState(null, "", `/#/${key}`)
    this.forceUpdate()
  }
  render() {
    const currentPage = document.location.hash.replace(/#\/?/, "")
    console.log(`当前的页面：${currentPage}`)
    // let CurrentPage = routeMap[currentPage] || Hello;
    // if (currentPage.match(/\/user\/\w+|\/list-page/)) {
    //   CurrentPage = ListSample;
    // }
    // if (currentPage.match(/\/wizard\/step\/\w+/)) {
    //   CurrentPage = WizardSample;
    // }
    return (
      // <div style={styles}>
      //   <ul className='menu-list'>
      //     {Object.keys(routeMap).map( key => (
      //       <li
      //       key={key}
      //       className={key === currentPage? 'is-active': ''}
      //       style={{listStyle: 'none'}}
      //       >
      //         <span className="link" onClick={ () => this.handleLinkClick(key) }>
      //           { key }
      //         </span>
      //       </li>
      //     ))}
      //   </ul>
      //   <div style={{padding: "30px 0"}}>
      //     <CurrentPage />
      //   </div>
      // </div>
      <Router>
        <div style={styles}>
          <ul className='menu-list'>
            {
              Object.keys(routeMap).map(key => (
                <li
                key={key}
                className={key === currentPage? 'is-active': ''}
                style={{listStyle: 'none'}}>
                  <Link className="link" to={`${key}`}>{key.replace('/', '')}</Link>
                </li>
              ))
            }
          </ul>
          <div style={{padding: "30px 0"}}>
            {Object.keys(routeMap).map(key => (
              key !== '/topic'
              ? <Route key={key} path={`${key}`} component={routeMap[key]}></Route>
              : <Route key={key} path='/topic' component={NestedRouter}></Route>
              ))}
          </div>
        </div>
      </Router>
    );
  }
}