import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navbar />
        <main className="container mx-auto py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
