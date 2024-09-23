// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojisListDetails, clickMethod, emojisList1} = props
  const {emojiName, emojiUrl, id} = emojisListDetails

  const eachemoji = () => {
    clickMethod(id, emojisList1)
    console.log(1)
  }

  return (
    <li className="emoji-container">
      <button type="button" className="button-emoji" onClick={eachemoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}

export default EmojiCard
