import React from 'react';
import { CalendarOutlined, MenuOutlined } from '@ant-design/icons';
import { useSidebar } from '../../context/SidebarContext';

const Header = () => {
  const { setCollapsed, isMobile } = useSidebar();

  return (
    <div className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {isMobile && (
            <MenuOutlined 
              className="text-xl mr-4 cursor-pointer text-gray-600 hover:text-gray-800"
              onClick={() => setCollapsed(false)}
            />
          )}
          <div className="flex flex-col">
            <h1 className="text-xl font-semibold text-gray-800">Hello, Margaret</h1>
            <span className="text-sm text-gray-500 mt-1">
              Track team progress here. You almost reach a goal!
            </span>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <CalendarOutlined className="text-blue-500 text-lg" />
          <h3 className="text-base font-medium text-gray-700">May 16, 2023</h3>
        </div>
      </div>
    </div>
  );
};

export default Header;