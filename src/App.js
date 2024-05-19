import './App.css';
import AppHeader from './Components/AppHeader';
import { useState } from 'react';
import FileUploadOverlay from './Components/FileUploadOverlay'

const App = () => {
  const [isUpload, setUpload] = useState(false);


  return (
    <div className="App">
      <AppHeader isUpload={isUpload} setUpload={setUpload}/>
      {isUpload && <FileUploadOverlay />}
      
    </div>
  );
}

export default App;
