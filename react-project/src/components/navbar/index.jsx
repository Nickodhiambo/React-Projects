import { NavLink } from "react-router-dom";


export default function NavBar() {
    return <>
        <nav className="flex flex-col justify-between items-center py-8">
            <h2 className="text-2xl font-bold">
                <NavLink to={'/'}>
                    Food Recipe
                </NavLink>
            </h2>
            <form>
                <input
                    name='search'
                    type='text'
                    placeholder="Enter a food name"
                    className="bg-white py-6 px-8 rounded-full outline-none"
                />
            </form>
            <ul>
                <li>
                    <NavLink to={'/'} className="text-black hover:text-blue-600 duration-300">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={'/favorites'} className='text-black hover:text-blue-600 duration-300'>
                        favorites
                    </NavLink>
                </li>
            </ul>
        </nav>
    </>
}