import React, { useState } from 'react';
import { Lock, X, Eye, EyeOff } from 'lucide-react'; // Importing icons from lucide-react
import { getFromLocalStorage, putToLocalStorage } from '@/utils/LocalStorageHandler';

const ChangePasswordModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const [error, setError] = useState(''); // State to hold error messages

  const [inputStatus, setInputStatus] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false,
  });


   const handleSubmit = () => {
    setError(''); // Clear error message if all fields are filled

    if(!oldPassword || !newPassword || !confirmPassword) {
        setError('All fields are required');
        return;
    }else if(oldPassword !== getFromLocalStorage()) {
        setError('Old password is incorrect');
        return;
    }else if (newPassword !== confirmPassword) {
        setError('New password and confirm password do not match');
        return;
    } else {
        putToLocalStorage(newPassword); // Store the password in local storage
        setIsModalOpen(false); // Close the modal
        setOldPassword(''); // Clear the old password field
        setNewPassword(''); // Clear the new password field
        setConfirmPassword(''); // Clear the confirm password field
        setInputStatus({ oldPassword: false, newPassword: false, confirmPassword: false }); // Reset input status   
    }
  };

  return (
    <div>
      {/* Icon to open the modal */}
      <div
        onClick={() => setIsModalOpen(true)}
        className="absolute top-4 right-4 p-2 cursor-pointer bg-gray-200 rounded-full z-[9999]"
      >
        <Lock size={24} className="text-gray-800" />
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 z-[9999]"
            onClick={() => setIsModalOpen(false)} // Close the modal on overlay click
          ></div>

          {/* Modal Content */}
          <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg w-96 z-50 z-[9999]">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold">Change Password</h2>
              <button onClick={() => setIsModalOpen(false)} className="text-gray-600 hover:text-gray-800">
                <X size={20} />
              </button>
            </div>

            <form>
              {/* Old Password Field with Toggle */}
              <div className="mb-4 relative">
                <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700">Old Password</label>
                <input
                  type={inputStatus.oldPassword ? 'text' : 'password'}
                  id="oldPassword"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-1 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setInputStatus({ ...inputStatus, oldPassword: !inputStatus.oldPassword })}
                  className="absolute right-2 inset-y-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {inputStatus.oldPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* New Password Field with Toggle */}
              <div className="mb-4 relative">
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">New Password</label>
                <input
                  type={inputStatus.newPassword ? 'text' : 'password'}
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-1 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setInputStatus({ ...inputStatus, newPassword: !inputStatus.newPassword })}
                  className="absolute right-2 inset-y-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {inputStatus.newPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {/* Confirm Password Field with Toggle */}
              <div className="mb-4 relative">
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                  type={inputStatus.confirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded mt-1 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setInputStatus({...inputStatus, confirmPassword: !inputStatus.confirmPassword})}
                  className="absolute right-2 inset-y-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {inputStatus.confirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {error && (
                <div className="mb-4 text-red-500 text-sm">{error}</div> // Display error message if any
              )}

              {/* Submit Button */}

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="bg-blue-500 text-white py-2 px-4 rounded"
                >
                  Change Password
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default ChangePasswordModal;
