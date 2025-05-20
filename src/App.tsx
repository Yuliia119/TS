import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
//import Lesson10 from './lessons/lesson10/Lesson10'
//import Lesson09 from './lessons/lesson09/Lesson09'
import Layout from './layout/Layout'
import Feedback from './components/Feedback/Feedback'
import NoPage from './components/noPage/NoPage'


function App() {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
         <Route path="/" element={<h1>Home Page 🏠</h1>} />
         <Route path='feedback' element={<Feedback/>}/> 
         <Route path='*' element={<NoPage/>}/>
        </Route>
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
