import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ReportLost from "./pages/ReportLost";
import ItemDetail from "./pages/ItemDetail";
import MyReports from "./pages/MyReports";
import Profile from "./pages/Profile";
import Categories from "./pages/Categories";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CampusDirectory from "./pages/CampusDirectory";
import ContactSupport from "./pages/ContactSupport";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
       <Route path="/dashboard" element={
  <ProtectedRoute>
    <Dashboard />
  </ProtectedRoute>
} />
        <Route path="/report" element={<ReportLost />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/my-reports" element={<ProtectedRoute><MyReports /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
        <Route path="/categories" element={<ProtectedRoute><Categories /></ProtectedRoute>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/campus-directory" element={<CampusDirectory />} />
        <Route path="/contact-support" element={<ContactSupport />} />
      </Routes>
    </Router>
  );
}

export default App;