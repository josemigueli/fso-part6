import { useNotificationValue } from '../NotificationContext'

const Notification = () => {
  const notification = useNotificationValue()
  // const notification = 'Hello world'

  if (!notification) {
    return null
  }

  return (
    <div className='notification-container'>
      <div className='noti-sub-con'>
        <p>{notification}</p>
      </div>
    </div>
  )
}

export default Notification
