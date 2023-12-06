import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200">
                    {/* Sidebar content here */}
                   <Link to="about">
                   <li><a>Sidebar Item 1</a></li>
                   </Link>
                    <li><a>Sidebar Item 2</a></li>
                </ul>
            </div>
        </>
    );
};

export default Sidebar;