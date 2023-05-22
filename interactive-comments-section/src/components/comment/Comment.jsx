import { useState, useEffect } from 'react'



/* ICONS  */
import iconPlus from '../../assets/icon-plus.svg';
import iconMinus from '../../assets/icon-minus.svg';
import iconReply from '../../assets/icon-reply.svg';
/* ICONS  */

import UserComment from './UserComment'



const Comment = ({ avatar, username, time, content, likes }) => {

    const [likeCount, setLikeCount] = useState(likes);
    const [isReply, setIsReply] = useState(false);
    const [replyComments, setReplyComments] = useState([]);



    const handleReply = () => {
        setIsReply(true);

        const newComment = {
            username: username,
        };

        setReplyComments(prevComments => [...prevComments, newComment]);
    };


    const handleLike = () => {
        setLikeCount(prevCount => prevCount + 1)
    }

    const handleDislike = () => {
        setLikeCount(prevCount => prevCount - 1)
    }


    return (
        <div className="comment-container">
            <div className="comment-wrapper">
                <div className="user-wrapper">
                    <div className="user">
                        <img src={avatar} aria-hidden="true" alt=""></img>
                        <span>{username}</span>
                    </div>

                    <div className="time">
                        <span>{time} </span>
                    </div>
                </div>

                <div className="comment">
                    {content}
                </div>

                <div className="btn-container">
                    <div className="button-wrapper">
                        <button aria-label="add" onClick={handleLike}><img src={iconPlus} aria-label='true' alt=""></img></button>
                        <span>{likeCount}</span>
                        <button aria-label="minus" onClick={handleDislike}><img src={iconMinus} aria-label='true' alt=""></img></button>
                    </div>

                    <div className="reply-wrapper">

                        <button aria-label="reply" onClick={handleReply}><img src={iconReply} aria-label='true' alt=""></img>Reply</button>
                    </div>
                </div>
            </div>


            {isReply && (
                <div className="userComment">
                    {replyComments.map((comment, index) => (
                        <UserComment key={index} username={comment.username} />
                    ))}
                </div>
            )}
        </div>
    )
}

export default Comment;