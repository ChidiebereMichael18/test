import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import DashboardLayout from '../components/layout/DashboardLayout';


const RouterPath = () => {
  return (
    <Routes>
      <Route index element={<DashboardLayout />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default RouterPath;
