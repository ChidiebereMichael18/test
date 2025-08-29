import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { DownOutlined } from "@ant-design/icons";

const PerformanceStats = () => {
  const [selectedWeek, setSelectedWeek] = useState("thisWeek");

  // Data matching the chart
  const chartData = [
    { day: "01", hours: 12 },
    { day: "02", hours: 8 },
    { day: "03", hours: 6 },
    { day: "04", hours: 2 },
    { day: "05", hours: 0 },
    { day: "06", hours: 4 },
    { day: "07", hours: 9 },
  ];

  const weekOptions = [
    { value: "thisWeek", label: "01-07 May" },
    { value: "lastWeek", label: "07-14 May" },
    { value: "nextWeek", label: "14-21 May" },
  ];

  return (
    <div className="bg-white p-3 sm:p-4 md:p-6 mb-4 rounded-lg shadow-sm">
      <div className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800">
          Performance
        </h2>
        {/* Week Selector */}
        <div className="relative mt-2 sm:mt-0 w-full sm:w-auto">
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

      {/* Chart Container */}
      <div className="h-48 sm:h-64 md:h-80 mb-4">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e5e7eb"
              vertical={false}
            />
            <XAxis
              dataKey="day"
              stroke="#6b7280"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              stroke="#6b7280"
              axisLine={false}
              tickLine={false}
              ticks={[0, 2, 4, 6, 8, 10, 12]}
              tick={{ fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "6px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                fontSize: "12px",
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
      <div className="text-center text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6">
        01–07 May
      </div>
    </div>
  );
};

export default PerformanceStats;