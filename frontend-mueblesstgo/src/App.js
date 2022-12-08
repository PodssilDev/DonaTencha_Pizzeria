import './App.module.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MenuComponent from './components/MenuComponent';
import FileUploadComponent from './components/FileUploadComponent';
import FileInformationComponent from './components/FileInformationComponent';
import EmployeeComponent from './components/EmployeeComponent';
import JustificativoComponent from './components/JustificativoComponent';
import AutorizacionComponent from './components/AutorizacionComponent';
import SueldosComponent from './components/SueldosComponent';
import HomeComponent from './components/HomeComponent';
import { ReactKeycloakProvider } from '@react-keycloak/web'
import keycloak from './keycloak'
import TestComponent from './components/TestComponent';
function App() {
  return (
    <div>
      <ReactKeycloakProvider authClient={keycloak}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/menu" element={<MenuComponent />} />
        <Route path= "/subir-archivo" element={<FileUploadComponent />} />
        <Route path= "/informacion-archivo" element={<FileInformationComponent />} />
        <Route path= "/lista-empleados" element={<EmployeeComponent />} />
        <Route path= "/justificativo" element={<JustificativoComponent />} />
        <Route path= "/autorizacion" element={<AutorizacionComponent />} />
        <Route path= "/planilla-sueldos" element={<SueldosComponent />} />
        <Route path= "/test" element={<TestComponent />} />

      </Routes>
    </BrowserRouter>
    </ReactKeycloakProvider>
  </div>
  );
}

export default App;
