

import Home from './routes/Home';
import Navigation from './components/Navigation';
import FooterNavigation from './components/FooterNavigation';
import BookingPage from './components/BookingPage';
import {Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className='main'>
      <Navigation/>
      <div className='main-content'>
        <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/bookingPage" element = {<BookingPage />} />
        </Routes>
      </div>
      <FooterNavigation/>
    </div>
  );
}

export default App;
