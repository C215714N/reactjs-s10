function Pagination (props){
    const { total_count, count, offset } = props.pagination;
    
    return(
        <footer className="text-center">
            <p className="m-0">{
                (offset / count + 1) + "/" + 
                Math.ceil(total_count / count)
            }
            </p>
            <button className="btn btn-outline-dark"><span className="fa-solid fa-chevron-left"></span></button>
            <button className="btn btn-outline-dark"><span className="fa-solid fa-chevron-right"></span></button>
        </footer>
    )
}

export default Pagination;