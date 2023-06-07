import {Route, Switch, Redirect} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import ProfilePage from './components/ProfilePage'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import Account from './components/Account'
import Popular from './components/Popular'
import MovieDetailView from './components/MovieDetailView'
import SearchFilter from './components/SearchResult'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/ProfilePage" component={ProfilePage} />
    <ProtectedRoute exact path="/movies/:id" component={MovieDetailView} />
    <ProtectedRoute exact path="/search" component={SearchFilter} />
    <ProtectedRoute exact path="/account" component={Account} />
    <ProtectedRoute exact path="/popular" component={Popular} />
    <Route path="/not-found" component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
