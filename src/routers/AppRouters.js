import React from 'react'
import Header from '../components/header'
import HomePage from '../components/HomePage'
import BlogListPage from '../components/BlogListPage'
import ContactPage from '../components/Contactpage'
import NotFoundPage from '../components/NotFoundPage'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Footer from '../components/Footer'
const AppRouters = () => {
  return (
    <div>
     <BrowserRouter>
     <div>
<Header></Header>
                <Switch>
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/blogs" component={BlogListPage} exact/>
                  
                    <Route path="/contact" component={ContactPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
     </BrowserRouter>
     <Footer></Footer>
    </div>
  )
}

export default AppRouters