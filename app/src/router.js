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

                <Route path='records' element={<h1>records</h1>}>
                    <Route path='records/:permitnumber' element={<h1>single permit card</h1>}/>
                </Route>
        </Route>
    )
)
  
export default router 
