// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

import './index.css'

const LogoutButton = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="logout-button-container">
      <button onClick={onClickLogout} type="button">
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
