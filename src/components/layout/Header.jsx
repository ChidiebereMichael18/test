import React from 'react';
import { CalendarOutlined, MenuOutlined } from '@ant-design/icons';
import { useSidebar } from '../../context/SidebarContext';

const Header = () => {
  const { setCollapsed, isMobile } = useSidebar();

  return (
    <div className="bg-white border-b border-gray-200 px-4 py-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {isMobile && (
            <MenuOutlined 
              className="text-xl mr-4 cursor-pointer text-gray-600 hover:text-gray-800"
              onClick={() => setCollapsed(false)}
            />
          )}
          <div className="flex flex-col">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">Hello,Big Mike</h1>
            <span className="text-sm text-gray-500 mt-1">
              Track team progress here. You almost reach a goal!
            </span>
          </div>
        </div>
        
        <div className="flex items-center ">
          <h3 className="text-base font-medium mr-2 text-gray-700">May 16, 2025</h3>
          <CalendarOutlined className="text-blue-500 bg-gray-200 p-2 rounded-2xl text-lg" />
        </div>
      </div>
    </div>
  );
};

export default Header;