import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { PhotoViewer } from './photoviewer/PhotoViewer';
import { ImageSelector } from './ImageSelector';
import { Menu } from './Menu';

import './App.css'




function App() {

  const [image, setImage] = useState("https://picsum.photos/id/600/600/600.jpg");


  return (
    <div>
      <h1>React Photo Viewer</h1>
      <Menu />
      <PhotoViewer imgUrl={image} />
      <ImageSelector image={image} setState={setImage} />
    </div>
  );
}


export default App
