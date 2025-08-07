import React from "react";

const UserProfile = () => {
  return (
    <div className="p-2 sm:p-4 md:p-8 bg-white rounded-lg shadow-md">
      <div className="flex flex-col items-center md:flex-row">
        <img
          src="/src/assets/profile.jpg"
          alt="User"
          className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full object-cover mb-4 md:mb-0 md:mr-6"
        />
        <div className="text-center md:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
            Sulaiman Solih
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2">
            Tech-savvy Customer Experience Analyst and aspiring Virtual Assistant Lead with 4+ years in client support and digital tools.
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

