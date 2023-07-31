import logo from './logo.svg';
import './App.css';
import download from './images/download.jpeg'
import React from 'react';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Navbar from './components/navbar/Navbar';
import Welcome from './components/welcome/Welcome';
function App() {
  return (
    <div className="App">
      {/* <h2>Image zoom in out</h2>
      <div className='image-box'>
      <TransformWrapper
      initialScale={1}
      initialPositionX={200}
      initialPositionY={100}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <React.Fragment>
          <div className="tools">
            <button onClick={() => zoomIn()}>+</button>
            <button onClick={() => zoomOut()}>-</button>
            <button onClick={() => resetTransform()}>x</button>
          </div>
          <TransformComponent>
            <img src={download} height="200px" width="300px" alt="test" />
          </TransformComponent>
        </React.Fragment>
      )}
    </TransformWrapper>
    </div> */}
    <Navbar/>
    <Welcome/>
    </div>
  );
}

export default App;
