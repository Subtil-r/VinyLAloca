import React from 'react';
import { Redirect } from 'react-router';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';
//import auth from './auth';

const ProtectedRoute = ({ isAuth, component: Component, ...rest }) => {
  return (
    <Route 
    {...rest} 
    render={props => {
      if(isAuth){
        return <Component {...props} />
      } else {
        return <Redirect to={
          {
            pathname: "/login",
            state: {
              from: props.location
            }
          }
        }/>
      }
     }}
    />
  )
}

export default ProtectedRoute