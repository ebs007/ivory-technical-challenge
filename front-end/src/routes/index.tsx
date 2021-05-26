import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
// import Menu from "../pages/FindByNome";
// import FindByNome from "../pages/FindByNome";

const Routes: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Dashboard} />
      </Switch>
    </>
  )
}

export default Routes
