import { useState, useEffect } from 'react';
import React from 'react';

import juliusomo from '../../assets/avatars/image-juliusomo.png';

import UserReply from '../reply/UserReply';

const AddComment = () => {
    const date = new Date();
    const [newComment, setNewComment] = useState('');

    const [comments, setComments] = useState(() => {
        const savedComments = localStorage.getItem('comments');
        if (savedComments) {
            const parsedComments = JSON.parse(savedComments);
            return parsedComments.map((comment) => {
                return {
                    ...comment,
                    likes: comment.likes || 0, // Initialize likes to 0 if it's missing or null
                };
            });
        }
        return [];
    });

    useEffect(() => {
        const savedComments = localStorage.getItem('comments');
        if (savedComments) {
            const parsedComments = JSON.parse(savedComments);
            setComments(parsedComments.map((comment) => ({
                ...comment,
                likes: comment.likes || 0,
            })));
            if (parsedComments.length > 0) {
                setNewComment(parsedComments[parsedComments.length - 1].content);
            } else {
                setNewComment('');
            }
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('comments', JSON.stringify(comments));
    }, [comments]);

    const handleAddComment = () => {


        if (newComment.trim() === '') {
            return;
        }

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
        // e.preventDefault();
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
            const commentToUpdate = updatedComments[replyIndex];

            const updatedComment = {
                ...commentToUpdate,
                likes: commentToUpdate.likes ? commentToUpdate.likes + 1 : 1,
            };

            updatedComments[replyIndex] = updatedComment;
            localStorage.setItem('comments', JSON.stringify(updatedComments));

            return updatedComments;
        });
    };



    const handleReplyDislike = (replyIndex) => {
        setComments((prevComments) => {
            const updatedComments = [...prevComments];
            const commentToUpdate = updatedComments[replyIndex];

            const updatedComment = {
                ...commentToUpdate,
                likes: commentToUpdate.likes ? commentToUpdate.likes - 1 : 1,
            };

            updatedComments[replyIndex] = updatedComment;
            localStorage.setItem('comments', JSON.stringify(updatedComments));

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
                        onLike={() => handleReplyLike(index)}
                        onDislike={() => handleReplyDislike(index)}
                    />
                ))}
                <div className="add-comment-wrapper">
                    <textarea
                        name="comment"
                        placeholder="Add a comment..."
                        value={newComment}
                        onChange={handleCommentChange}

                    ></textarea>
                    <div>
                        <img src={juliusomo} alt="" aria-hidden="true" />
                        <button disabled={newComment.trim() === ''} onClick={handleAddComment}>SEND</button>
                    </div>
                </div>
            </div>


        </>
    )
}


export default AddComment;