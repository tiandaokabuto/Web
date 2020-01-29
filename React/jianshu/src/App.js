import React from 'react';
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'
import Login from './pages/login'
import Write from './pages/write'
import store from './store/index'
import { Provider } from 'react-redux'
import { Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header/>
        <Route path="/" exact component={Home}></Route>
        <Route path="/detail/:id" exact component={Detail}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/write" exact component={Write}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
