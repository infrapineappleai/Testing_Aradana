import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import StudentPaymentForm from './pages/StudentPaymentForm';

function App() {
    return (
      <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/payment" element={<StudentPaymentForm />} />
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
    );
}
export default App;