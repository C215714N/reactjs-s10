import { DataList } from "./DataList";

function Pagination (props){
    const { total_count, count, offset } = props.pagination;
    const current = offset / count + 1 || 0,
        total = Math.ceil(total_count / count) || 0;
    const pageData = {
        current,
        total,
        ...props.pagination
    }
    return(
        <footer className="text-center">
            <DataList pagination={pageData}/>
            <button className="btn btn-outline-dark"><span className="fa-solid fa-chevron-left"></span></button>
            { current >= 3 ? <button className="btn btn-outline-dark">{current - 1}</button> : ""}
            <button className="btn btn-dark">
                { current }
            </button>
            { current ? <button className="btn btn-outline-dark">{current + 1}</button> : "" }
            <button className="btn btn-outline-dark"><span className="fa-solid fa-chevron-right"></span></button>
        </footer>
    )
}

export default Pagination;