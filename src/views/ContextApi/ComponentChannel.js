import React, { PureComponent } from 'react';
import ContextApi from './ContextApi'

function ThemedButton(props) {
    return <button style={{width: 20,height: 20,background: props.background}}>{props.background}</button>
}
// 中间组件
function Toolbar(props) {
    // Toolbar 组件必须添加一个额外的 theme 属性
    // 然后传递它给 ThemedButton 组件
    return (
        <div>
            <ThemedButton background={props.background} />
            {/* <span>{props.background}</span> */}
        </div>
    );
}

class ComponentChannel extends PureComponent {
    render() {
        return (
            <div>
                <Toolbar background="red" />
                <ContextApi />
            </div>
        )
    }
}

export default ComponentChannel;