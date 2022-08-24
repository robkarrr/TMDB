import { Routes, Route } from 'react-router-dom'
import './assets/App.scss'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import Navigation from './components/Nav'

function App() {
  return (
    <div id="App">
        <Navigation/>

        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    </div>
  )
}

export default App
