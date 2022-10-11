import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './style/scss/index.scss'
import Header from './components/common/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainRoute from './route/MainRoute'

function App() {
  return (
    <BrowserRouter>
      <Container>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<MainRoute />} />
          </Routes>
        </div>
      </Container>
    </BrowserRouter>
  )
}

export default App
