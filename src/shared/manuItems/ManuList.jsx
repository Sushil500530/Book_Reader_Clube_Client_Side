/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const ManuList = ({ address, icon: Icon, linkTitle }) => {
  return (
    <NavLink
      to={address}
      className={({ isActive }) =>
        ` flex items-center text-[18px] font-medium px-4 py-2  duration-200 transform hover:text-blue-500 rounded hover:-translate-y-[2px] transition-all ease-in hover:scale-100  ${isActive ? ' border-b-2  border-b-fuchsia-500 text-blue-500' : 'text-white'
        }`} >
      <span>{<Icon className="w-5 h-8 mr-1 text-white" />}</span>
        {linkTitle}
    </NavLink>
  );
};

export default ManuList;