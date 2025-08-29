import React from 'react';
import ProfileCard from '../ui/ProfileCard';
import ChatRoom from '../ui/ChatRoom';
import { CloseOutlined } from '@ant-design/icons';

const Activity = ({ onClose, isMobile }) => {
  const user = {
    name: 'John Smith',
    initials: 'JS',
    status: 'Online - Last seen 2m ago',
  };

  return (
    <div
      className={`bg-white shadow-lg flex flex-col h-full ${
        isMobile
          ? 'w-4/5 sm:w-3/5 fixed right-0 top-0 bottom-0 z-50'
          : 'w-72 md:w-80 fixed right-0 top-0 bottom-0 z-20'
      }`}
    >
      {/* Header with close button for mobile */}
      {isMobile &&  (
        <div className="p-3 sm:p-4 border-b border-gray-200 flex justify-between items-center bg-white">
          <span className="text-base sm:text-lg font-semibold text-gray-800">
            Activity
          </span>
          <button
            onClick={onClose}
            className="p-1 sm:p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <CloseOutlined className="text-gray-600 text-sm sm:text-base" />
          </button>
        </div>
      )}
      <div className="flex-1 overflow-y-auto">
        <ProfileCard user={user} />
        <ChatRoom />
      </div>
    </div>
  );
};

export default Activity;