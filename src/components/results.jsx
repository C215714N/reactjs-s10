import { Card } from './Card';

function Results (props){
    const { data } = props;
    return(
        <main>
            <h2>{ data.length > 1 ? 
                "Resultados" : 
                "No se realizaron Busquedas"}</h2>
            <div className="d-flex flex-wrap gap-2">
            { data.map( (item,i) => <Card key={i} data={item} /> )}
            </div>
        </main>
    )
}
export default Results;