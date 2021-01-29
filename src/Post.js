import React from 'react'
import "./Post.css"

import ThumbUpIcon from '@material-ui/icons/ThumbUp'

import { Avatar } from '@material-ui/core'
import { AccountCircle, ChatBubbleOutlined, ChatBubbleOutlineOutlined, ExpandMore, ExpandMoreOutlined, NearMe } from '@material-ui/icons'
function Post({profilePic, image, username, timeStramp, message}) {

    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic}/>
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p >{timeStramp?.toDate().toUTCString()}</p>
                </div>
            </div>

            <div className="post__bottom">
                <p className="">
                    {message}
                </p>
            </div>
            <div className="post__image">
                <img src={image} alt=""/>
            </div>
            <div className="post__options">
                <div className="post__option">
                    <ThumbUpIcon />
                    <p >Like</p>
                </div>
                <div className="post__option">
                    <ChatBubbleOutlineOutlined />
                    <p>Comment</p>
                </div>
                <div className="post__option">
                    <NearMe />
                    <p>Share</p>
                    
                </div>
                <div className="post__option">
                    <AccountCircle/>
                    <ExpandMoreOutlined />
                </div>
            </div>
        </div>
    )
}

export default Post
