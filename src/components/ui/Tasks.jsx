import React, { useState } from 'react';
import {
  CheckCircleOutlined,
  MoreOutlined,
  DownOutlined,
  ClockCircleOutlined,
  SearchOutlined,
  CodepenCircleFilled,
} from '@ant-design/icons';

const Tasks = () => {
  const [selectedWeek, setSelectedWeek] = useState('thisWeek');

  const tasksData = [
    {
      id: 1,
      title: 'Product Review for UIB Market',
      icon: <CheckCircleOutlined />,
      status: 'In Progress',
      progress: 30,
      time: '4h',
    },
    {
      id: 2,
      title: 'UK Research for Product',
      icon: <SearchOutlined />,
      status: 'On Hold',
      progress: 0,
      time: '9h',
    },
    {
      id: 3,
      title: 'App design and development',
      icon: <CodepenCircleFilled />,
      status: 'Done',
      progress: 100,
      time: '32h',
    },
  ];

  const weekOptions = [
    { value: 'thisWeek', label: 'This Week' },
    { value: 'lastWeek', label: 'Last Week' },
    { value: 'nextWeek', label: 'Next Week' },
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'in progress':
        return 'text-blue-600';
      case 'on hold':
        return 'text-yellow-600';
      case 'done':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  const getStatusBadge = (status) => {
    switch (status.toLowerCase()) {
      case 'in progress':
        return 'bg-blue-100 text-blue-800';
      case 'on hold':
        return 'bg-yellow-100 text-yellow-800';
      case 'done':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white p-3 sm:p-4 md:p-6 mb-4 sm:mb-6 rounded-lg shadow-sm">
      {/* Header with Week Selector */}
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
          Current Tasks
        </h2>
        <div className="flex items-center space-x-3 sm:space-x-4 mt-2 sm:mt-0">
          {/* Progress Label */}
          <span className="text-xs sm:text-sm text-gray-600">Done 30%</span>
          {/* Week Selector */}
          <div className="relative w-full sm:w-auto">
            <select
              value={selectedWeek}
              onChange={(e) => setSelectedWeek(e.target.value)}
              className="appearance-none bg-white border border-gray-300 rounded-xl py-1.5 sm:py-2 px-3 sm:px-4 pr-8 text-xs sm:text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent cursor-pointer w-full sm:w-auto"
            >
              {weekOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <DownOutlined className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs sm:text-sm pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Tasks List */}
      <div className="space-y-3 sm:space-y-4">
        {tasksData.map((task) => (
          <div
            key={task.id}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-2 sm:p-3 bg-gray-50 rounded-lg hover:bg-gray-100"
          >
            <div className="flex items-center space-x-2 sm:space-x-3">
              <span className="bg-emerald-100 p-1.5 sm:p-2 rounded-xl text-base sm:text-lg">
                {task.icon}
              </span>
              <h4 className="text-xs sm:text-sm md:text-base font-medium text-gray-800">
                {task.title}
              </h4>
            </div>

            <div className="flex items-center space-x-2 sm:space-x-4 mt-2 sm:mt-0">
              <p
                className={`text-xs sm:text-sm font-medium ${getStatusBadge(
                  task.status
                )} px-2 py-0.5 rounded-full`}
              >
                {task.status}
              </p>
              <div className="flex items-center space-x-1 sm:space-x-2 text-gray-400">
                <ClockCircleOutlined className="text-base sm:text-lg" />
                <p className="text-xs sm:text-sm font-medium text-gray-800">
                  {task.time}
                </p>
              </div>
              <button className="text-gray-600 hover:text-gray-800">
                <MoreOutlined className="text-base sm:text-lg" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;