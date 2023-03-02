import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from 'react-router-dom';

// layouts 
import RootLayout from './layouts/rootLayout'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route index element={<h1>home component</h1>}/>
            <Route path='about' element={<h1>about tracki</h1>}/>
            <Route path='faq' element={<h1> faq </h1>}/>
            <Route path='contact' element={<h1>contact us</h1>}/>
        </Route>
    )
)
  
export default router 
