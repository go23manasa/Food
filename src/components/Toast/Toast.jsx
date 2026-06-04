import React from 'react'
import { useCart } from '../../context/CartContext'
import { FaCheckCircle } from 'react-icons/fa'

const Toast = () => {
  const { toastMsg, toastExit } = useCart();
  if (!toastMsg) return null;

  return (
    <div className={`fixed bottom-6 right-6 z-[100] flex items-center gap-3
      bg-gray-900 dark:bg-white text-white dark:text-gray-900
      px-5 py-3 rounded-2xl shadow-2xl
      ${toastExit ? 'toast-exit' : 'toast-enter'}`}>
      <FaCheckCircle className="text-primary text-xl shrink-0" />
      <span className="text-sm font-medium">{toastMsg}</span>
    </div>
  );
};

export default Toast;