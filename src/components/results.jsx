function Results (props){
    const { data } = props;
    return(
        <main>
            <h2>{ data ? "Resultados" : "No se realizaron Busquedas"}</h2>
        </main>
    )
}
export default Results;