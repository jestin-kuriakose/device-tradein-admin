import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import CustomerList from "./pages/CustomerList";
import DeviceList from "./pages/DeviceList";
import Home from './pages/Home';
import NewDevice from "./pages/NewDevice";
import QuotesList from "./pages/QuotesList";
import SingleDevice from "./pages/SingleDevice";
import SingleQuote from "./pages/SingleQuote";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/devices" element={<DeviceList/>}/>
        <Route path="/devices/:id" element={<SingleDevice/>}/>
        <Route path="/devices/new" element={<NewDevice/>}/>
        <Route path="/quotes" element={<QuotesList/>}/>
        <Route path="/quotes/:id" element={<SingleQuote/>}/>
        <Route path="/customers" element={<CustomerList/>}/>
        
      </Routes>  
    </BrowserRouter>
  );
}

export default App;
