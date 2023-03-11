function Result (props){
    const { data } = props.data
    return(
        <section className="row gap-2 | p-3"> { data ? 
        data.map( (data, i) => 
        <div key={"result-" + i} className="card col">
            <video className="card-img-top" src={data.images.fixed_height_small.url } alt={data.title} />
            <h3 className="card-title">{data.username}</h3>
            <p className="card-text">{data.title}</p>
        </div>)
        : null 
        } </section>
)}
export default Result;