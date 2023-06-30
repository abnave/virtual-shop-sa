import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between bg-orange-300 shadow-lg">
      <div className="logo-container">
        <img className="h-28 p-2" src="" alt="logo"></img>
      </div>
      <div>
        <ul className="flex py-2">
          <li className="p-2 m-2 px-2 text-lg font-bold">Welcome</li>
          <li className="px-2"></li>
        </ul>
      </div>
    </div>
  )
}

export default Header