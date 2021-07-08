import React, { Component } from 'react';

// const BgContext = React.createContext('red')
// function BgButton(props) {
//     return (
//         <BgContext.Consumer>
//             {bg => <button {...props}>{bg}</button>}
//         </BgContext.Consumer>
//     )
// }
// function Toolbar(props) {
//     return <BgButton />
// }

// class ContextApi extends Component {
//     render() {
//         return (
//             <div style={{marginTop: 20}}>
//                 <BgContext.Provider value="dark">
//                     <Toolbar />
//                 </BgContext.Provider>
//             </div>
//         );
//     }
// }

// export default ContextApi;

// 创建一个 theme Context,  默认 theme 的值为 light
const ThemeContext = React.createContext('light');

function ThemedButton(props) {
  // ThemedButton 组件从 context 接收 theme
  return (
    <ThemeContext.Consumer>
      {theme => <button {...props} theme={theme} >{theme}</button>}
    </ThemeContext.Consumer>
  );
}

// 中间组件
function Toolbar(props) {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

class ContextApi extends Component {
    state = {
        color: 'blue'
    }
    componentDidMount () {

    }
    render() {
        const { color } = this.state
        return (
        // 接收一个 value 属性传递给 Provider 的后代 Consumers。
        // 一个 Provider 可以联系到多个 Consumers。Providers 可以被嵌套以覆盖组件树内更深层次的值
        <ThemeContext.Provider value={color}>
            <Toolbar />
        </ThemeContext.Provider>
        );
    }
}

export default ContextApi;