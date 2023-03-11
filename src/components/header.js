function Header(props){
    const { action, appName } = props
    const key = "LanYkWCgNLIRDm6XZOZWnYH9yZHOProA",
    limit = 20,
    offset = 0,
    rating = "g",
    lang = "es";

    return(
        <header className="vh-100 | d-grid justify-content-center align-content-center | text-light bg-dark bg-gradient">
            <h1 className="h1">Bienvenido a {appName}</h1>
            <input className="form-control" type="search" onInput={ (e) => action(`https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${e.target.value}&limit=${limit}&offset=${offset}&rating=${rating}&lang=${lang}`)}/>
        </header>
    )
}

export default Header;