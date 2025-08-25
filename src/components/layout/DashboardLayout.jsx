import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Activity from './Activity';  
import { useSidebar } from '../../context/SidebarContext';
import { MessageOutlined } from '@ant-design/icons';

const DashboardLayout = () => {
  const { collapsed, setCollapsed, isMobile } = useSidebar();
  const [activityOpen, setActivityOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row">
      <Sidebar />
      
      {/* Main content area - ensure proper width calculation */}
      <div className={`flex-1 flex flex-col w-full ${isMobile ? 'ml-0' : collapsed ? 'ml-0' : 'md:ml-55'}`}>
        {/* Header with full width */}
        <div className="w-full">
          <Header />
        </div>
        
        {/* Mobile activity toggle button */}
        {isMobile && (
          <button 
            onClick={() => setActivityOpen(true)}
            className="fixed bottom-4 right-4 z-30 w-12 h-12 rounded-full bg-blue-500 text-white shadow-lg flex items-center justify-center md:hidden"
          >
            <MessageOutlined />
          </button>
        )}
        
        <main className="flex-1  w-full">
          <div className="bg-white rounded-lg shadow-sm p-4 md:p-6 min-h-full w-full">
            <Outlet />
          </div>
        </main>
      </div>
      
      {/* Activity bar - only visible on desktop by default */}
      {!isMobile && (
        <div className="w-80">
          <Activity isMobile={false} />
        </div>
      )}
      
      {/* Mobile Activity drawer */}
      {isMobile && activityOpen && (
        <div className="fixed inset-0 z-40">
          <div className="absolute top-0 right-0 z-50 h-full w-4/5 bg-white shadow-xl">
            <Activity 
              isMobile={true} 
              onClose={() => setActivityOpen(false)} 
            />
          </div>
          {/* Overlay to close drawer */}
          <div 
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setActivityOpen(false)}
          />
        </div>
      )}
      
      {/* Sidebar overlay */}
      {isMobile && !collapsed && (
        <div 
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setCollapsed(true)}
        />
      )}
    </div>
  );
};

export default DashboardLayout;