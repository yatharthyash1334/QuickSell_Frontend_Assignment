import React from 'react';
import './usericon.css';

// You could optionally define types for clarity
interface UserIconProps {
  name: string;
  available: boolean;
}

const UserIcon: React.FC<UserIconProps> = ({ name, available }) => {
  const text = React.useMemo(() => {
    return name.split(" ").map((item: string) => item[0]).join("");
  }, [name]);

  return (
    <div className='usericon-container' aria-label={`User icon for ${name}`}>
      <div className='usericon-text'>{text}</div>
      <div 
        className={`user-status ${available ? 'available' : ''}`} 
        aria-label={available ? "User is available" : "User is unavailable"}
        title={available ? "Available" : "Unavailable"}
      ></div>
    </div>
  );
}

export default UserIcon;
