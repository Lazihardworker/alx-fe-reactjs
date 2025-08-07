import React from 'react';
import profileImage from '../assets/profile.jpg'; // Make sure this image exists
// If you're using another image path, update accordingly

const UserProfile = () => {
  return (
    <div className="max-w-xs md:max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:p-8 sm:p-4 p-2">
      <img
        src={profileImage}
        alt="User"
        className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-4 object-cover"
      />
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 text-center">Sulaiman Solih</h2>
      <p className="text-sm md:text-base text-gray-600 text-center mt-2">
        Customer Experience Analyst | Digital Tools Enthusiast
      </p>
    </div>
  );
};

export default UserProfile;
