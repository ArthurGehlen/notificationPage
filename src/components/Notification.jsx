import './notification.css'

function Notification({
    type = '',
    avatar = '',
    mentioned_pic = '',
    user_name = '',
    message = '',
    important_message = '',
    group = '',
    date = ''
}) {
    return (
        type === 'new_notification' ? (
            <div className='notification new_notification'>
                <img src={avatar} alt="Avatar" width='40px' />
                <div className="content">
                    <p className='message'>
                        <strong className='user_name'>
                            {user_name}
                        </strong>

                        <span>
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

                        <div className="new_notification_identifier"></div>
                    </p>

                    <p className='date'>
                        {date}
                    </p>
                </div>
            </div>
        ) : type === 'private_message' ? (
            <div className="notification private_message">
                <img src={avatar} alt="Avatar" width='40px' />

                <div className="content">
                    <div className="header">
                        <p>
                            <strong>{user_name} </strong>
                            <span>
                                {message}
                            </span>
                        </p>
                        <p className='date'>
                            {date}
                        </p>
                    </div>

                    <div className="message">
                        <p>
                            {important_message}
                        </p>
                    </div>
                </div>
            </div>
        ) : type === 'commented' ? (
            <div className='commented notification'>
                <img src={avatar} alt="Avatar" width='40px' />

                <div className="content">
                    <p className="message">
                        <strong className='user_name'>
                            {user_name}
                        </strong>
                        <span>
                            {message}
                        </span>
                    </p>

                    <p className="date">
                        {date}
                    </p>
                </div>
                <img src={mentioned_pic} alt="Pic" width='40px' />
            </div>
        ) : type === 'outdated' ? (
            <div className='outdated notification'>
                <img src={avatar} alt="Avatar" width='40px' />

                <div className="content">
                    <p className='message'>
                        <strong className='user_name'>
                            {user_name}
                        </strong>

                        <span>
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
                    </p>

                    <p className='date'>
                        {date}
                    </p>
                </div>
            </div>
        ) : (
            <p>ERRO</p>
        )
    )
}

export default Notification