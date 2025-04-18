// Images
import avatar_angela from './assets/images/avatar-angela-gray.webp'
import avatar_anna from './assets/images/avatar-anna-kim.webp'
import avatar_jacob from './assets/images/avatar-jacob-thompson.webp'
import avatar_kimberly from './assets/images/avatar-kimberly-smith.webp'
import avatar_mark from './assets/images/avatar-mark-webber.webp'
import avatar_nathan from './assets/images/avatar-nathan-peterson.webp'
import avatar_rizky from './assets/images/avatar-rizky-hasanuddin.webp'
import mentioned_pic from './assets/images/image-chess.webp'

// Components
import Notification from './components/Notification'

import { useState } from 'react'

import './App.css'

function App() {
  const [newNotification, setNewNotification] = useState("new_notification")
  const [quantNotification, setQuantNotification] = useState(3)

  // Mark all as read handle click
  const handle_click = () => {
    const interval_id = setInterval(() => {
      setNewNotification("outdated")
      setQuantNotification((prevQuantNotification) => {
        if (prevQuantNotification > 0) {
          return prevQuantNotification - 1;
        } else {
          clearInterval(interval_id);
          return 0;
        }
      })
    }, 60)
  }

  return (
    <main>
      <header>
        <h2>
          Notifications

          <span>
            {quantNotification}
          </span>
        </h2>

        <button onClick={() => handle_click()}>
          Mark all as read
        </button>
      </header>

      <section className='notifications_section'>
        <Notification
          type={newNotification}
          avatar={avatar_mark}
          user_name='Mark Webber '
          message='reacted to your recent post '
          important_message='My first tournament today! '
          is_new='is_new'
          date='1m ago'
        />
        <Notification
          type={newNotification}
          avatar={avatar_angela}
          user_name='Angela Gray '
          message='followed you '
          is_new='is_new'
          date='5m ago'
        />
        <Notification
          type={newNotification}
          avatar={avatar_jacob}
          user_name='Jacob Thompson '
          message='has joined your group '
          group='Chess Club'
          is_new='is_new'
          date='1 day ago'
        />
        <Notification
          type='private_message'
          avatar={avatar_rizky}
          user_name='Rizky Hasanuddin'
          message='sent you a private message'
          date='5 days ago'
          important_message={`Hello, thanks for setting up the Chess Club. I've been a member for a 
few weeks now and I'm already having lots of fun and improving my 
game.`} />
        <Notification
          type='commented'
          avatar={avatar_kimberly}
          user_name='Kimberly Smith'
          message='commented on your picture'
          mentioned_pic={mentioned_pic}
          date='1 week ago'
        />
        <Notification
          type='outdated'
          avatar={avatar_nathan}
          user_name='Nathan Peterson '
          message='reacted to your recent post '
          important_message='5 end-game strategies to increase your win rate'
          date='2 weeks ago'
        />
        <Notification
          type='outdated'
          avatar={avatar_anna}
          user_name='Anna Kim '
          message='left the group '
          group='Chess Club'
          date='2 weeks ago'
        />
      </section>
    </main>
  )
}

export default App