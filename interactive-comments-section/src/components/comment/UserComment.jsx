import { useState, useEffect } from 'react'
import React from 'react';



import juliusomo from '../../assets/avatars/image-juliusomo.png';

import UserReply from '../reply/UserReply'
const UserComment = ({ username }) => {
    const [replies, setReplies] = useState([]);
    const [commentContent, setCommentContent] = useState('');
    const [showCommentContainer, setShowCommentContainer] = useState(true);

    useEffect(() => {
        const storedReplies = localStorage.getItem('replies');
        setReplies(storedReplies ? JSON.parse(storedReplies) : []);
    }, []);

    useEffect(() => {
        localStorage.setItem('replies', JSON.stringify(replies));
    }, [replies]);

    const handleUserReply = () => {
        if (commentContent.trim() === '') {
            return;
        }

        const newReply = {
            id: Date.now().toString(),
            avatar: juliusomo,
            username: 'juliusomo',
            tag: `@${username}`,
            content: commentContent,
            likes: 0,
        };

        setReplies((prevReplies) => [...prevReplies, newReply]);
        setCommentContent('');
        setShowCommentContainer(false);
    };

    const handleCommentContent = (e) => {
        e.preventDefault();
        setCommentContent(e.target.value);
    };

    const handleDeleteReply = (id) => {
        setReplies((prevReplies) => {
            const updatedReplies = prevReplies.filter((reply) => reply.id !== id);
            return updatedReplies;
        });
    };

    return (
        <>
            {showCommentContainer && (
                <div className="add-user-comment-container">
                    <div className="add-user-comment-wrapper">
                        <textarea
                            value={commentContent}
                            onChange={handleCommentContent}
                            className="comment"
                            name="comment"
                            placeholder={`@${username}`}
                        ></textarea>
                        <div>
                            <img src={juliusomo} alt="" aria-hidden="true" />
                            <button onClick={handleUserReply}>REPLY</button>
                        </div>
                    </div>
                </div>
            )}

            {replies.map((reply) => (
                <UserReply
                    key={reply.id}
                    id={reply.id}
                    avatar={reply.avatar}
                    username={reply.username}
                    tag={reply.tag}
                    content={reply.content}
                    likes={reply.likes}
                    onDelete={handleDeleteReply}
                />
            ))}
        </>
    );
};

export default UserComment;