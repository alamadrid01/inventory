import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Enquiry from './components/Enquiry'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Project from './components/Project'
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
          <Route path="/enquiry" element={<Enquiry />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
