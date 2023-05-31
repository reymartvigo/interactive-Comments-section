import { useState, useRef, useEffect } from 'react';
import React from 'react';

import '../../styles/user-reply.css';
/* ICONS  */
import iconPlus from '../../assets/icon-plus.svg';
import iconMinus from '../../assets/icon-minus.svg';
import iconDelete from '../../assets/icon-delete.svg';
import iconEdit from '../../assets/icon-edit.svg';
/* ICONS  */

const UserReply = ({ avatar, username, content, likes, tag, onDelete, onUpdate, time, onLike, onDislike }) => {
    const [editMode, setEditMode] = useState(false);
    const [editedContent, setEditedContent] = useState(content);
    const [likeCount, setLikeCount] = useState(likes);
    const [deleteMode, setDeleteMode] = useState(false);

    const deleteModalRef = useRef(null);

    const disabledDislikeBtn = likeCount === 0;
    useEffect(() => {
        if (deleteMode) {
            deleteModalRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [deleteMode]);


    useEffect(() => {
        setLikeCount(likes);
    }, [likes]);

    const handleLike = () => {
        setLikeCount((prevCount) => prevCount + 1);
        onLike(likeCount + 1);
    }

    const handleDislike = () => {
        setLikeCount(prevCount => prevCount - 1);
        onDislike(likeCount);
    };

    const handleEdit = () => {
        setEditMode(true);
    };



    const handleUpdate = () => {
        setEditMode(false);
        onUpdate(editedContent)
    }


    const handleUpdateContent = e => {
        setEditedContent(e.target.value);
    };

    const handleDeleteContent = () => {
        onDelete();
        handleCancelDelete()
    };

    const handleShowDelete = () => {
        setDeleteMode(true);
    };

    const handleCancelDelete = () => {
        setDeleteMode(false);
    };



    return (
        <>
            <div className="user-reply-container">
                <div className="reply-wrapper">
                    <div className="user-wrapper">
                        <div className="user">
                            <img src={avatar} aria-hidden="true" alt="" />
                            <span>{username}</span>
                            <span className="user-identity">you</span>
                        </div>

                        <div className="time">
                            <span>{time}</span>
                        </div>
                    </div>

                    <div className="comment">
                        {editMode ? (
                            <textarea
                                className="edit-comment"
                                value={editedContent}
                                onChange={handleUpdateContent}
                            />
                        ) : (
                            <p>
                                <span className="tag">{tag}</span> {editedContent}
                            </p>
                        )}
                    </div>

                    <div className="btn-container">
                        <div className="button-wrapper">
                            <button aria-label="add" onClick={handleLike}>
                                <img src={iconPlus} aria-label="true" alt="" />
                            </button>
                            <span>{likeCount}</span>
                            <button disabled={disabledDislikeBtn} aria-label="minus" onClick={handleDislike}>
                                <img src={iconMinus} aria-label="true" alt="" />
                            </button>
                        </div>

                        <div className="edit-wrapper">
                            {!editMode && (
                                <button className="delete" aria-label="delete" onClick={handleShowDelete}>
                                    <img src={iconDelete} aria-label="true" alt="" />
                                    Delete
                                </button>
                            )}
                            {!editMode ? (
                                <button className="edit" aria-label="edit" onClick={handleEdit}>
                                    <img src={iconEdit} aria-label="true" alt="" />
                                    Edit
                                </button>
                            ) : (
                                <>
                                    <button className="update" aria-label="update" onClick={handleUpdate}>
                                        Update
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {deleteMode && (
                    <div className="deleteContainer" ref={deleteModalRef}>
                        <div className="delete-wrapper">
                            <h2>Delete comment</h2>
                            <span>
                                Are you sure you want to delete this comment? This will remove the comment and can't be undone.
                            </span>
                            <div className="option-wrapper">
                                <button className="cancel" aria-label="cancel" onClick={handleCancelDelete}>
                                    NO, CANCEL
                                </button>
                                <button className="delete" aria-label="delete" onClick={handleDeleteContent}>
                                    YES, DELETE
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default UserReply;
