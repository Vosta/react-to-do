import React, { Component } from "react";
import "./App.css";
import ItemList from "./components/ItemList";
import NavBar from "./components/NavBar";
import CreateItemField from "./components/CreateItemField";

class App extends Component {
  state = {
    inputValue: '',
    items: [{
      text: 'Lele',
      checked: false
    }]
  };
  handleInputChange = (event) => {
    const inputValue = event.target.value;
    this.setState({
      inputValue: inputValue
    });
  }
  handleCreateItem = () => {
    const newValue = this.state.inputValue;
    if(newValue.length === 0) return;
    const newItem = {
      text: newValue,
      checked: false
    };
    const stateItems = this.state.items;
    this.setState({
      items: [...stateItems, newItem],
      inputValue: ''
    });
  }
  handleToggle = event => {
    const itemIndex = event.target.tabIndex;
    let stateItems = this.state.items;
    stateItems[itemIndex].checked = !stateItems[itemIndex].checked;
    this.setState({
      items: [...stateItems],
    })
  };
  render() {
    return (
      <div className="App">
        <NavBar />
        <CreateItemField 
          onEnterPressed = {this.handleCreateItem}
          createItem = {this.handleCreateItem} 
          inputChanged = {this.handleInputChange} 
          inputValue = {this.state.inputValue} />
        <ItemList 
          className = "itemList"
          items={this.state.items} 
          onToggle={this.handleToggle} />
      </div>
    );
  }


}

export default App;
