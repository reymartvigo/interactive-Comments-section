import { useState } from 'react'
import React from 'react'


/* ICONS  */
import iconPlus from '../../assets/icon-plus.svg';
import iconMinus from '../../assets/icon-minus.svg';
import iconDelete from '../../assets/icon-delete.svg';
import iconEdit from '../../assets/icon-edit.svg';
/* ICONS  */




const UserReply = ({ avatar, username, time, content, likes, tag }) => {

    const [editMode, setEditable] = useState(false)
    const [editedContent, setEditedContent] = useState(content)
    const [likeCount, setLikeCount] = useState(likes)

    const handleLike = () => {
        setLikeCount(prevCount => prevCount + 1)
    }

    const handleDislike = () => {
        setLikeCount(prevCount => prevCount - 1)
    }


    const handleEdit = () => {
        setEditable(true)
    }

    const handleUpdate = () => {
        setEditable(false)
        setEditedContent(editedContent)
    }

    const handleUpdateContent = e => {
        setEditedContent(e.target.value)
    }


    return (
        <>
            <div className="user-reply-container">
                <div className="reply-wrapper">
                    <div className="user-wrapper">
                        <div className="user">
                            <img src={avatar} aria-hidden="true" alt=""></img>
                            <span>{username}</span>
                            <span className="user-identity">you</span>
                        </div>

                        <div className="time">
                            <span>{time}</span>
                        </div>
                    </div>

                    <div className="comment">
                        {editMode ?
                            <textarea
                                className="edit-comment"
                                value={editedContent}
                                onChange={handleUpdateContent}
                            /> : <p><span className='tag'>{tag}</span> {editedContent}</p>
                        }

                    </div>

                    <div className="btn-container">
                        <div className="button-wrapper">
                            <button aria-label="add" onClick={handleLike}><img src={iconPlus} aria-label='true' alt=""></img></button>
                            <span>{likeCount}</span>
                            <button aria-label="minus" onClick={handleDislike}><img src={iconMinus} aria-label='true' alt=""></img></button>
                        </div>

                        <div className="edit-wrapper">
                            {!editMode && (
                                <button className="delete" aria-label="delete">
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
                                    <button className="update" aria-label="update" onClick={handleUpdate} >
                                        Update
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default UserReply;
