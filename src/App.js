
import './App.css'
import Homepage from './pages/homepage.component'
import { Switch, Route } from 'react-router-dom'

const HatsPage = (props) => {
  console.log(props)
  return (<div>
    <h1>
      HATS PAGE
    </h1>
  </div>)
}
/* exact disables the /，保护后面的route Switch make sure we only
render the router that matched */
/* link force to render rebuld the web application, but the route deoesn;t,
it only determine which js component to render,  */
/* history.push('/') with onclick event */
function App () {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>

    </div>
  )
}

export default App
