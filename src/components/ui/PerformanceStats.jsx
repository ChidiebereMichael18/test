import React from 'react';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

const PerformanceStats = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Performance</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-red-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-red-700">03 May 2023</span>
            <ArrowDownOutlined className="text-red-500" />
          </div>
          <p className="text-xs text-red-600">This month lost month</p>
          <p className="text-2xl font-bold text-red-800 mt-2">7h</p>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-blue-700">Current</span>
            <ArrowUpOutlined className="text-blue-500" />
          </div>
          <p className="text-xs text-blue-600">This month</p>
          <p className="text-2xl font-bold text-blue-800 mt-2">8h</p>
        </div>
      </div>
    </div>
  );
};

export default PerformanceStats;