import React, { useState } from 'react';
import { 
  CheckCircleOutlined, 
  MoreOutlined,
  DownOutlined,
  ClockCircleOutlined,
  ClockCircleFilled,
  SearchOutlined,
  CodepenCircleFilled
} from '@ant-design/icons';
import { icons } from 'antd/es/image/PreviewGroup';

const Tasks = () => {
  const [selectedWeek, setSelectedWeek] = useState('thisWeek');

  const tasksData = [
    {
      id: 1,
      title: "Product Review for UIB Market",
      icon : <CheckCircleOutlined />,
      status: "in progress",
      progress: 30,
      time: "4h"
    },
    {
      id: 2,
      title: "UK Research for Product",
      icon : <SearchOutlined />,
      status: "On hold",
      progress: 0,
      time: "9h"
    },
    {
      id: 3,
      title: "App design and development",
      icon : <CodepenCircleFilled />,
      status: "Done",
      progress: 100,
      time: "32h"
    }
  ];

  const weekOptions = [
    { value: 'thisWeek', label: 'This Week' },
    { value: 'lastWeek', label: 'Last Week' },
    { value: 'nextWeek', label: 'Next Week' }
  ];

//   const getStatusColor = (status) => {
//     switch(status.toLowerCase()) {
//       case 'in progress': return 'text-blue-600';
//       case 'on hold': return 'text-yellow-600';
//       case 'done': return 'text-green-600';
//       default: return 'text-gray-600';
//     }
//   };

//   const getStatusBadge = (status) => {
//     switch(status.toLowerCase()) {
//       case 'in progress': return 'bg-blue-100 text-blue-800';
//       case 'on hold': return 'bg-yellow-100 text-yellow-800';
//       case 'done': return 'bg-green-100 text-green-800';
//       default: return 'bg-gray-100 text-gray-800';
//     }
//   };

  return (
    <div className="bg-white  mb-6 md:mx-6 ">
      {/* Header with Week Selector */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-800">Current Tasks</h2>
        
        <div className="flex items-center space-x-4">
          {/* Progress Label */}
          <span className="text-sm text-gray-600">Done 30%</span>
          
          {/* Week Selector */}
          <div className="relative">
            <select
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-2xl py-1 px-3 pr-6 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent cursor-pointer"
            >
              {weekOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <DownOutlined className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Tasks List */}
      <div className="space-y-4 justify-between ">
        {tasksData.map(task => (
          <div key={task.id} className="flex justify-between space-x-2 p-2 ">
            <div>
              <h4 className="text-sm font-medium text-gray-800 mb-1">  <span className='bg-emerald-100 p-2 mx-2 rounded-4xl'>{task.icon}</span> {task.title}</h4>
            </div>

            <div>
                <p><span className='text-xl font-extrabold text-blue-500'>.</span> {task.status}</p>
            </div>

            <div className='flex text-gray-400 items-center space-x-2'>
                 <ClockCircleFilled className='text-gray-400'/>
                <p className="text-sm font-medium text-gray-800 mb-1">{task.time}</p>
            </div>
            
              <div>
                  <button className="text-black hover:text-gray-600">
                    <MoreOutlined  className='text-black'/>
                  </button>
              </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;