import React from 'react';
import './index.css';
import MyTab from './components/MyTab';

function App() {
  const containerStyle = {
    margin: '20px',    
    padding: '20px'    
  };

  return (
    <div className="App" style={containerStyle}>
      <MyTab />
    </div>
  );
}

export default App;
