import React from 'react'
import Tasks from '../components/ui/Tasks'
import PerformanceStats from '../components/ui/PerformanceStats'
import { LikeOutlined, ClockCircleOutlined, BarChartOutlined} from '@ant-design/icons';

function Home() {
  return (
    <div>
      <div className="flex py-4 border-b border-gray-200 md:mx-8 justify-between">
        <div className="text-center flex space-x-1 border-r px-2 border-gray-200">  
          <div className='flex text-black '>
            <LikeOutlined className='bg-gray-100 p-2 rounded-2xl mt-2'/>
            </div>
          <div className=''>
            <p className="text-black font-bold">Finished</p>
            <p className="text-sm font-bold">18 <span className="text-sm text-green-600">+8 tasks</span></p>
          </div>
        </div>

        <div className="flex text-black space-x-1 border-r px-2 border-gray-200">
            <div className='flex text-black '>
            <ClockCircleOutlined className='bg-gray-100 p-2 rounded-2xl mt-2'/>
            </div>
          <div>
            <p className="text-black font-bold">Tracked</p>
            <p className="text-sm font-bold">31h <span className="text-sm text-red-600">+6 hours</span></p>
          </div>
        </div>


        <div className="flex text-black space-x-1">
            <div className='flex text-black '>
            <BarChartOutlined className='bg-gray-100 p-2 rounded-2xl mt-2'/>
            </div>
          <div>
            <p className="text-black font-bold">Efficiency</p>
            <p className="text-sm font-bold">93% <span className="text-sm text-green-600">+12%</span></p>
          </div>
        </div>
      </div>
      <PerformanceStats/>
      <Tasks/>
    </div>
  )
}

export default Home