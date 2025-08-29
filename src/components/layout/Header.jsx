import React from 'react';
import { CalendarOutlined, MenuOutlined } from '@ant-design/icons';
import { useSidebar } from '../../context/SidebarContext';

const Header = () => {
  const { setCollapsed, isMobile } = useSidebar();

  return (
    <div className="bg-white border-b border-gray-200 px-3 sm:px-4 md:px-6 py-2 sm:py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2 sm:space-x-3">
          {isMobile && (
            <MenuOutlined
              className="text-lg sm:text-xl cursor-pointer text-gray-600 hover:text-gray-800"
              onClick={() => setCollapsed(false)}
            />
          )}
          <div className="flex flex-col">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
              Hello, Big Mike
            </h1>
            <span className="text-xs sm:text-sm text-gray-500 ">
              Track team progress here. You almost reach a goal!
            </span>
          </div>
        </div>

        <div className="flex items-center space-x-1 sm:space-x-2">
          <h3 className="text-sm sm:text-base font-medium text-gray-700">
            May 16, 2025
          </h3>
          <CalendarOutlined className="text-blue-500 bg-gray-200 p-1.5 sm:p-2 rounded-xl text-base sm:text-lg" />
        </div>
      </div>
    </div>
  );
};

export default Header;