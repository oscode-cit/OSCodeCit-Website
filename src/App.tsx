import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Events from './pages/Events'
import Activities from './pages/Activities'
import Quiz from './pages/Quiz'
import TeamDetail from './pages/TeamDetail'
import EventDetail from './pages/EventDetail'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/team/:teamId" element={<TeamDetail />} />
          <Route path="/event/:eventId" element={<EventDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
