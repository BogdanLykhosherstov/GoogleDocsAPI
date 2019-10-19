import React from 'react';
import logo from './logo.svg';
import './App.css';
import GoogleDocsViewer from 'react-google-docs-viewer';

const file = "./public/Risk Management Plan.docx"
const type = 'docx'

function App() {
  return (
    <div className="App">
      <h1>Here is the editable doc:</h1>
      <div className="docsFrame">
      <iframe src="https://docs.google.com/document/d/1j0eYjQuPr_W5JR-y4EAyBuBUXlBYA9w3tRrUKk9Sjg8/edit?usp=sharing?embedded=true">

      </iframe>
      </div>
   
    </div>
  );
}

export default App;
