import { useState, useEffect } from 'react';
import React from 'react';
import juliusomo from '../../assets/avatars/image-juliusomo.png';


const UserComment = ({ username, onReply }) => {
    const [commentContent, setCommentContent] = useState('');
    const [showCommentContainer, setShowCommentContainer] = useState(true);


    const date = new Date()
    const handleUserReply = () => {
        if (commentContent.trim() === '') {
            return;
        }

        const newReply = {
            avatar: juliusomo,
            username: 'juliusomo',
            tag: `@${username}`,
            content: commentContent,
            likes: 0,
            time: date.toLocaleTimeString()
        };

        setCommentContent('');
        setShowCommentContainer(false);

        onReply(newReply);
    };

    const handleCommentContent = (e) => {
        e.preventDefault();
        setCommentContent(e.target.value);
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


        </>
    );
};

export default UserComment;
