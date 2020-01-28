import React from 'react';
import Header from './common/header'
import Home from './pages/home'
import Detail from './pages/detail'
import store from './store/index'
import { Provider } from 'react-redux'
import { Route, BrowserRouter} from 'react-router-dom'

function App() {
  return (
    <Provider store={store}>
      <Header/>
      <BrowserRouter>
        <Route path="/" exact component={Home}></Route>
        <Route path="/detail" exact component={Detail}></Route>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
