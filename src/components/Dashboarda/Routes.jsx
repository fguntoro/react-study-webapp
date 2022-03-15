import React from 'react'

import { Route, BrowserRouter as Router } from 'react-router-dom'

import Dashboard from '../../pages/Dashboard'
import Customers from '../../pages/Customers'

const Routes = () => {
    return (
        <Router>
            <Route path='/dashboard' exact element={Dashboard}/>
            {/* <Route path='/customers' element={Customers}/> */}
        </Router>
    )
}

export default Routes
