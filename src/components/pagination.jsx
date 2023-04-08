function Pagination (props){
    const { total } = props;
    
    return(
        <footer className="text-center">
            <p className="m-0">{total ? total : "0/0"}</p>
            <button className="btn btn-outline-dark"><span className="fa-solid fa-chevron-left"></span></button>
            <button className="btn btn-outline-dark"><span className="fa-solid fa-chevron-right"></span></button>
        </footer>
    )
}

export default Pagination;