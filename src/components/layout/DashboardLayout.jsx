import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Activity from './Activity';  
import { useSidebar } from '../../context/SidebarContext';
import { MessageOutlined, CloseOutlined } from '@ant-design/icons';

const DashboardLayout = () => {
  const { collapsed, setCollapsed, isMobile } = useSidebar();
  const [activityOpen, setActivityOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <Sidebar />
      
      {/* Main content area */}
      <div className={`flex-1 flex flex-col transition-all duration-300 ${isMobile ? 'ml-0' : collapsed ? 'ml-0' : 'md:ml-64'}`}>
        <Header />
        
        {/* Mobile activity toggle button */}
        {isMobile && (
          <button 
            onClick={() => setActivityOpen(true)}
            className="fixed bottom-4 right-4 z-30 w-12 h-12 rounded-full bg-blue-500 text-white shadow-lg flex items-center justify-center md:hidden"
          >
            <MessageOutlined />
          </button>
        )}
        
        <main className="flex-1 p-4 md:p-6">
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 min-h-full">
            <Outlet />
          </div>
        </main>
      </div>
      
      {/* Activity bar - hidden on mobile by default, shown when toggled */}
      <div className={`${isMobile ? (activityOpen ? 'fixed inset-0 z-40' : 'hidden') : 'block'}`}>
        {isMobile && activityOpen && (
          <div className="absolute top-0 right-0 z-50 h-full w-full bg-white">
            {/* Close drawer header */}
            <div className="p-4 border-b border-gray-200 flex justify-between items-center bg-white">
              <span className="font-semibold text-gray-800">Activity</span>
              <button 
                onClick={() => setActivityOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <CloseOutlined className="text-gray-600 text-lg" />
              </button>
            </div>
            <Activity />
          </div>
        )}
        {!isMobile && <Activity />}
      </div>
      
      {/* Overlays */}
      {isMobile && !collapsed && (
        <div 
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setCollapsed(true)}
        />
      )}
      
      {isMobile && activityOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setActivityOpen(false)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;