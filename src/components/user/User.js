import React from 'react'
// import Image from '../../atoms/Image'
import UserPic from '../../atoms/Image'

const User = ({ user }) => {
     const {name, profile_pic, status }= user;
     return (
          <div>
               <UserPic src={profile_pic} alt={name} />
               <div>
                    <p>{name}</p>
                    <p>{status}</p>
               </div>
          </div>
     )
}

export default User
