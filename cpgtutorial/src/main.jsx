import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="h-screen">
      <header className="bg-black">
        <nav className="mx-auto">
          <a href="https://www.cryptopackagedgoods.com/projects">
            <img src="./cpg.png" alt="logo" />
          </a>
        </nav>
      </header>
      <App />
    </div>
  </React.StrictMode>,
)
