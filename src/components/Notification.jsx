import './notification.css'

function Notification({ avatar, user_name, message, important_message, group, is_new, date }) {
    return (
        <div className={`notification ${is_new}`}>
            <img src={avatar} alt="Avatar" width='50px' />

            <div className="content">
                <p>
                    <strong className='user_name'>
                        {user_name}
                    </strong>

                    <span className='message'>
                        {message}
                    </span>

                    {group && 
                        <span className='group'>
                            {group}
                        </span>}
                    {important_message &&
                        <span className='important_message'>
                            {important_message}   
                        </span>}
                    {is_new &&
                        <div className="new_notification_identifier"></div>    
                    }
                </p>
                <p className='date'>
                    {date}
                </p>
            </div>
        </div>
    )
}

export default Notification