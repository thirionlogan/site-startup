import React from 'react';
import ReactDOM from 'react-dom';
import Overlay from './components/Overlay/Overlay';

// Main Entry point function
export default function App() {
  return <Overlay />;
}

// Rendering the entire react application
ReactDOM.render(<App />, document.getElementById('root'));
