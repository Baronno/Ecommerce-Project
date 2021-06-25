
import './App.css'
import Homepage from './pages/homepage.component'
import { Switch, Route } from 'react-router-dom'

import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component'
/* exact disables the /，保护后面的route Switch make sure we only
render the router that matched */
/* link force to render rebuld the web application, but the route deoesn;t,
it only determine which js component to render,  */
/* history.push('/') with onclick event */
// console.logt
function App () {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>

    </div>
  )
}

export default App
