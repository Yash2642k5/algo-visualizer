import React from 'react';
import { useLocation } from 'react-router-dom';


function RecursiveMainbody() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const n = query.get('n');

  return (
    <div>
      <h2>Fibonacci Page</h2>
      <p>Calculating Fibonacci of {n}</p>
      {/* You can add your logic here */}
    </div>
  );
}

export default RecursiveMainbody;
