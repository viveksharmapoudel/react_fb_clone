import React from 'react'

import Story from './Story';

import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import img4 from "./images/4.jpg";

const storyData=[
            {
                profilePic: img1,
                title:"Viv",
                image: "https://cdn.guidingtech.com/imager/assets/220374/add-multiple-photo-to-facebook-fb-and-messenger-story-2_935adec67b324b146ff212ec4c69054f.png?1607273896",
            },
            {
                profilePic: img2 ,
                title:"John",
                image: "https://cdn.guidingtech.com/imager/assets/220374/add-multiple-photo-to-facebook-fb-and-messenger-story-2_935adec67b324b146ff212ec4c69054f.png?1607273896",
            },
            {
                profilePic:img3,
                title:"laxman",
                image: "https://cdn.guidingtech.com/imager/assets/220374/add-multiple-photo-to-facebook-fb-and-messenger-story-2_935adec67b324b146ff212ec4c69054f.png?1607273896",
            },
            {
                profilePic:img4,
                title:"hari",
                image: "https://cdn.guidingtech.com/imager/assets/220374/add-multiple-photo-to-facebook-fb-and-messenger-story-2_935adec67b324b146ff212ec4c69054f.png?1607273896",
            },
        ]
function StoryReel() {
    return (
        <div className="storyreel" style={{display: 'flex'}}>

            {
                storyData.map((item,index) =>{
                   return <Story key={index} {...item}/>
                })
            }
        </div>
    )
}

export default StoryReel
