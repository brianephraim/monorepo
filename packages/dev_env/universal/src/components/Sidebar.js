import React from 'react'
import { connect } from 'react-redux'
import Link, { NavLink } from 'redux-first-router-link'
import { goToPage } from '../actions'
import styles from '../css/Sidebar'

const Sidebar = ({ onClick, path }) =>
  <div className={styles.sidebar}>
    <h2>SEO-FRIENDLY LINKSz</h2>

    <NavLink activeClassName={styles.active} exact to='/willard'>HOME_UNIVERSAL_DEMO</NavLink>

    <NavLink activeClassName={styles.active} exact to='/willard/migration'>MIGRATION</NavLink>
    <NavLink activeClassName={styles.active} exact to='/willard/battleship'>BATTLESHIP</NavLink>

    <NavLink activeClassName={styles.active} to='/willard/list/db-graphql'>
      DB & GRAPHQL
    </NavLink>

    <NavLink activeClassName={styles.active} to={['willard/list', 'react-redux']}>
      REACT & REDUX
    </NavLink>

    <NavLink
      activeClassName={styles.active}
      to={{ type: 'LIST', payload: { category: 'fp' } }}
    >
      FP
    </NavLink>

    <div style={{ height: 20 }} />
    <h2>EVENT HANDLERS</h2>

    <span className={active(path, '/willard')} onClick={() => onClick('HOME_UNIVERSAL_DEMO')}>
      HOME_UNIVERSAL_DEMO
    </span>

    <span className={active(path, '/willard/migration')} onClick={() => onClick('MIGRATION')}>
      MIGRATION
    </span>
    <span className={active(path, '/willard/battleship')} onClick={() => onClick('MIGRATION')}>
      BATTLESHIP
    </span>

    <span
      className={active(path, '/willard/list/db-graphql')}
      onClick={() => onClick('LIST', 'db-graphql')}
    >
      DB & GRAPHQL
    </span>

    <span
      className={active(path, '/willard/list/react-redux')}
      onClick={() => onClick('LIST', 'react-redux')}
    >
      REACT & REDUX
    </span>

    <span
      className={active(path, '/willard/list/fp')}
      onClick={() => onClick('LIST', 'fp')}
    >
      FP
    </span>

    <div style={{ height: 14 }} />

    <NavLink to={{ type: 'ADMIN' }} activeClassName={styles.active}>
      ADMIN
    </NavLink>
  </div>

const active = (currentPath, path) =>
  currentPath === path ? styles.active : ''

const mapDispatch = { onClick: goToPage }
const mapState = ({ location }) => ({ path: location.pathname })

export default connect(mapState, mapDispatch)(Sidebar)
