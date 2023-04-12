function Search(props){
    const {getData } = props;

    function getWord(word){
        const 
            API_KEY = "LanYkWCgNLIRDm6XZOZWnYH9yZHOProA",
            LIMIT = 10,
            OFFSET = 0,
            R = "r",
            LANG = "es",
            url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${word}&limit=${LIMIT}&offset=${OFFSET}&rating=${R}&lang=${LANG}`
        getData(url);
    }

    return(
        <header className="row p-3">
            <div className="form-floating col p-0">
                <input 
                    id="search" 
                    className="form-control" type="search" 
                    placeholder="Realice una Busqueda"
                    onInput={(e) => getWord(e.target.value)}/>
                <label className="px-4" htmlFor="search">Realice una Busqueda</label>
            </div>
            <button className="col-md-4 btn btn-outline-dark | d-flex align-items-center justify-content-center "> <span className="fs-3 fa-solid fa-magnifying-glass"></span>Buscar</button>
        </header>
    )
}

export default Search;