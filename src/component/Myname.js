import React from 'react';

class Myname extends React.Component{
    constructor(props) {
        super(props)
        this.state = { name: 'jayconscious' }
    }
    render() {
        return (
          <div>
            My name is: {this.state.name}
          </div>
        );
    }
}

export default Myname