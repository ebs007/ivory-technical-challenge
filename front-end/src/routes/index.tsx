import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import PanelFindByNome from '../pages/PanelFindByNome'
import PanelFindByCargo from '../pages/PanelFindByCargo'
import PanelFindByCpf from '../pages/PanelFindByCpf'
import PanelFindByDateRegister from '../pages/PanelFindByDateRegister'
import PanelFindByFaixaSalarial from '../pages/PanelFindByFaixaSalarial'
import PanelFindByStatus from '../pages/PanelFindByStatus'
import PanelFindByUfNascimento from '../pages/PanelFindByUfNascimento'
import PanelEmployeeAdd from '../pages/PanelEmployeeAdd'
import PanelRemoveByCpf from '../pages/PanelRemoveByCpf'

const Routes: React.FC = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/localizar-por-nome" exact component={PanelFindByNome} />
        <Route path="/localizar-por-cargo" exact component={PanelFindByCargo} />
        <Route path="/localizar-por-cpf" exact component={PanelFindByCpf} />
        <Route
          path="/localizar-por-data-cadastro"
          exact
          component={PanelFindByDateRegister}
        />
        <Route
          path="/localizar-por-faixa-salarial"
          exact
          component={PanelFindByFaixaSalarial}
        />
        <Route
          path="/localizar-por-status"
          exact
          component={PanelFindByStatus}
        />
        <Route
          path="/localizar-por-uf"
          exact
          component={PanelFindByUfNascimento}
        />
        <Route
          path="/incluir-alterar-funcionario"
          exact
          component={PanelEmployeeAdd}
        />
        <Route path="/remover-por-cpf" exact component={PanelRemoveByCpf} />
      </Switch>
    </>
  )
}

export default Routes
