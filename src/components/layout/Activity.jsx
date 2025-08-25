import React from 'react';
import ProfileCard from '../ui/ProfileCard';
import ChatRoom from '../ui/ChatRoom';
import { CloseOutlined } from '@ant-design/icons';

const Activity = ({ onClose, isMobile }) => {
  const user = {
    name: "John Smith",
    initials: "JS",
    status: "Online - Last seen 2m ago"
  };

  return (
    <div className="w-80 bg-white shadow-lg fixed right-0 top-0 bottom-0 z-20 flex flex-col">
      {/* Close button for mobile */}
      {isMobile && (
        <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white">
          <span className="font-semibold text-gray-800">Activity</span>
          <button 
            onClick={onClose}
            className="p-1 rounded-full hover:bg-gray-100 transition-colors"
          >
            <CloseOutlined className="text-gray-600 text-lg" />
          </button>
        </div>
      )}
      <ProfileCard user={user} />
      <ChatRoom />
    </div>
  );
};

export default Activity;