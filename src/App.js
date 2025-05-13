import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderTop from './components/HeaderTop';
import Navbar from './components/Navbar/Navbar';
import HomeSecurity from "./pages/HomeSecurity";
import RetailSecurity from "./pages/RetailSecurity";
import CloseProtection from "./pages/CloseProtection";
import GuardDogs from "./pages/GuardDogs";
import About from "./components/About";
import Home from "./components/Home";
import Contacts from "./components/Contacts";
import ThankYou from './pages/ThankYou';
import IndustrialSecurity from "./pages/IndustrialSecurity";
import SecurityGuarding from "./pages/services/SecurityGuarding";
import RoamingGuards from "./pages/services/RoamingGuards";
import CarParkGuarding from "./pages/services/CarParkGuarding";
import VIPProtection from "./pages/services/VIPProtection";
import CCTVInstallation from "./pages/services/CCTVInstallation";
import AccessControl from "./pages/services/AccessControl";
import ElectricFence from "./pages/services/ElectricFence";
import AlarmResponse from "./pages/services/AlarmResponse";
import SecurityTraining from "./pages/services/SecurityTraining";
import SecurityAudit from "./pages/services/SecurityAudit";
import Investigations from "./pages/services/investigations"
import RetailAccreditation from "./pages/services/RetailAccreditation";

function App() {
    return (
        <Router>
          <HeaderTop />  
          <Navbar />
           <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Contacts" element={<Contacts />} />
                <Route path="/thank-you" element={<ThankYou />} /> 
                <Route path="/services/security-guarding" element={<SecurityGuarding />} />
                <Route path="/services/roaming-guards" element={<RoamingGuards />} />
                <Route path="/services/car-park-guarding" element={<CarParkGuarding />} />
                <Route path="/services/vip-protection" element={<VIPProtection />} />
                <Route path="/services/cctv-installation" element={<CCTVInstallation />} />
                <Route path="/services/access-control" element={<AccessControl />} />
                <Route path="/services/electric-fence" element={<ElectricFence />} />
                <Route path="/services/alarm-response" element={<AlarmResponse />} />
                <Route path="/services/security-training" element={<SecurityTraining />} />
                <Route path="/services/security-audit" element={<SecurityAudit />} />
                <Route path="/services/investigations" element={<Investigations />} />
                <Route path="/services/retail-accreditation" element={<RetailAccreditation />} />
                <Route path="/services/home-security" element={<HomeSecurity />} />
                <Route path="/services/retail-security" element={<RetailSecurity />} />
                <Route path="/services/close-protection" element={<CloseProtection />} />
                <Route path="/services/industrial-security" element={<IndustrialSecurity />} />
                <Route path="/services/guard-dogs" element={<GuardDogs />} />
            </Routes>
        </Router>
    );
}

export default App;
