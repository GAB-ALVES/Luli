import React, {useState} from 'react';
import './App.css';


import Challenge
  from './pages/Challenge/Challenge';
import Ask from './pages/Ask/Ask';
  
function App() {
    const link = 'https://drive.google.com/drive/folders/1c5H6hAFIKE5GtEWJxi_zNT_aeWRddxjf?usp=sharing';
    const [level3, setLevel3] = useState(false);

    const [page, setPage] = useState(0);
    const pages = [<Challenge setAsk={setPage} setLevel3={setLevel3}/>, <Ask/>]

  return (
    <div className="App">
      {
        level3 ? 
        <a href={link} target='_blank' rel='noreferrer' className='stealthy'>be alert!!</a>:
        null
      }
      {pages[page]}
    </div>
  );
}

export default App;
