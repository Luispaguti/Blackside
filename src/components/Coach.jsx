import React from 'react'
import { coach1 } from '../assets'

const Coach = () => (
  <div className="max-w-sm rounded overflow-hidde shadow-lg shadow-dimGrey px-3">
  <img className="w-full" src={coach1} alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="text-white font-bold text-xl mb-2">The Coldest Sunset</div>
    <p className="text-white text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
  )


export default Coach