import React from 'react'
import UserContext, { AuthContext } from '../../context/UserContext'

export const Profile = () => {

    const { user } = UserContext(AuthContext);
  return (
    <div>Profile</div>
  )
}
