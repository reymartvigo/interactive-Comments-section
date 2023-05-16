import React from 'react'


import juliusomo from '../../assets/avatars/image-juliusomo.png';
const AddComment = () => {
    return (
        <div className="add-comment-container">
            <div className="add-comment-container">
                <textarea name="comment" placeholder="Add a comment..."></textarea>

                <div>
                    <img src={juliusomo} alt="" aria-hidden="true" />
                    <button>SEND</button>
                </div>
            </div>
        </div >
    )
}


export default AddComment;