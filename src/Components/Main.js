import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Body from './Body'
import Features from './Features'

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Body} />
        </Switch>
    </main>    
)

export default Main