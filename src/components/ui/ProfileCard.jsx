import React from 'react';
import { PhoneOutlined, VideoCameraOutlined, MoreOutlined } from '@ant-design/icons';

const ProfileCard = ({ user }) => {
  return (
    <div className="p-4 border-b border-gray-200">
      <div className="flex items-center justify-between rounded-xl bg-gray-100 p-4 flex-col">
        <div className="flex items-center flex-col">
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center text-white font-semibold text-sm mr-3">
            MN
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 text-sm">Megan Norton</h3>
            <p className="text-xs text-gray-500">@meganorton</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 mt-4">
          <button className="p-1.5 rounded-full hover:bg-gray-100 transition-colors">
            <PhoneOutlined className="bg-white cursor-pointer rounded-2xl p-2 text-black text-lg" />
          </button>
          <button className="p-1.5 rounded-full hover:bg-gray-100 transition-colors">
            <VideoCameraOutlined className="bg-white cursor-pointer rounded-2xl p-2 text-black text-lg" />
          </button>
          <button className="p-1.5 rounded-full hover:bg-gray-100 transition-colors">
            <MoreOutlined className="bg-white cursor-pointer rounded-2xl p-2 text-black text-lg" />
          </button>
        </div>
      </div>
      
      <div className="mt-3">
        <h4 className="text-sm text-center font-semibold text-gray-800">Activity</h4>
      </div>
    </div>
  );
};

export default ProfileCard;