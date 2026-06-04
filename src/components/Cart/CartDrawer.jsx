import React from 'react'
import { FaXmark, FaTrash, FaMinus, FaPlus, FaBagShopping } from 'react-icons/fa6'
import { useCart } from '../../context/CartContext'

const CartDrawer = ({ open, onClose }) => {
  const { cartItems, removeFromCart, updateQty, totalItems, totalPrice } = useCart();

  return (
    <>
      <div
        onClick={onClose}
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      />
      <div className={`fixed top-0 right-0 h-full w-full max-w-[380px] z-[70]
        bg-white dark:bg-gray-900 dark:text-white shadow-2xl flex flex-col
        transition-transform duration-300 ease-in-out
        ${open ? 'translate-x-0' : 'translate-x-full'}`}>

        <div className="flex items-center justify-between p-5 border-b border-gray-100 dark:border-gray-800">
          <div className="flex items-center gap-2">
            <FaBagShopping className="text-primary text-xl" />
            <h2 className="text-xl font-bold font-display">Your Cart</h2>
            {totalItems > 0 && (
              <span className="bg-primary text-white text-xs font-bold rounded-full px-2 py-0.5">{totalItems}</span>
            )}
          </div>
          <button onClick={onClose} className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <FaXmark className="text-gray-500 dark:text-gray-400" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-gray-400">
              <FaBagShopping className="text-6xl opacity-20" />
              <p className="text-center font-medium">Your cart is empty.<br />Add some delicious food!</p>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="flex items-center gap-3 bg-gray-50 dark:bg-gray-800 rounded-2xl p-3">
                <img src={item.img} alt={item.name} className="w-16 h-16 rounded-xl object-cover shrink-0" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-sm truncate">{item.name}</h3>
                  <p className="text-primary font-bold text-sm">₹{item.price}</p>
                  <div className="flex items-center gap-2 mt-1.5">
                    <button onClick={() => updateQty(item.id, -1)} className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary hover:text-white transition-colors">
                      <FaMinus className="text-[10px]" />
                    </button>
                    <span className="text-sm font-bold w-4 text-center">{item.qty}</span>
                    <button onClick={() => updateQty(item.id, 1)} className="w-6 h-6 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-primary hover:text-white transition-colors">
                      <FaPlus className="text-[10px]" />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2 shrink-0">
                  <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600 transition-colors">
                    <FaTrash className="text-sm" />
                  </button>
                  <p className="text-sm font-bold text-gray-700 dark:text-gray-300">₹{item.price * item.qty}</p>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-5 border-t border-gray-100 dark:border-gray-800 space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-500 dark:text-gray-400 font-medium">Total</span>
              <span className="text-xl font-bold font-display">₹{totalPrice}</span>
            </div>
            <button className="w-full bg-gradient-to-r from-primary to-secondary text-white font-bold py-3.5 rounded-2xl hover:scale-[1.02] hover:shadow-lg transition-all duration-200">
              Proceed to Checkout →
            </button>
            <button onClick={onClose} className="w-full text-center text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;