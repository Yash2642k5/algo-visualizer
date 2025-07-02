// RecursiveAlgoMain.jsx
import React, { useState } from 'react';
import NavBar from './navbar/mainNavbar';
import RunOutput from './Route/RunOutput';

function RecursiveAlgoMain() {
  const [runData, setRunData] = useState(null);

  return (
    <div>
      <NavBar onRun={setRunData} />
      <div className='p-4'>
        {runData ? (
          <RunOutput {...runData} />
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
