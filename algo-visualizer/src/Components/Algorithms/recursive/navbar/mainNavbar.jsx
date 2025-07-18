// NavBar.jsx
import React, { useState } from 'react';
import AlgoSelect from './algoSelect';
import JSZip from 'jszip';

const RecursiveAlgos = [
  { name: 'Fibonacci', value: 'fibonacci' },
  { name: 'Factorial', value: 'factorial' },
];

function NavBar({ onRun }) {
  const [selectedAlgo, setSelectedAlgo] = useState('fibonacci');
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  const handleRunClick = async () => {
    if (!inputValue || isNaN(inputValue)) {
      alert('Please enter a valid number');
      return;
    }

    const n = Number(inputValue);
    if (n < 0 || n > 7) {
      alert('Please provide n between 0 and 7');
      return;
    }

    setLoading(true);

    try {

      const response = await fetch(`/api/${selectedAlgo}?n=${n}`, {
        method: 'POST',
      });

      if (!response.ok) throw new Error('API Error');

      const zipBlob = await response.blob();
      const zip = await JSZip.loadAsync(zipBlob);

      const sortedFiles = Object.keys(zip.files).sort();
      const urls = [];

      for (const filename of sortedFiles) {
        const file = zip.files[filename];
        const blob = await file.async('blob');
        const blobUrl = URL.createObjectURL(blob);
        urls.push({ name: filename, url: blobUrl });
      }

      // Send result to parent
      onRun({ algo: selectedAlgo, n, urls });

    } catch (err) {
      alert('Something went wrong');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex items-center justify-center min-h-[4.5rem] border-b shadow-gray-600 bg-white px-4'>
      <div className='flex items-center lg:justify-between justify-center w-full sm:w-[52rem]'>
        <h1 className='md:flex hidden w-[50%] text-2xl pl-1'>Recursion Visualizer</h1>

        <div className='flex sm:items-end items-center justify-start sm:justify-between sm:flex-row flex-col sm:space-y-0 space-y-3 sm:py-0 py-4 sm:space-x-4 w-full'>
          <AlgoSelect
            value={selectedAlgo}
            options={RecursiveAlgos}
            label='Algorithm'
            onChange={(e) => setSelectedAlgo(e.target.value)}
          />

          <div className='flex flex-col items-start gap-1'>
            <label className='text-xs text-gray-700 ml-1'>Input (n)</label>
            <input
              type='number'
              className='border p-2 rounded-md w-24 bg-gray-100'
              placeholder='Enter n'
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </div>

          <button
            onClick={handleRunClick}
            disabled={loading}
            className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition'
          >
            {loading ? 'Running...' : 'Run'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
