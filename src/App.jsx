import avatar_angela from './assets/images/avatar-angela-gray.webp'
import avatar_anna from './assets/images/avatar-anna-kim.webp'
import avatar_jacob from './assets/images/avatar-jacob-thompson.webp'
import avatar_kimberly from './assets/images/avatar-kimberly-smith.webp'
import avatar_mark from './assets/images/avatar-mark-webber.webp'
import avatar_nathan from './assets/images/avatar-nathan-peterson.webp'
import avatar_rizky from './assets/images/avatar-rizky-hasanuddin.webp'

const users = [
  { name: 'Angela Gray', avatar: avatar_angela },
  { name: 'Anna Kim', avatar: avatar_anna },
  { name: 'Jacob Thompson', avatar: avatar_jacob },
  { name: 'Kimberly Smith', avatar: avatar_kimberly },
  { name: 'Mark Webber', avatar: avatar_mark },
  { name: 'Nathan Peterson', avatar: avatar_nathan },
  { name: 'Rizky Hasanuddin', avatar: avatar_rizky }
]

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
          
        </section>
      </main>
      {/* {users.map((user, index) => (
        <div key={index}>
          <p>{user.name}</p>
          <img src={user.avatar} alt='Avatar' width='50px' />
        </div>
      ))} */}
    </>
  )
}


export default App
