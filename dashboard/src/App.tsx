import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import DashboardLayout from './layouts/DashboardLayout';
import Posts from './pages/Posts';
import Bulletins from './pages/Bulletins';
import Alerts from './pages/Alerts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/posts" replace />} />
          <Route path="posts" element={<Posts />} />
          <Route path="bulletins" element={<Bulletins />} />
          <Route path="alerts" element={<Alerts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
