import React, { useState, useEffect, useRef } from 'react';

function RunOutput({ algo, n, urls }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const intervalRef = useRef(null);

  const total = urls.length;
  const current = urls[currentIndex];

  const handleNext = () => {
    if (currentIndex < total - 1) setCurrentIndex(currentIndex + 1);
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const togglePlay = () => {
    if (isPlaying) {
      clearInterval(intervalRef.current);
      setIsPlaying(false);
    } else {
      setIsPlaying(true);
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => {
          if (prev < total - 1) {
            return prev + 1;
          } else {
            clearInterval(intervalRef.current);
            setIsPlaying(false);
            return prev;
          }
        });
      }, 500); // change frame every 500ms
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className='max-w-4xl mx-auto mt-8 px-4'>
      <h2 className='text-2xl font-semibold mb-6 text-center text-blue-700'>
        Visualizing <span className="capitalize">{algo}</span> of n = {n}
      </h2>

      <div className='flex flex-col items-center space-y-4'>

        {/* Image Frame */}
        <div className="relative w-full max-w-[500px] h-[400px] border rounded shadow-lg bg-white flex items-center justify-center">
          <img
            src={current.url}
            alt={current.name}
            className="max-w-full max-h-full object-contain"
          />
          <div className="absolute top-2 right-2 text-sm bg-white/80 px-2 py-1 rounded">
            Frame {currentIndex + 1} / {total}
          </div>
        </div>


        {/* Controls */}
        <div className='flex space-x-4 mt-2'>
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`px-4 py-2 rounded-md transition font-medium ${
              currentIndex === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            ⬅ Prev
          </button>

          <button
            onClick={togglePlay}
            className='px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white font-medium transition'
          >
            {isPlaying ? '⏸ Pause' : '▶ Play'}
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === total - 1}
            className={`px-4 py-2 rounded-md transition font-medium ${
              currentIndex === total - 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            Next ➡
          </button>
        </div>
      </div>
    </div>
  );
}

export default RunOutput;
