import React, {
  Component
} from "react";
import "./App.css";
import P5Wrapper from 'react-p5-wrapper';
import sketch2 from "./components/p5-js-comp.js/sketch2";

class App extends Component {

  render() {


    return ( <
      div > < P5Wrapper sketch = {
        sketch2
      }
      rotation = {
        100
      }
      /></div >
    );
  }
}


export default App;