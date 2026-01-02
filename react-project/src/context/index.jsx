import { createContext, useState } from "react";


export const GlobalContext = createContext(null)

export default function GlobalState({ children }) {
    const [searchParam, setSearchParam] = useState('')
    const [recipeList, setRecipeList] = useState([])
    const [loading, setLoading] = useState(false)
    const [recipeDetails, setRecipeDetails] = useState(null)

    const apiUrl = 'https://forkify-api.herokuapp.com/api/v2/recipes'

    async function handleSubmit(e) {
        e.preventDefault()
        try {
            setLoading(true)
            const data = await (await fetch(`${apiUrl}?search=${searchParam}`)).json()
            if (data?.data?.recipes) {
                setRecipeList(data.data.recipes)
                setSearchParam('')
                setLoading(false)

            }
        } catch (e) {
            console.log(e)
            setLoading(false)
            setSearchParam('')
        }
    }

    console.log(recipeList, loading)
    return <GlobalContext.Provider value={{
        searchParam, loading, setSearchParam, handleSubmit,
        recipeList, recipeDetails, setRecipeDetails
    }}>
        {children}
    </GlobalContext.Provider>
}