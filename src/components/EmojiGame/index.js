/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'

class EmojiGame extends Component {
  clickMethod = id => {
    console.log(id)
  }

  // getRandom = emojisList => {
  //   // const emojisList1 = emojisList.sort(() => Math.random() - 0.5)
  //   // return emojisList1
  //   console.log(emojisList)
  //   console.log('swetha')
  // }

  render() {
    const {emojisList} = this.props
    return (
      <div className="big-container">
        <NavBar />
        <ul className="emojies-container">
          {emojisList.map(eachItem => (
            <EmojiCard
              emojisListDetails={eachItem}
              emojisList1={emojisList}
              key={eachItem.id}
              clickMethod={this.clickMethod()}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default EmojiGame
