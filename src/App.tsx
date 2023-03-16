import { Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Tokens from './components/Tokens'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/authenticate' element={<Tokens />} />
    </Routes>
  )
}

export default App
