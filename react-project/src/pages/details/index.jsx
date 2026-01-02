import { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { GlobalContext } from "../../context"


export default function Details({ }) {
    const {id} = useParams()
    const {recipeDetails, setRecipeDetails} = useContext(GlobalContext)

    const apiUrl = 'https://forkify-api.herokuapp.com/api/v2/recipes'
    console.log(id)

    async function getRecipeDetails(){
            try{
                const data = await (await fetch(`${apiUrl}/${id}`)).json()
                console.log(data)

                if (data?.data){
                    setRecipeDetails(data.data)
                    console.log(recipeDetails)
                }
            } catch(e){
                console.log(e)
            }
        }

    useEffect(() => {
        getRecipeDetails()
    }, [])
    return <>
        <div>Details</div>
    </>
}