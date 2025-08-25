import React from 'react';
import ProfileCard from '../ui/ProfileCard';
import ChatRoom from '../ui/ChatRoom';

const Activity = () => {
  const user = {
    name: "John Smith",
    initials: "JS",
    status: "Online - Last seen 2m ago"
  };

  return (
    <div className="w-80 bg-white shadow-lg fixed right-0 top-0 bottom-0 z-20 flex flex-col">
      <ProfileCard user={user} />
      <ChatRoom />
    </div>
  );
};

export default Activity;