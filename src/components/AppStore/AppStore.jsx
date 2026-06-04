import React from 'react'
import AppStoreImg from "../../assets/AppStore.jpg"
import PlayStoreImg from "../../assets/PlayStore.jpg"
import deliverygif from "../../assets/deliverygif.gif"

const AppStore = () => {
  return (
    <div className="py-14 bg-white dark:bg-gray-950 transition-colors duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-10">

          <div className="space-y-5 max-w-xl mx-auto text-center sm:text-left">
            <p className="text-sm font-semibold tracking-widest text-primary uppercase">Get the App</p>
            <h1 className="text-3xl sm:text-4xl font-bold font-display text-gray-800 dark:text-white leading-snug">
              Order food anywhere, anytime from your phone
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              Download the Foodie app for exclusive deals, real-time order tracking, and a smoother experience — on Android and iOS.
            </p>
            <div className="flex gap-4 flex-wrap justify-center sm:justify-start items-center">
              <a href="#" className="hover:scale-105 transition-transform duration-200 block">
                <img src={PlayStoreImg} alt="Google Play" className="h-[50px] rounded-xl shadow-md object-contain" />
              </a>
              <a href="#" className="hover:scale-105 transition-transform duration-200 block">
                <img src={AppStoreImg} alt="App Store" className="h-[50px] rounded-xl shadow-md object-contain" />
              </a>
            </div>
            <div className="flex gap-6 justify-center sm:justify-start pt-2">
              {[['4.9★', 'App Rating'], ['50k+', 'Downloads'], ['Free', 'Always']].map(([val, label]) => (
                <div key={label} className="text-center">
                  <p className="text-lg font-bold font-display text-primary">{val}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center">
            <img src={deliverygif} alt="Delivery animation" className="max-w-[280px] sm:max-w-[320px] mx-auto drop-shadow-2xl" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default AppStore;