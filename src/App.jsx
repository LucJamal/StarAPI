import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/homePage'
import AboutPage from './pages/AboutPage'
import StarWarsDetailPage from './pages/starWarsDetailpage'

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/characters/:id" element={<StarWarsDetailPage />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
