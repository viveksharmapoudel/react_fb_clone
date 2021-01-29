import React,{useEffect,useState} from 'react'
import "./Feed.css";

import MessageSender from "./MessageSender";
import StoryReel from "./StoryReel";
import Post from "./Post";
import db from './firebase';
import { SettingsInputAntenna } from '@material-ui/icons';
function Feed() {

    const [posts, setPosts]=useState([]);

    useEffect(() => {
        console.log("inside use effect")
        db.collection('posts')
            .orderBy('timeStramp','desc')
            .onSnapshot(snapshot =>{
            setPosts(snapshot.docs.map(doc =>({id: doc.id, data:doc.data()})))
        });
    }, []);

    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender />
            {/* <Post 
                profilePic="https://cdn.fastly.picmonkey.com/contentful/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=800&q=70"
                image="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
                username="Hitleer"
                timeStramp="" 
                message="THis is awesome"
            /> 
            <Post 
                profilePic="https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                image="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201912/question-mark-2492009_960_720.jpeg?v1wxXrNBMtHm8XyvxIo2HmtEHb5BENZ0&size=770:433"
                username="Test123"
                timeStramp="" 
                message="This is the second post "
            /> */}

            {
                posts.map(post =><Post
                    key={post.id}
                    {...post.data}
                />)
            }
        </div>
    )
}

export default Feed
