import React, { useState } from 'react';
import './Feed.css';
import CreateIcon from '@material-ui/icons/Create';
import InputOption from './InputOption';
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post';

function Feed() {
  const [posts, setPosts] = useState([]);

  return (
    <div className='feed'>
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input type="text" />
            <button type='submit'>Send</button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} title='Photo' color='#70b5f9' />
          <InputOption Icon={SubscriptionIcon} title='Video' color='#e7a33e' />
          <InputOption Icon={EventNoteIcon} title='Event' color='#c0cbcd' />
          <InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7fc15e' />
        </div>
      </div>

    {/* Posts */}
    {posts.map((post) => (
      <Post />
    ))}
    <Post
      name='Sonny Sangha'
      description='This is a test'
      message='WOW this worked'
    />
    </div>
  )
}

export default Feed;
