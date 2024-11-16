import React from 'react';
import ReservaForm from './components/ReservaForm';
import ReservaList from './components/ReservaList';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Hotel Camino Real</h1>
      </header>
      <main className="main-content">
        <section className="form-section">
          <ReservaForm />
        </section>
        <section className="list-section">
          <ReservaList />
        </section>
      </main>
    </div>
  );
}

export default App;
