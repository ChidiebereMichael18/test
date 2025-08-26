import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer 
} from 'recharts';
import { DownOutlined } from '@ant-design/icons';
import { useState } from 'react';
const PerformanceStats = () => {
 const [selectedWeek, setSelectedWeek] = useState('thisWeek');
  // Data matching the chart in the image
  const chartData = [
    { day: '01', hours: 12 },
    { day: '02', hours: 8 },
    { day: '03', hours: 6 },
    { day: '04', hours: 2 },
    { day: '05', hours: 0 },
    { day: '06', hours: 4 },
    { day: '07', hours: 9 }
  ];

    const weekOptions = [
    { value: 'thisWeek', label: '01-07 May' },
    { value: 'lastWeek', label: '07-14 May' },
    { value: 'nextWeek', label: '14-21 May' }
  ];
  return (
    <div className="bg-white p-6 mb-4">
      <div className='flex items-center justify-between'>
          <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-6">Performance</h2>
          </div>
              {/* Week Selector */}
                    <div className="relative">
                      <select
                        value={selectedWeek}
                        onChange={(e) => setSelectedWeek(e.target.value)}
                        className="appearance-none bg-white border border-gray-300 rounded-lg py-1 px-3 pr-6 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent cursor-pointer"
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
      
      {/* Chart Container */}
      <div className="h-50 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" vertical={false} />
            <XAxis 
              dataKey="day" 
              stroke="#6b7280" 
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              stroke="#6b7280" 
              axisLine={false}
              tickLine={false}
              ticks={[0, 2, 4, 6, 8, 10, 12]}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #e5e7eb',
                borderRadius: '6px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }} 
            />
            <Bar 
              dataKey="hours" 
              fill="#3b82f6" 
              radius={[4, 4, 0, 0]}
              name="Hours"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Date Range */}
      <div className="text-center text-sm text-gray-500 mb-8">
        01–07 May
      </div>
    </div>
  );
};

export default PerformanceStats;