import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Contact from './pages/Contact'
import Homepage from './pages/Homepage'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
