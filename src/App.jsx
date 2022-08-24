import { Routes, Route } from 'react-router-dom'
import './assets/App.scss'
import HomePage from './pages/HomePage'
import NotFoundPage from './pages/NotFoundPage'
import Navigation from './components/Nav'
import PopularPage from './pages/PopularPage'
import LatestPage from './pages/LatestPage'
import TopPage from './pages/TopPage'
function App() {
  return (
    <div id="App">
        <Navigation/>

        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/popular" element={<PopularPage/>}/>
            <Route path="/latest" element={<LatestPage/>}/>
            <Route path="/top" element={<TopPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
    </div>
  )
}

export default App
