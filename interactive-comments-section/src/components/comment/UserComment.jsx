import { useState } from 'react'
import React from 'react';



import juliusomo from '../../assets/avatars/image-juliusomo.png';
const UserComment = ({ username }) => {





    return (
        <>

            <div className="add-user-comment-container"  >
                <div className="add-user-comment-wrapper" r>
                    <textarea className="comment" name="comment" placeholder={`@${username}`} ></textarea>
                    <div>
                        <img src={juliusomo} alt="" aria-hidden="true" />
                        <button>REPLY</button>
                    </div>
                </div>
            </div >

        </>
    )
}

export default UserComment;