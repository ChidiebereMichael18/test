import { useNavigate } from 'react-router-dom';
import {
  HomeOutlined,
  UserOutlined,
  BookOutlined,
  LogoutOutlined,
  CloseOutlined,
  StarOutlined,
  TeamOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { useSidebar } from '../../context/SidebarContext';
import Upgrade from '../ui/Upgrade';


const Sidebar = () => {
  const { collapsed, setCollapsed, isMobile } = useSidebar();
  const navigate = useNavigate();

  const menuItems = [
    { key: '/dashboard', icon: <HomeOutlined className="text-lg" />, label: 'Home' },
    { key: '/dashboard/projects', icon: <UserOutlined className="text-lg" />, label: 'Projects' },
    { key: '/dashboard/tasks', icon: <BookOutlined className="text-lg" />, label: 'Tasks' },
    { key: '/dashboard/teams', icon: <TeamOutlined className="text-lg" />, label: 'Team' },
    { key: '/dashboard/settings', icon: <StarOutlined className="text-lg" />, label: 'Settings' },
  ];
    const menuItems2 = [
    { key: '/help', icon: <QuestionCircleOutlined className="text-lg" />, label: 'Help & Information' },
    { key: '/logout', icon: <LogoutOutlined className="text-lg" />, label: 'Logout' },
  ];
  const handleMenuClick = (key) => {
    if (key === '/logout') {
      navigate('/login');
    } else {
      navigate(key);
    }
    if (isMobile) setCollapsed(true);
  };

  return (
    <>
      <div
        className={`
          fixed left-0 top-0 h-full w-55 bg-white shadow-lg z-40
          transition-all duration-300
          ${isMobile ? (collapsed ? '-translate-x-full' : 'translate-x-0') : ''}
          ${collapsed ? 'md:-translate-x-full' : 'md:translate-x-0'}
        `}
      >
        <div className="p-5 flex items-center justify-between ">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-800">Logip</h1>
          </div>
          {(isMobile || collapsed) && (
            <CloseOutlined
              className="text-lg cursor-pointer text-gray-500 hover:text-gray-700 transition-colors"
              onClick={() => setCollapsed(true)}
            />
          )}
        </div>

        <div className="py-4">
          {menuItems.map((item) => (
            <div
              key={item.key}
              onClick={() => handleMenuClick(item.key)}
              className="px-5 py-3 mx-2 rounded flex items-center space-x-3 cursor-pointer hover:bg-gray-50 text-gray-700 transition-colors"
            >
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        <Upgrade />
          <div className="py-4">
          {menuItems2.map((item) => (
            <div
              key={item.key}
              onClick={() => handleMenuClick(item.key)}
              className="px-5 py-3 mt-4 mx-2 rounded flex items-center space-x-3 cursor-pointer hover:bg-gray-50 text-gray-700 transition-colors"
            >
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Overlay for mobile */}
      {isMobile && !collapsed && (
        <div
          className="fixed inset-0 bg-black/50 z-30"
          onClick={() => setCollapsed(true)}
        />
      )}
    </>
  );
};

export default Sidebar;