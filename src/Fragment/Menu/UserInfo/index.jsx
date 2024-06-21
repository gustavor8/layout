import './style.css';

function UserInfo({ userName }) {
  return (
    <div className="user-info">
      <div className="user-avatar">
        <svg width="60" height="60">
          <circle cx="30" cy="30" r="30" className="svg-circle">
          </circle>
        </svg>
      </div>
      <span className="user-name">{userName}</span>
    </div>
  )
}

export default UserInfo;