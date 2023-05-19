import { useState, useEffect, useRef } from 'react'
import React from 'react';



import juliusomo from '../../assets/avatars/image-juliusomo.png';

import UserReply from '../reply/UserReply'
const UserComment = ({ username }) => {

    const [replies, setReplies] = useState([]);
    const [commentContent, setCommentContent] = useState('');
    const [showCommentContainer, setShowCommentContainer] = useState(true);

    const handleUserReply = () => {
        if (commentContent.trim() === '') {
            return
        }

        const newReply = {
            avatar: juliusomo,
            username: 'juliusomo',
            tag: `@${username}`,
            content: commentContent,
            likes: 0,
        }

        setReplies((prevReplies => [...prevReplies, newReply]))
        setCommentContent('')
        setShowCommentContainer(false);
    }

    const handleCommentContent = e => {
        e.preventDefault()
        setCommentContent(e.target.value)
    }


    return (
        <>
            {showCommentContainer && (
                <div className="add-user-comment-container">
                    <div className="add-user-comment-wrapper" >
                        <textarea value={commentContent} onChange={handleCommentContent} className="comment" name="comment" placeholder={`@${username}`} ></textarea>
                        <div>
                            <img src={juliusomo} alt="" aria-hidden="true" />
                            <button onClick={handleUserReply}>REPLY</button>
                        </div>
                    </div>
                </div >
            )}

            {replies.map((reply, index) => (
                <UserReply
                    key={index}
                    avatar={reply.avatar}
                    username={reply.username}
                    tag={reply.tag}
                    content={reply.content}
                    likes={reply.likes}
                />
            ))}

        </>
    )
}

export default UserComment;