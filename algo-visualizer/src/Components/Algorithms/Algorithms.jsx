import React from 'react'
import AlgorithmInfoCard from './AlgorithmInfoCard'

const features = [
  {
    title: 'pathfinding algorithms',
    description: 'Visualize pathfinding algorithms and either custom made mazes or using binary tree approach ',
    relativePath: '/algorithms/pathfinding'
  },
  {
    title: 'Recursive algorithms',
    description: 'Visualize Recursive algorithms and either factorial or fibonacci ',
    relativePath: '/algorithms/recursive'
  },
]

function Algorithms() {
  return (
    <div className='bg-black flex items-center justify-center text-white py-[72px] sm:py-24 font-dmsans'>
      <div className='container'>
        <h2 className='text-center font-bold text-5xl sm:text-6xl tracking-tight'>Algorithms you can visualize</h2>
        <div className='max-w-xl mx-auto'>
          <p className='text-center mt-5 text-xl text-white/70'>
          Visualize and understand algorithms of your choice through our visualizers!
        </p>
        </div>
        <div className='flex mt-16 justify-center'>
                    <div className='grid auto-cols-max grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center justify-center w-max'>
          {
            features.map(({title, description, relativePath})=>{
              return <AlgorithmInfoCard title={title.toUpperCase()} description={description.toUpperCase()} relativePath={relativePath} key={title}/>
        })
          }
        </div>
        </div>
      </div>
    </div>
  )
}

export default Algorithms