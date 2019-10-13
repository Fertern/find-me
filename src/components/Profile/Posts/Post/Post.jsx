import React from 'react';
import s from './Post.module.css';

const Post = () => {
    return (
        <div className={s.post}>
            <div className={s.item}>
                <img className={s.logo} alt=''></img>
                New Post
                <div></div>
                <span>Like</span>
                <span>Burn!</span>
            </div>
        </div>
    );
}

export default Post;