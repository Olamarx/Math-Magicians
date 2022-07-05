import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CalculatorPage from './CalculatorPage';
import Quote from './Quote';
import Home from './Home';

function App() {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={(
            <Home />
)}
        />
        <Route
          path="/calculator"
          element={<CalculatorPage />}
        />

        <Route
          path="/quotes"
          element={<Quote />}
        />

      </Routes>
    </>
  );
}

export default App;
