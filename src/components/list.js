import getHeadings from '../actions/heading';

function List(props){
    const { data } = props;
    const titles = getHeadings(data);
    return (
    <ul>
        { titles.map( (t,i) => <li key={"item-" + i}>
            <strong>{t}:</strong> { typeof data[t] == 'object' ? 
            <List data={data[t]}/> : data[t] }
        </li> ) }
    </ul>
) }

export default List;