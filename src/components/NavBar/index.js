// Write your code here.
import {Component} from 'react'
import './index.css'

class NavBar extends Component {
  render() {
    return (
      <nav className="nav-container">
        <div className="image-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
            className="image-logo"
          />
          <p className="image-text">Emoji Game</p>
        </div>
        <div className="scores-container">
          <p className="score">Score:0</p>
          <p className="top-score">Top Score:0</p>
        </div>
      </nav>
    )
  }
}

export default NavBar
