/* import React from "react";

function App() {
  return <div className="App">Hello World</div>;
}

export default App;
 */

import React, { Component } from "react";
import Navbar from "./components/layout/Navbar";
import Auth from "./components/layout/Auth";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Auth />
      </div>
    );
  }
}

export default App;
