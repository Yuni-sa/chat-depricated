import React from 'react';
import ChatHeader from './Components/ChatHeader';
import './Profile.css'
function Profile() {
    return (<div className="Profile">
        <ChatHeader></ChatHeader>
        <div className='chat-body'></div>
    </div>

    );
}

export default Profile;