import React from 'react'
import NavBar from './Component/NavBar/NavBar'
import Home from './Component/Home/Home';
const App = () => {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}
export default App
