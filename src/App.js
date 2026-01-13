import React from 'react';
import './App.css';

function App(props) {
  return (
    <div className="mfe-app">
      <header className="mfe-header">
        <h1>Single-SPA Micro-Frontend</h1>
        <p>Welcome to your MFE application!</p>
      </header>
      <main className="mfe-content">
        <div className="mfe-card">
          <h2>Getting Started</h2>
          <p>This is a basic single-spa micro-frontend application.</p>
          <ul>
            <li>Built with React and single-spa</li>
            <li>Configured with Webpack 5</li>
            <li>Ready to be integrated into a single-spa root config</li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
