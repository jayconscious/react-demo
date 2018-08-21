import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FuncAsComponent extends Component {
    static propTypes = {
        children: PropTypes.func.isRequired
    }
    render() {
        return (
            <div>
                {this.props.children('jayconscious')}
            </div>
        );
    }
}

// function FuncAsComponent(params) {
//     return (<WrapComponent/>
//         {() => (
//             <span></span>
//         )}
//     <WrapComponent/> )
// }

// class FuncAsComponent extends Component {
//     render() {
//         return (
//             <div>
//                 <WrapComponent>
//                     {() => (
//                         <span></span>
//                     )}
//                 <WrapComponent/>
//             </div>
//         );
//     }
// }

export default FuncAsComponent;