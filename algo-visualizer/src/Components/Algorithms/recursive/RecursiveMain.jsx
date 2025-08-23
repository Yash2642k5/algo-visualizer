// RecursiveAlgoMain.jsx
import React, { useState, useRef } from 'react';
import NavBar from './navbar/mainNavbar';
import RunOutput from './Route/RunOutput';

function RecursiveAlgoMain() {
  const [runData, setRunData] = useState(null);
  const isPlayButtonPressed = useRef(false);

  return (
    <div>
      <NavBar onRun={setRunData} isPlayButtonPressed={isPlayButtonPressed} />
      <div className='p-4'>
        {runData  ? (
          <RunOutput {...runData} isPlayButtonPressed={isPlayButtonPressed}/>
        ) : (
          <div className='text-gray-500 text-center pt-10'>
            Select an algorithm and hit Run to visualize...
          </div>
        )}
      </div>
    </div>
  );
}

export default RecursiveAlgoMain;
