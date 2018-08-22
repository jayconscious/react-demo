import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import WithTimer from '../HigherOrderComponent/WithTimer'
// import Timer from '../../component/Timer'
import './TabSelector.css'

class TabSelector extends PureComponent {
    static propTypes = {
        value: PropTypes.string,
        options: PropTypes.array,
        onChange: PropTypes.func,
        children: PropTypes.func
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
                <div>
                    {this.props.value && this.props.children(this.props.value)}
                </div>
            </div>
        )
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
        leader: null
    }
    handleVal = val => { this.setState({leader: val}) }
    render() {
        return (
            <div>
                Select leader is: {this.state.leader?this.state.leader: 'chzu223'} <br/>
                <TabSelector
                value={this.state.leader} 
                options={options}
                onChange={this.handleVal}
                >
                {(val) => {
                    if (val === '13') {
                        return <span>The value is {val}</span>
                    } else{
                        return <p>The val is {val}</p>
                    }
                }}
                </TabSelector>
            </div>
        );
    }
}

// export default WithTimer(TabSelectorExample)
export default TabSelectorExample
