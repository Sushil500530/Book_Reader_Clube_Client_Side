/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const ManuList = ({ address, icon: Icon, linkTitle }) => {
  return (
    <div className=" group relative">
      <NavLink
        to={address}
        className={({ isActive }) =>
          ` flex items-center text-base font-medium px-4 py-2 duration-200 transform hover:text-blue-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100 ${isActive ? ' border-b-[3px] w-auto border-b-fuchsia-500 ' : ''
          }`} >
        <span>{<Icon className="w-5 h-8 mr-1 " />}</span>
        {linkTitle}
      </NavLink>
    </div>
  );
};

export default ManuList;