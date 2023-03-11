import { Routes, Route } from 'react-router-dom';
import Table from './table';
import Card from './card';
import Section from './section';

const Router = (props) =>
<Routes>
    { ["users","todos"].map( path => 
    <Route path={path} element={
        <Section title={path + " table"} content={
            <Table data={props.data} className="table-responsive"/> 
    }/> }/> ) }
    { ["posts","albums"].map(path =>  
    <Route path={path} element={
        <Section title={path + " section"} className="d-flex flex-wrap justify-content-center" content={
            props.data.map((d,i) => <Card key={i} title={d["title"]} data={d} className="col-lg" />)
    }/> }/> ) }
    <Route path="/*/" element={
        <Section title="Error 404" content={`no se pudo acceder a esta pagina`}/>
    } />
</Routes>

export default Router