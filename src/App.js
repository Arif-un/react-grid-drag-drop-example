import React from 'react';
import './App.css';
import ElementBoard from './components/ElementBoard'
import OutputBoard from './components/OutputBoard'
import dragula from 'react-dragula'

class AppRoot extends React.Component {

  componentDidMount () {
    let left = document.getElementById('left');
    let right = document.getElementById('right');
    dragula([left, right]);
  }

  render() {
    return (
      <div className="App">
        <ElementBoard id="left" className="container" ref={this.dragulaDecorator} />
        <OutputBoard id="right" className="container" ref={this.dragulaDecorator} />
      </div>
    );
  }

}

//export default AppRoot;

var App = React.createClass({
  render: function () {
    return <div className='container'>
      <div>Swap me around</div>
      <div>Swap her around</div>
      <div>Swap him around</div>
      <div>Swap them around</div>
      <div>Swap us around</div>
      <div>Swap things around</div>
      <div>Swap everything around</div>
    </div>;
  },
  componentDidMount: function () {
    var container = React.findDOMNode(this);
    dragula([container]);
  }
});
export default App;