import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
  } from 'react-router-dom';

// pages 
import Home from './pages/Home'
import Records, { recordsLoader } from './pages/records/Records'


// layouts 
import RootLayout from './layouts/rootLayout'
import RecordsLayout from './layouts/recordsLayout';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />}/>
            <Route path='about' element={<h1>about tracki</h1>}/>
            <Route path='faq' element={<h1> faq </h1>}/>
            <Route path='contact' element={<h1>contact us</h1>}/>

                <Route path='records' element={<RecordsLayout />}>
                    <Route 
                    index
                    element={<Records />}/>
                    loader={recordsLoader}
                </Route>
        </Route>
    )
)
  
export default router 
