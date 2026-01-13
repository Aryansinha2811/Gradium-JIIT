import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Students from "./Pages/Students";
import Client from "./Pages/Client";
import Gigs from "./Pages/Gigs";
import Signup from "./Auth/Signup";
import StudentDashboard from "./Pages/Dashboard/StudentDashborad"
import ClientDashboard from "./Pages/Dashboard/ClientDashboard"
import AdminDashboard from "./Pages/Dashboard/AdminDashboard"

function App() {
  return (
    <div className="min-h-screen w-full relative overflow-x-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #0F0F0F 40%, #0F1C3B 100%)",
        }}
      />

      {/* Pages */}
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Students />} />
          <Route path="/clients" element={<Client />} />
          <Route path="/gigs" element={<Gigs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/client-dashboard" element={<ClientDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
