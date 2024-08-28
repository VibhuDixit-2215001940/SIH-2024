import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Inventory from './components/Inventory';
import Footer from './components/Footer';
import './App.css'; // Assuming styles are transferred here

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <div className="main-content">
          <Sidebar />
          <Inventory />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

