
import './App.css'
import Homepage from './pages/homepage.component'
import { Switch, Route } from 'react-router-dom'

import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import { auth } from './components/firebase/firebase.utils'
import React from 'react'
/* exact disables the /，保护后面的route Switch make sure we only
render the router that matched */
/* link force to render rebuld the web application, but the route deoesn;t,
it only determine which js component to render,  */
/* history.push('/') with onclick event */
// console.logt
class App extends React.Component {
  constructor() {
    super();
    this.state = { currentUser: null };
  }
  componentDidMount() {
    auth.onAuthStateChanged(
      user => {
        this.setState({ currentUser: user });
        console.log(user)
      }
    )
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>

      </div>
    )
  }

}

export default App
