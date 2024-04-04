
import React from 'react';
import './App.css';
import ImageGallery from './components/ImageGallery';
import PerformanceData from './Performance';

function App() {
  return (
    <div className="App">
      <h1>Image Gallery</h1>
      <ImageGallery />
      <PerformanceData />
    </div>
  );
}

export default App;
