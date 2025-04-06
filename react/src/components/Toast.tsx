import React from 'react';
import { X } from 'lucide-react';

type NotificationType = "success" | "error" | "warning" | "info";

interface NotificationProps {
  message: string;
  type?: NotificationType;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, type = "success", onClose }) => {
  const typeStyles: Record<NotificationType, string> = {
    success: "bg-green-100 text-green-800 border-green-300",
    error: "bg-red-100 text-red-800 border-red-300",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
    info: "bg-blue-100 text-blue-800 border-blue-300",
  };

  return (
    <div className="fixed bottom-4 right-4 z-[9999]">
      <div className={`flex items-center justify-between w-full max-w-sm p-4 mb-4 text-sm border rounded-lg shadow ${typeStyles[type]} animate-fade-in-down`}>
        <span>{message}</span>
        <button onClick={onClose} className="ml-2 text-gray-500 hover:text-gray-700">
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default Notification;