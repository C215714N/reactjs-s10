function Search(props){
    const {} = props;

    return(
        <header className="row p-3">
            <div className="form-floating col p-0">
                <input id="search" className="form-control" type="search" placeholder="Realice una Busqueda"/>
                <label className="px-4" htmlFor="search">Realice una Busqueda</label>
            </div>
            <button className="col-md-4 btn btn-outline-dark | d-flex align-items-center justify-content-center "> <span className="fs-3 fa-solid fa-magnifying-glass"></span>Buscar</button>
        </header>
    )
}

export default Search;