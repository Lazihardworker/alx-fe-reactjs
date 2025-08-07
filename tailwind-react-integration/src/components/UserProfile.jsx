import React from 'react';
import userImage from '../assets/user.jpg'; 

const UserProfile = () => {
  return (
    <div className="bg-white rounded-lg shadow-md max-w-xs md:max-w-sm mx-auto p-4 md:p-8 sm:p-4">
      <img
        src={userImage}
        alt="User"
        className="w-24 md:w-32 mx-auto rounded-full mb-4"
      />
      <h2 className="text-xl md:text-2xl font-semibold text-center">Sulaiman Solih</h2>
      <p className="text-gray-600 text-sm md:text-base text-center">
        Customer Experience Analyst | Tech Enthusiast | Virtual Assistant
      </p>
    </div>
  );
};
export default UserProfile;
