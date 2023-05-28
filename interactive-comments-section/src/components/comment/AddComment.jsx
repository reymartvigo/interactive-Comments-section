import { useState, useEffect } from 'react';
import React from 'react';

import juliusomo from '../../assets/avatars/image-juliusomo.png';

import UserReply from '../reply/UserReply';

const AddComment = () => {
    const date = new Date();
    const [newComment, setNewComment] = useState({ content: '' });
    const [comments, setComments] = useState(() => {
        const savedComments = localStorage.getItem('comments');
        return savedComments ? JSON.parse(savedComments) : [];
    });

    useEffect(() => {
        const savedComments = localStorage.getItem('comments');
        if (savedComments) {
            setNewComment(JSON.parse(savedComments));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(comments));
    }, [comments]);

    const handleAddComment = () => {
        const commentObj = {
            avatar: juliusomo,
            username: 'juliusomo',
            content: newComment,
            likes: 0,
            time: date.toLocaleTimeString()
        };
        setComments((prevComments) => [...prevComments, commentObj]);
        setNewComment('');
    };

    const handleUpdateComment = (index, editedContent) => {
        setComments((prevComments) => {
            const updatedComments = [...prevComments];
            updatedComments[index].content = editedContent;
            return updatedComments;
        });
    };

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleDeleteComment = (index) => {
        setComments((prevComments) => {
            const updatedComments = [...prevComments];
            updatedComments.splice(index, 1);
            return updatedComments;
        });
    };

    const handleReplyLike = (replyIndex) => {
        setComments((prevComments) => {
            const updatedComments = [...prevComments];
            updatedComments[replyIndex].likes += 1;
            localStorage.setItem('comments_likes', JSON.stringify(updatedComments));
            return updatedComments;
        });
    };

    const handleReplyDislike = (replyIndex) => {
        setComments((prevComments) => {
            const updatedComments = [...prevComments];
            updatedComments[replyIndex].likes -= 1;
            localStorage.setItem('comments_likes', JSON.stringify(updatedComments));
            return updatedComments;
        });
    };

    return (
        <>
            <div className="add-comment-container">
                {comments.map((comment, index) => (
                    <UserReply
                        key={index}
                        avatar={comment.avatar}
                        username={comment.username}
                        content={comment.content}
                        likes={comment.likes}
                        time={comment.time}
                        onUpdate={(editedContent) => handleUpdateComment(index, editedContent)}
                        onDelete={() => handleDeleteComment(index)}
                        onLike={(likeCount) => handleReplyLike(index, likeCount)}
                        onDislike={(likeCount) => handleReplyDislike(index, likeCount)}
                    />
                ))}
                <div className="add-comment-wrapper">
                    <textarea
                        name="comment"
                        placeholder="Add a comment..."
                        value={newComment.content}
                        onChange={handleCommentChange}
                    ></textarea>
                    <div>
                        <img src={juliusomo} alt="" aria-hidden="true" />
                        <button onClick={handleAddComment}>SEND</button>
                    </div>
                </div>
            </div>


        </>
    )
}


export default AddComment;