import React from 'react';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom';
import Home from './home';
import About from './about';
import Test from './test';
import News from './news';
import Header from './header';
import Footer from './footer';

const Menu=()=>{
    return(
      <Router>
          <div>
            
               <Header />
 
          </div>
          <div>
          <Switch>
              <Route path='/' exact component={Home}></Route>
              <Route path='/nepal' component={About}></Route>
              <Route path='/news' component={News}></Route>
              <Route component={Test}></Route>
          </Switch>
          </div>
          <br />
          <div>
              
 <Footer />
          </div>
      </Router> 
      
     );
   
}

export default Menu;