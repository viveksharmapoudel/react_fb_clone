import React from 'react'
import "./MessageSender.css"

import { Avatar } from '@material-ui/core'

import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

import db from "./firebase";
import firebase from "firebase";
import { useStateValue } from './StateProvider';

function MessageSender() {

    const [{user}, dispatch]= useStateValue();
    const [input, setInput] = React.useState("");
    const [imageUrl, setImageUrl] = React.useState("");

    const handleSubmit = e =>{
        e.preventDefault();
        db.collection('posts').add({
            message: input,
            timeStramp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageUrl,
        });

        setInput("");
        setImageUrl("");
    }
    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar/>
                <form >
                    <input type="text"
                            className="messageSender__input"
                            placeholder="whats on yur mind"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                         />
                    <input type="text" className=""
                        placeholder="Image Url(optional)"
                        value={imageUrl}
                        onChange={e => setImageUrl(e.target.value)}
                    />
                    <button className="" onClick={handleSubmit}>
                        Hidden Submit
                    </button>
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__option">
                    <VideocamIcon style ={{color:"red"}}/>
                    <h3>Live Video</h3>
                </div>
                <div className="messageSender__option">
                    <PhotoLibraryIcon style ={{color:"green"}}/>
                    <h3>Photo/Video</h3>
                </div>
                <div className="messageSender__option">
                    <InsertEmoticonIcon style ={{color:"orange"}}/>
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
