import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './TabSelector.css'

class TabSelector extends PureComponent {
    static propTypes = {
        value: PropTypes.string,
        options: PropTypes.array,
        onChange: PropTypes.func
    }
    static defaultProps = {
        value: null,
        options: [],
        onChange: () => {}
    }
    render() {
        const { value, options, onChange } = this.props
        return (
            <div className="tab-selector">
                <ul>
                    {options.map((opt,index ) => (
                        <li 
                        key={index}
                        className={`tab-item ${
                            value === opt.value ? 'selected': ''}`
                        }
                        onClick={() => onChange(opt.value)}
                        >
                        {opt.label}
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    componentDidUpdate () {
        console.log('子组件更新完毕：')
        console.log(this.props)
    }
}

const options = [{
    label: 'zzy',
    value: '12'
},{
    label: 'shx',
    value: '13'
},{
    label: 'ydh',
    value: '15'
},{
    label: 'lt',
    value: '19'
}]

class TabSelectorExample extends PureComponent {
    state = {
        index: null
    }
    // showLabel = (opt, val) => {
    //     let label = ''
    //     opt.map((item) => {
    //         if (item.value === val) {
    //             label = item.item
    //         }
    //     })
    //     return label
    // }
    render() {
        return (
            <div>
                Select leader is: {this.state.leader?this.state.leader: 'chzu223'} <br/>
                <TabSelector 
                value={this.state.leader} 
                options={options}
                onChange={val => {
                    this.setState({leader: val}, 
                    () => console.log(this.state.leader))
                }}
                />
            </div>
        );
    }
}

export default TabSelectorExample;
