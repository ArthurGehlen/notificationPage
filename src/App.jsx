// Images
import avatar_angela from './assets/images/avatar-angela-gray.webp'
import avatar_anna from './assets/images/avatar-anna-kim.webp'
import avatar_jacob from './assets/images/avatar-jacob-thompson.webp'
import avatar_kimberly from './assets/images/avatar-kimberly-smith.webp'
import avatar_mark from './assets/images/avatar-mark-webber.webp'
import avatar_nathan from './assets/images/avatar-nathan-peterson.webp'
import avatar_rizky from './assets/images/avatar-rizky-hasanuddin.webp'

import Notification from './components/Notification'

import './App.css'

function App() {
  return (
    <>
      <main>
        <header>
          <h2>
            Notifications

            <span>
              3
            </span>
          </h2>

          <button>
            Mark all as read
          </button>
        </header>

        <section className='notifications_section'>
          <Notification
            avatar={avatar_mark}
            user_name='Mark Webber '
            message='reacted to your recent post '
            important_message='My first tournament today! '
            is_new='is_new'
            date='1m ago'
          />
          <Notification
            avatar={avatar_angela}
            user_name='Angela Gray '
            message='followed you '
            is_new='is_new'
            date='5m ago'
          />
          <Notification
            avatar={avatar_jacob}
            user_name='Jacob Thompson '
            message='has joined your group '
            group='Chess Club'
            is_new='is_new'
            date='1 day ago'
          />
        </section>
      </main>
    </>
  )
}


export default App