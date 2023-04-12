import React from 'react'
import Header from '../components/header'
import HomePage from '../components/HomePage'
import BlogListPage from '../components/BlogListPage'
import BlogDetailsPage from '../components/BlogDetails'
import ContactPage from '../components/Contactpage'
import NotFoundPage from '../components/NotFoundPage'

import { BrowserRouter, Switch, Route } from 'react-router-dom'
const AppRouters = () => {
  return (
    <div>
     <BrowserRouter>
     <div>
<Header></Header>
                <Switch>
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/blogs" component={BlogListPage} exact/>
                    <Route path="/blogs/:id" component={BlogDetailsPage} />
                    <Route path="/contact" component={ContactPage} />
                    <Route component={NotFoundPage} />
                </Switch>
            </div>
     </BrowserRouter>
    </div>
  )
}

export default AppRouters