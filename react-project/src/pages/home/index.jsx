import { useContext } from "react"
import { GlobalContext } from "../../context"
import RecipeItem from "../../components/recipe-item"


export default function Home({ }) {
    const { loading, recipeList } = useContext(GlobalContext)
    if (loading){
        return <div>Recipe loading please wait</div>
    }
    return <>
        <div className="flex justify-center gap-10 flex-wrap py-8 container mx-auto">
            {
                recipeList && recipeList.length ?
                    recipeList.map((item, index) => {
                        return <RecipeItem item={item} key={index} />
                    })
                    : <p className="lg:text-4xl text-1xl font-bold text-center text-red">
                        Nothing to show, please search an item
                    </p>
            }
        </div>
    </>
}