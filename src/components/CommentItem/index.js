import {formatDistanceToNow} from 'date-fns'
import './index.css'

const CommentItem = props => {
  const {CommentDetails} = props
  const {id, name, isLiked, date, comment, initialClassName} = CommentDetails
  const initial = name ? name[0].toUpperCase() : ''
  const isActive = isLiked ? 'active' : ''
  const imgUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const postedTime = formatDistanceToNow(date)

  const onClickLikeBtn = () => {
    const {toggleIsLiked} = props
    toggleIsLiked(id)
  }

  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  return (
    <li className="list-con">
      <div className="comment-con">
        <div className="initial">
          <p className={initialClassName}>{initial}</p>

          <div className="user-name-con">
            <p className="name">{name}</p>
            <p className="time">{postedTime} ago</p>
          </div>
        </div>
        <p className="comment">{comment}</p>
      </div>

      <div className="btn-con">
        <div className="like-btn-con">
          <img className="like-img" src={imgUrl} alt="like" />
          <button className={isActive} type="button" onClick={onClickLikeBtn}>
            Like
          </button>
        </div>
        <button
          type="button"
          className="delete-btn"
          onClick={onDeleteComment}
          data-testid="delete"
        >
          <img
            alt="delete"
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
