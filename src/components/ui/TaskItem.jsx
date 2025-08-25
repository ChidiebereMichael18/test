import React from 'react';
import { 
  CheckCircleOutlined, 
  PauseCircleOutlined, 
  ClockCircleOutlined 
} from '@ant-design/icons';

const TaskItem = ({ title, status, time, range }) => {
  const getStatusIcon = () => {
    switch(status) {
      case 'In progress': return <ClockCircleOutlined className="text-blue-500" />;
      case 'On hold': return <PauseCircleOutlined className="text-yellow-500" />;
      case 'Done': return <CheckCircleOutlined className="text-green-500" />;
      default: return <ClockCircleOutlined className="text-gray-500" />;
    }
  };

  const getStatusColor = () => {
    switch(status) {
      case 'In progress': return 'text-blue-600';
      case 'On hold': return 'text-yellow-600';
      case 'Done': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
      <div className="flex items-center">
        {getStatusIcon()}
        <div className="ml-3">
          <h4 className="text-sm font-medium text-gray-800">{title}</h4>
          {range && <span className="text-xs text-gray-500">{range}</span>}
        </div>
      </div>
      <div className="text-right">
        <p className={`text-sm font-medium ${getStatusColor()}`}>{status}</p>
        <p className="text-xs text-gray-500">{time}</p>
      </div>
    </div>
  );
};

export default TaskItem;