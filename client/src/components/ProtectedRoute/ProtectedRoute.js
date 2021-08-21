import React, { useState, useEffect, Component } from 'react';
import { Redirect, Route } from 'react-router-dom';
import axios from 'axios';

export default function ProtectedRoute({ component: Component, ...rest }) {
    const [isAuth, setAuth] = useState('');
    const [load, setLoad] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:3000/isAuth', { withCredentials: true })
            .then((response) => {
                console.log('HEllo')
                setAuth(response.data.success)
                setLoad(true)
            })
            .catch(err => console.log(err))
    }, [])


    if (!load) {
        return <h3>Loading...</h3>
    } else {
        return <Route {...rest} render={(props) => (isAuth == true ? <Component {...props} /> : <Redirect to='/login' />)} />
    }



}