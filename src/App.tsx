import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NoPage from './components/noPage/NoPage'
import Homepage from './components/Homepage/Homepage'
import { homework, lessons } from './routesConfig'
import Layout from './layout/Layout'
import Feedback from './components/Feedback/Feedback'
import ProductPage from './components/ProductPage/ProductPage'
import Lesson14 from './lessons/lesson14/Lesson14'
import Lesson15 from './lessons/lesson15/Lesson15'
import StorePage from './components/Store/StorePage'



function App() {
  return (
    <>
    <HashRouter>
       <Routes>
         <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />}/>
          <Route path="feedback" element={<Feedback />}/>
          {lessons.map(({path, element}) => (
          <Route key={path} path={`lessons/${path}`} element={element} />
         ))}
         {homework.map(({path, element}) => (
          <Route key={path} path={`homework/${path}`} element={element} />
         ))}
         <Route path='lesson14' element={<Lesson14 />} />
         <Route path='product/:id' element={<ProductPage />} />
         <Route path='lesson15' element={<Lesson15 />} />
         <Route path='store/:id' element={<StorePage />} />
         <Route path='*' element={<NoPage />} />
         </Route>
       </Routes>
     </HashRouter>
     </>
  )
}

export default App
