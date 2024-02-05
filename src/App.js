import React from 'react';
import './index.css';
import MyTab from './components/MyTab';

function App() {
  const containerStyle = {
    margin: '20px',    // Adjust margin as needed
    padding: '20px'    // Adjust padding as needed
  };

  return (
    <div className="App" style={containerStyle}>
      <MyTab />
    </div>
  );
}

export default App;
