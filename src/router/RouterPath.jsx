import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DashboardLayout from '../components/layout/DashboardLayout';


const RouterPath = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Home />} />
        <Route path="dashboard" element={<Home />} />
      </Route>

    </Routes>
  );
};

export default RouterPath;
