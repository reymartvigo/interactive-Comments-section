import { useState } from 'react'
import React from 'react'


/* ICONS  */
import iconPlus from '../../assets/icon-plus.svg';
import iconMinus from '../../assets/icon-minus.svg';
import iconDelete from '../../assets/icon-delete.svg';
import iconReply from '../../assets/icon-reply.svg';
import iconEdit from '../../assets/icon-edit.svg';
/* ICONS  */

const UserReply = ({ avatar, username, time, content, likes, tag }) => {

    const [likeCount, setLikeCount] = useState(likes)

    const handleLike = () => {
        setLikeCount(prevCount => prevCount + 1)
    }

    const handleDislike = () => {
        setLikeCount(prevCount => prevCount - 1)
    }
    return (
        <>
            <div class="user-reply-container">
                <div className="reply-wrapper">
                    <div className="user-wrapper">
                        <div className="user">
                            <img src={avatar} aria-hidden="true" alt=""></img>
                            <span>{username}</span>
                            <span className="user-identity">you</span>
                        </div>

                        <div className="time">
                            <span>{time}</span>
                        </div>
                    </div>

                    <div className="comment">
                        <p><span className='tag'>{tag}</span> {content}</p>
                    </div>

                    <div className="btn-container">
                        <div className="button-wrapper">
                            <button aria-label="add" onClick={handleLike}><img src={iconPlus} aria-label='true' alt=""></img></button>
                            <span>{likeCount}</span>
                            <button aria-label="minus" onClick={handleDislike}><img src={iconMinus} aria-label='true' alt=""></img></button>
                        </div>

                        <div className="edit-wrapper">
                            <button className="delete" aria-label="delete"><img src={iconDelete} aria-label='true' alt=""></img>Delete</button>
                            <button className="edit" aria-label="edit"><img src={iconEdit} aria-label='true' alt=""></img>Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserReply;
