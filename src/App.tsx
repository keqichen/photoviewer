import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { PhotoViewer } from './photoviewer/PhotoViewer';
import { ImageSelector } from './ImageSelector';
import './App.css'

function App() {
  return (
    <div>
      <h1>React Photo Viewer</h1>
      <PhotoViewer imgUrl="https://picsum.photos/id/250/600/600.jpg" />
      <ImageSelector />
    </div>
  );
}

export default App
