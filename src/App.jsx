import React, {useState} from 'react';
import './App.css';


import Challenge
  from './pages/Challenge/Challenge';
import Ask from './pages/Ask/Ask';
  
function App() {
    // const link = 'https://drive.google.com/drive/folders/1c5H6hAFIKE5GtEWJxi_zNT_aeWRddxjf?usp=sharing';
    // const [level3] = useState(false);

    const [page, setPage] = useState(0);
    const pages = [<Challenge setAsk={setPage}/>, <Ask/>]

  return (
    <div className="App">
      {pages[page]}
    </div>
  );
}

export default App;
