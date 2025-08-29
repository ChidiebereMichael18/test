import { createContext, useContext, useState, useEffect } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  // const [isTablet, setIsTablet] = useState();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024
      console.log("Window width:", window.innerWidth, "isMobile:", mobile);
      setIsMobile(mobile);
      setCollapsed(mobile); // Collapse sidebar on mobile by default
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <SidebarContext.Provider value={{ collapsed, setCollapsed, isMobile }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => useContext(SidebarContext);