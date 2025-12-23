import useFetch from ".";


export default function TestUseFetch() {
    const { data, error, loading } = useFetch(
        'https://dummyjson.com/products',
        {}
    )

    console.log(data, error, loading)

    return <>
        <h1>Use Fetch Hook</h1>
        <div>
            {
                loading ? <div>Data loading please wait</div> : null
            }
            {
                error ? <h3>{error}</h3> : null
            }
            {
                data && data.products && data.products.length ?
                data.products.map((dataItem, index) => {
                    return <p key={index}>{dataItem.title}</p>
                })
                : null
            }
        </div>
    </>
}