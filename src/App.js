import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/scss/index.scss'
import Header from './components/common/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainRoute from './route/MainRoute'
import Footer from './components/common/Footer'
import LoginModal from './components/common/LoginModal'
import SignUpRoute from './route/SignUpRoute'

function App() {
  return (
    <BrowserRouter>
      <Container>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<MainRoute />} />
            <Route path="/signup" element={<SignUpRoute />} />
          </Routes>
        </div>
      </Container>
      <Footer />
      <LoginModal />
    </BrowserRouter>
  )
}

export default App
