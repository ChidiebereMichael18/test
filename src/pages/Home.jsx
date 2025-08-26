import React from 'react'
import Tasks from '../components/ui/Tasks'
import PerformanceStats from '../components/ui/PerformanceStats'

function Home() {
  return (
    <div>
      <div className="flex items-center md:mx-8 mx-4 justify-between">
        <div className="text-center">
          <p className="text-gray-600">Finished</p>
          <p className="text-lg font-bold">18 <span className="text-sm text-green-600">+8 tasks</span></p>
        </div>
        <div className="text-center">
          <p className="text-gray-600">Tracked</p>
          <p className="text-lg font-bold">31h <span className="text-sm text-red-600">+6 hours</span></p>
        </div>
        <div className="text-center">
          <p className="text-gray-600">Efficiency</p>
          <p className="text-lg font-bold">93% <span className="text-sm text-green-600">+12%</span></p>
        </div>
      </div>
      <PerformanceStats/>
      <Tasks/>
    </div>
  )
}

export default Home