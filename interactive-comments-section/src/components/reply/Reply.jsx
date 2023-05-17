import { useState } from "react";



import '../../styles/index.css';
/* ICONS  */
import iconPlus from '../../assets/icon-plus.svg';
import iconMinus from '../../assets/icon-minus.svg';
import iconReply from '../../assets/icon-reply.svg';
import juliusomo from '../../assets/avatars/image-juliusomo.png';
/* ICONS  */

import UserReply from './UserReply';

const Reply = ({ avatar, username, time, content, likes, tag }) => {

    const [likeCount, setLikeCount] = useState(likes)
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
                            <button aria-label="reply"><img src={iconReply} aria-label='true' alt=""></img>Reply</button>
                        </div>
                    </div>
                </div>

                <UserReply
                    avatar={juliusomo}
                    username="juliusomo"
                    time="2 days ago"
                    tag="@ramsesmiron"
                    content="I coudn't agree more with this. Everything moves so fast and it always seems like everyone konow the newest library/framework. But the fundamentals are what stay constant."
                    likes={2}
                />
            </div>


        </>
    )
}

export default Reply;

