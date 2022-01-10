import React,{useEffect} from 'react';
import {
  BrowserRouter,
  Routes, // Just Use Routes instead of "Switch"
  Route,
} from "react-router-dom";
import { connect } from 'react-redux';

import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from './redux/user/user.selectors'
import {selectLoader} from './redux/loader/loader.selectors';
import {selectAppApiData} from './redux/app_api/app_api.selectors'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css'
import Loader from './components/loader/loader';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login.page'
import Register from './pages/register.page';
import { Switch } from 'react-router-dom';
import Category from './pages/dashboard/category'
import Product from './pages/dashboard/product'
import ProtectedRoute from './components/protected-route/ProtectedRoute';
import ProtectedRoutePermissions from './components/protected-route/ProtectedRoutePermissions';
 
const publicRoutes = [
  { path: '/login', component: <Login/> },
  { path: '/register', component: <Register /> },
];
const adminRoutes = [
  { path: '/dashboard/category', component: <Category /> },
  { path: '/dashboard/product', component: <Product /> },
];

const App = ({loader,currentUser}) => {

return (
  <div className='App'>
    <Switch>
      {publicRoutes.map(route => {
        return (
          <Route key={route.path} path={route.path} exact>
            {route.component}
          </Route>
        );
      })}

      {adminRoutes.map(route => {
        return (
          <ProtectedRoutePermissions
            key={route.path}
            exact
            component={route.component}
            path={route.path}
            permissions = {currentUser.permissions}
          />
        );
      })}
   </Switch>
  {
    loader ?
    <Loader/>
    :
    null    
  }
</div>
)


}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  loader:selectLoader
});



export default connect(
  mapStateToProps,
)(App);



