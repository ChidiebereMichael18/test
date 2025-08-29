import React from 'react';
import Tasks from '../components/ui/Tasks';
import PerformanceStats from '../components/ui/PerformanceStats';
import { LikeOutlined, ClockCircleOutlined, BarChartOutlined } from '@ant-design/icons';

function Home() {
  return (
    <div className="px-4 sm:px-6 md:px-8">
      <div className="flex flex-col sm:flex-row py-4 border-b border-gray-200 justify-between gap-4 sm:gap-0">
        <div className="flex items-center space-x-2 sm:space-x-3 border-b sm:border-r sm:border-b-0 px-2 sm:px-4 border-gray-200 pb-2 sm:pb-0">
          <LikeOutlined className="bg-gray-100 p-2 sm:p-3 rounded-2xl text-lg sm:text-xl" />
          <div>
            <p className="text-black text-xs sm:text-sm font-bold">Finished</p>
            <p className="text-xs sm:text-sm font-bold">
              18 <span className="text-xs sm:text-sm text-green-600">+8 tasks</span>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3 border-b sm:border-r sm:border-b-0 px-2 sm:px-4 border-gray-200 py-2 sm:py-0">
          <ClockCircleOutlined className="bg-gray-100 p-2 sm:p-3 rounded-2xl text-lg sm:text-xl" />
          <div>
            <p className="text-black text-xs sm:text-sm font-bold">Tracked</p>
            <p className="text-xs sm:text-sm font-bold">
              31h <span className="text-xs sm:text-sm text-red-600">+6 hours</span>
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2 sm:space-x-3 px-2 sm:px-4 pt-2 sm:pt-0">
          <BarChartOutlined className="bg-gray-100 p-2 sm:p-3 rounded-2xl text-lg sm:text-xl" />
          <div>
            <p className="text-black text-xs sm:text-sm font-bold">Efficiency</p>
            <p className="text-xs sm:text-sm font-bold">
              93% <span className="text-xs sm:text-sm text-green-600">+12%</span>
            </p>
          </div>
        </div>
      </div>
      <PerformanceStats />
      <Tasks />
    </div>
  );
}

export default Home;