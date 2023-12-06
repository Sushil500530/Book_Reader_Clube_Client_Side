import { Link } from "react-router-dom";

const NavLinkManu = () => {
    return (
        <>
            <div className="flex-none hidden lg:block text-white">
                <ul className="menu menu-horizontal">
                    {/* Navbar menu content here */}
                    <Link to="about">
                        <li><a>Navbar Item 1</a></li>
                    </Link>
                    <li><a>Navbar Item 2</a></li>
                </ul>
            </div>
        </>
    );
};

export default NavLinkManu;