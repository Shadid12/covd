import React, { Component } from "react";
const { Provider, Consumer } = React.createContext();

class ThemeContextProvider extends Component {
  state = {
    name: '',
    email: '',
    hc: '',
    age: '',
    address: ''
  };

  updateState = (newState) => {
    console.log('-->>>>', newState)
    this.setState(newState);
  };

  render() {
    return (
      <Provider
        value={{ state: this.state, updateState: this.updateState }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };
