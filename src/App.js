import React from 'react'
import Myname from './component/Myname'
import Timer from './component/Timer'
import Hello from './component/Hello'
import ListSample from './component/ListSample'
import WizardSample from './component/WizardSample'
import CommentBox from './views/CommentBox/CommentBox'
import TabSelector from './views/TabSelect/TabSelector'
import ChatApp from './views/ChatApp/ChatApp'

const routeMap = {
  'my-name': Myname,
  'comment-box': CommentBox,
  'tab-selector': TabSelector,
  'chat-app': ChatApp,
  timer: Timer,
  hello: Hello,
}

const styles = {
  fontFamily: 'sans-serif',
  paddingLeft: '250px'
}

export default class App extends React.PureComponent {
  handleLinkClick = key => {
    window.history.pushState(null, "", `/#/${key}`)
    this.forceUpdate()
  }
  render() {
    const currentPage = document.location.hash.replace(/#\/?/, "")
    console.log(`当前的页面：${currentPage}`)
    let CurrentPage = routeMap[currentPage] || Hello;
    if (currentPage.match(/\/user\/\w+|\/list-page/)) {
      CurrentPage = ListSample;
    }
    if (currentPage.match(/\/wizard\/step\/\w+/)) {
      CurrentPage = WizardSample;
    }
    return (
      <div style={styles}>
        <ul className='menu-list'>
          {Object.keys(routeMap).map( key => (
            <li
            key={key}
            className={key === currentPage? 'is-active': ''}
            style={{listStyle: 'none'}}
            >
              <span className="link" onClick={ () => this.handleLinkClick(key) }>
                { key }
              </span>
            </li>
          ))}
        </ul>
        <div style={{padding: "30px 0"}}>
          <CurrentPage />
        </div>
      </div>
    );
  }
}