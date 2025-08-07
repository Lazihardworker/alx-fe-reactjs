import React from 'react';
import profileImage from '../assets/profile.jpg';

const UserProfile = () => {
  return (
    <div className="max-w-xs md:max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:p-8 sm:p-4 p-2 transition-shadow duration-300 ease-in-out hover:shadow-xl">
      <img
        src={profileImage}
        alt="User"
        className="w-20 h-20 sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full mx-auto mb-4 object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
      />
      <h2 className="text-lg md:text-xl font-semibold text-gray-800 text-center transition-colors duration-300 ease-in-out hover:text-blue-500">
        Sulaiman Solih
      </h2>
      <p className="text-sm md:text-base text-gray-600 text-center mt-2">
        Customer Experience Analyst | Digital Tools Enthusiast
      </p>
    </div>
  );
};

export default UserProfile;
