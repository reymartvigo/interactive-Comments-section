import { useState, useEffect } from "react";



import '../../styles/index.css';
/* ICONS  */
import iconPlus from '../../assets/icon-plus.svg';
import iconMinus from '../../assets/icon-minus.svg';
import iconReply from '../../assets/icon-reply.svg';
import juliusomo from '../../assets/avatars/image-juliusomo.png';
/* ICONS  */


import UserComment from "../comment/UserComment";
import UserReply from '../reply/UserReply';

const Reply = ({ avatar, username, time, content, likes, tag, id }) => {

    const [likeCount, setLikeCount] = useState(likes)
    const [isReply, setIsReply] = useState(false);
    const [replyComments, setReplyComments] = useState([]);

    const [replies, setReplies] = useState(() => {
        const savedReplies = localStorage.getItem(`replies_${id}`);
        return savedReplies ? JSON.parse(savedReplies) : [];
    });

    const handleAddReply = (reply) => {
        setReplies((prevReplies) => [...prevReplies, reply]);
    };


    useEffect(() => {
        const saveReplies = localStorage.getItem(`replies_${id}`);
        if (saveReplies) {
            setReplies(JSON.parse(saveReplies));
        }
    }, [id]);

    useEffect(() => {
        localStorage.setItem(`replies_${id}`, JSON.stringify(replies));
    }, [id, replies]);


    const handleReply = () => {
        setIsReply(true);

        const newComment = {
            username: username,
        };

        setReplyComments((prevComments) => [...prevComments, newComment]);
    };

    const handleDeleteContent = (index) => {
        setReplies((prevReplies) => {
            const updatedReplies = [...prevReplies];
            updatedReplies.splice(index, 1);
            return updatedReplies;
        });
    };

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
                        {replyComments.map((comment, index) => (
                            <UserComment
                                key={index}
                                username={comment.username}
                                onReply={handleAddReply}
                            />
                        ))}
                    </div>
                )}

                {replies.map((reply, index) => (
                    <UserReply
                        key={index}
                        avatar={reply.avatar}
                        username={reply.username}
                        tag={reply.tag}
                        content={reply.content}
                        likes={reply.likes}
                        onDelete={() => handleDeleteContent(index)}
                    />
                ))}


            </div>


        </>
    )
}

export default Reply;

