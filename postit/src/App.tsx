import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.css';
import { Navigation } from './components/navbar';
<<<<<<< HEAD
import { UserProfile } from './components/pages/Profile';
import { User } from './models/user';
import { Home } from './components/pages/Home';
=======
import { PrivateRoutes } from './components/privateRoutes';
>>>>>>> 7ece782d55f04f126896cbb3b5423fffa743ebc5
import { Provider } from 'react-redux';
import { store } from './redux/user/userStore';
import { LoginPage } from './components/pages/Login';
import { SignupPage } from './components/pages/Signup';

class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <div className='App'>
          <Router>
            <Navigation />
            <Switch>
              <Route
                path='/login'
                render={(props: any) => {
                  return <LoginPage {...props} path='/login' />;
                }}
              />
              <Route
                path='/signup'
                render={(props: any) => {
                  return <SignupPage {...props} path='/signup' />;
                }}
              />
<<<<<<< HEAD
              <Route path='/home'>
                <Home loggedInUser={this.state.loggedInUser} path='/home' />
              </Route>
              <Route path='/subscribers'>
                {/* {this.state.loggedInUser && true ? ( */}
                <SubscribersPage path='/subscribers' />
                {/* ) : (
                  <h4>Please Login</h4>
                )} */}
              </Route>
              <Route path='/messages'>
                {this.state.loggedInUser ? ( 
                <MessagesPage path='/messages' />
                 ) : (
                  <h4>Please Login</h4>
                )}
              </Route>
              <Route loggedInUser={this.state.loggedInUser} path='/users'>
                {/* {this.state.loggedInUser && true ? ( */}
                  <UserProfile
                    loggedInUser={this.state.loggedInUser}
                    path='/home'
                  />
                {/* // ) : (
                //   <h4>Please Login</h4>
                // )} */}
              </Route>
              <Route path='/search'>
                <SearchPage />
=======
              <Route path='/logout'>
                <Redirect to='/signup' />
              </Route>
              <Route>
                <PrivateRoutes />
>>>>>>> 7ece782d55f04f126896cbb3b5423fffa743ebc5
              </Route>
            </Switch>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;

// TO USE STATE IN COMPONENT:

// We need to turn said component into a 'higher order' Component.  Do not export the Component
// you made.  Instead, copy/paste the below  code into your component (making sure to copy the
// imports [must change route to redux file!]:

// import { UserState } from "./redux/user/userReducer";
// import { signupUser, loginUser, logoutUser} from './redux/user/userActionMappers'
// import { connect } from 'react-redux';
// )
//
// Then using that last const, name component and insert local component where it says COMPONENT
//
// const mapStateToProps = (state: UserState) => {
//   return {
//     ...state
//   }
// }

// const mapDispatchToProps = {
//   signupUser,
//   loginUser,
//   logoutUser
// }

// export const testHigherOrderComp = connect(mapStateToProps, mapDispatchToProps)(COMPONENT);
