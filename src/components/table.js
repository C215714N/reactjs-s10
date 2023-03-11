import getHeadings from '../actions/heading';
import List from './list';

const Table = (props) => props.data == '' ? 
'No se consultaron Usuarios' :
<table className="table table-striped table-dark">
    <caption>usuarios</caption>
    <TableHead row={props.data[0]}/>
    <TableBody rows={props.data} />
</table>

const TableHead = (props) => {
const titles = getHeadings(props.row);
return (
<thead>
    <tr>
        { titles.map((th,i) => <th key={"th-" + i}>{th}</th>) }
    </tr>
</thead>
) }

const TableBody = (props) => {
    const data = props.rows;
    const titles = getHeadings(props.rows[0]);
    return(
        <tbody>
        { data.map((row,i) => <tr key={"row-" + i}>
            { titles.map((t,i) => typeof row[t] == 'object' ? 
                <td key={"td-" + i}><List data={row[t]}/></td> : 
                <td key={"td-" + i}>{ row[t] }</td>
            ) }
        </tr> ) }
        </tbody>
    )
}

export default Table;