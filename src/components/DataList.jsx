export const DataList = ({pagination}) => 
<ul className="list-group list-group-flush">
    { Object.keys(pagination).map( (key,i) =>
        <li key={i} className="list-group-item">
            <strong>{key.replaceAll("_", " ")} </strong>
            <span className="badge bg-dark"> {pagination[key]}</span>
        </li>
    )}
</ul>