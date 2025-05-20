import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
//import NoPage from './components/noPage/NoPage'
import Homepage from './components/Homepage/Homepage'
import { homework, lessons } from './routesConfig'
import Layout from './layout/Layout'


function App() {
  return (
    <>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
         <Route index element={<Homepage />}/>
         {lessons.map(({path, element}) => (
          <Route key={path} path={`lessons/${path}`} element={element} />
         ))}
         {homework.map(({path, element}) => (
          <Route key={path} path={`homework/${path}`} element={element} />
         ))}
         
        </Route>
      </Routes>
    </HashRouter>
    </>
  )
}

export default App
