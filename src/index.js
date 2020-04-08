import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

class ReactSidebar extends Component {
  static propTypes = {
    width: PropTypes.number,
    background: PropTypes.string,
    navbarHeight: PropTypes.number,
    children: PropTypes.node,
    position: PropTypes.oneOf(['LEFT', 'RIGHT'])
  };

  render() {
    const { background, children, navbarHeight, position, width } = this.props
    const positionStyle =
      position === 'LEFT' ? styles.sideNavLeft : styles.sideNavRight
    const containerStyle = [styles.sidebar, positionStyle].join(' ')
    return (
      <nav
        className={containerStyle}
        style={{ width: width, background, padding: `${navbarHeight}px 0 0` }}
      >
        <div
          className={styles.sidebarSticky}
          style={{ height: `calc( 100vh - ${navbarHeight}px )` }}
        >
          {children}
        </div>
      </nav>
    )
  }
}

ReactSidebar.defaultProps = {
  width: 200,
  background: '#fff',
  navbarHeight: 0,
  position: 'LEFT'
}
export default ReactSidebar
