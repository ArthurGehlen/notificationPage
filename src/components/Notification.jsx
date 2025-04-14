import './notification.css'

function Notification({ avatar, user_name, message, important_message, group, is_new, date }) {
    return (
        <div className='notification'>
            <img src={avatar} alt="Avatar" width='40px' />

            <div className="content">
                <p className='message'>
                    <strong className='user_name'>
                        {user_name}
                    </strong>

                    <span className='message'>
                        {message}
                    </span>

                    {group && 
                        <strong className='group'>
                            {group}
                        </strong>}
                    {important_message &&
                        <strong className='important_message'>
                            {important_message}   
                        </strong>}
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