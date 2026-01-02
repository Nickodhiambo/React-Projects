import { Link } from "react-router-dom";


export default function RecipeItem({ item }) {

    return <>
        <div className="flex flex-col gap-5 w-80 p-5 pverflow-hidden shadow-xl rounded-2xl border-white border-2 bg-white">
            <div className="h-40 flex justify-center items-center rounded-xl overflow-hidden" >
                <img src={item?.image_url} alt={item?.title} className="w-full" />
            </div>
            <div>
                <span className="text-sm text-cyan-700 font-medium">{item?.publisher}</span>
                <h3 className="text-2xl text-black font-bold mb-5 truncate">{item?.title}</h3>
                <Link to={`/recipe-item/${item?.id}`}
                    className="text-sm bg-black p-3 px-8 mt-5 rounded-lg text-white font-medium tracking-wider h-15"
                >Recipe Details</Link>
            </div>
        </div>
    </>
}