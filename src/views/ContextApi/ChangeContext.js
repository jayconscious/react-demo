import React, { Component, PureComponent } from 'react';
const enStrings = {
    'sub': 'submit',
    'can': 'cancel'
}
const cnStrings = {
    'sub': '提交',
    'can': '取消'
}
const languageContext = React.createContext(enStrings)

class LanguageProvider extends Component {
    constructor (props) {
        super(props)
        this.state = { locale: cnStrings };
    }
    toggleLocal = () => {
        const locale = this.state.locale === cnStrings
        ? enStrings
        : cnStrings
        this.setState({locale})
    }
    render () {
        return (
            <languageContext.Provider value={this.state.locale}>
                <div>
                    <button onClick={this.toggleLocal}>改变主题</button>
                    <span style={{marginTop: 20}}>
                    {this.props.children}
                    </span>
                </div>
            </languageContext.Provider>
        );
    }
}

class LanguageConsumer extends Component {
    render () {
        return (
            <languageContext.Consumer>
                { locale => (
                    <div>
                        <p>{locale.sub}</p>
                        <p>{locale.can}</p>
                    </div>
                )}
            </languageContext.Consumer>
        )
    }
}

class ChangeContext extends PureComponent {
    render() {
        return (
            <div>
                <LanguageProvider>
                    <LanguageConsumer />
                </LanguageProvider>
            </div>
        );
    }
}

export default ChangeContext;