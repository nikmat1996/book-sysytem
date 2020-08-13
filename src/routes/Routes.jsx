import React from 'react';
import Navbar from '../components/Navbar';
import Login from '../components/Login';
import Dash from '../components/Dash';
import Add from '../components/Add';
import Edit from '../components/Edit';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom'



export default function Routes() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/add' component={Add} />
                <Route exact path='/dashboard' component={Dash} />
                <Route path= '/dashboard/:key' render={(props) => <Edit  {...props} />} />
            </Switch>            
        </div>
    )
}
