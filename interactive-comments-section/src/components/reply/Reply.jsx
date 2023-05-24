import { useState } from "react";



import '../../styles/index.css';
/* ICONS  */
import iconPlus from '../../assets/icon-plus.svg';
import iconMinus from '../../assets/icon-minus.svg';
import iconReply from '../../assets/icon-reply.svg';
import juliusomo from '../../assets/avatars/image-juliusomo.png';
/* ICONS  */


import UserComment from "../comment/UserComment";

const Reply = ({ avatar, username, time, content, likes, tag }) => {

    const [likeCount, setLikeCount] = useState(likes)
    const [isReply, setIsReply] = useState(false);
    const [replyComments, setReplyComment] = useState([]);

    const handleReply = () => {
        setIsReply(true)

        setReplyComment((prevComments) => [
            ...prevComments,
            <UserComment key={prevComments.length} username={username} />
        ]);
    }
    const handleLike = () => {
        setLikeCount(prevCount => prevCount + 1)
    }

    const handleDislike = () => {
        setLikeCount(prevCount => prevCount - 1)
    }
    return (
        <>
            <div className="reply-container">
                <div className="reply-wrapper">
                    <div className="other-wrapper">
                        <div className="user">
                            <img src={avatar} aria-hidden="true" alt=""></img>
                            <span>{username}</span>
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

                        <div className="reply-wrapper">
                            <button aria-label="reply" onClick={handleReply}><img src={iconReply} aria-label='true' alt="" ></img>Reply</button>
                        </div>
                    </div>
                </div>

                {isReply && (
                    <div className="userComment">
                        {replyComments}
                    </div>
                )}


            </div>


        </>
    )
}

export default Reply;

