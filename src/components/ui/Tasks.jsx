import React from 'react';
import TaskItem from './TaskItem';

const Tasks = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Current Tasks</h2>
      
      <div className="mb-6">
        <TaskItem 
          title="Product Review for UB Market" 
          status="In progress" 
          time="4h" 
          range="This week"
        />
      </div>
      
      <h3 className="text-md font-medium text-gray-800 mb-3">UK Research for Product</h3>
      <TaskItem 
        title="" 
        status="On hold" 
        time="9h" 
      />
      
      <h3 className="text-md font-medium text-gray-800 mb-3 mt-4">App design and development</h3>
      <TaskItem 
        title="" 
        status="Done" 
        time="32h" 
      />
    </div>
  );
};

export default Tasks;