import React, { useContext } from 'react'

import Context from '../../Context'

import Menu from '../Menu'
import HeaderDefault from '../HeaderDefault'
import List from '../List'

import './index.scss'

const Dashboard: React.FC = () => {
  const { signIn, setSignIn } = useContext(Context)

  return (
    <>
      <div className="container-fluid dashboard">
        <nav
          className=" navbar navbar-dark bg-dark"
          aria-label="Fourth navbar example"
        >
          <div className="container-fluid">
            <a className="navbar-brand" href="#top">
              Expand at md
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarsExample04"
              aria-controls="navbarsExample04"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div className="collapse navbar-collapse" id="navbarsExample04">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#top"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#top">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link disabled"
                    href="#top"
                    tabIndex={-1}
                    aria-disabled="true"
                  >
                    Disabled
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#top"
                    id="dropdown04"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dropdown
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown04">
                    <li>
                      <a className="dropdown-item" href="#top">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#top">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#top">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form>
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </form>
            </div>
          </div>
        </nav>

        <Menu />
        <div className=" flex-column align-items-stretch flex-shrink-0 bg-white list">
          <HeaderDefault />
          <List />
        </div>
      </div>
    </>
  )
}

export default Dashboard
