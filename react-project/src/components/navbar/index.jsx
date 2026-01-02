import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";


export default function NavBar() {

    const {searchParam, setSearchParam, handleSubmit} = useContext(GlobalContext)
    console.log(searchParam)

    return <>
        <nav className="flex justify-between items-center py-8">
            <h2 className="text-2xl font-bold">
                <NavLink to={'/'}>
                    Food Recipe
                </NavLink>
            </h2>
            <form onSubmit={handleSubmit}>
                <input
                    name='search'
                    value={searchParam}
                    onChange={(e) => setSearchParam(e.target.value)}
                    type='text'
                    placeholder="Enter a food name"
                    className="bg-white py-6 px-8 rounded-full outline-none"
                />
            </form>
            <ul className="flex gap-5">
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