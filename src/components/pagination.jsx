import { useActionContext, useResultContext } from "../actions/Context";
import { DataList } from "./DataList";

function Pagination (props){
    const handleState = useActionContext();
    const results = useResultContext();
    
    const { total_count, count, offset } = results.pagination;
    const 
        current = offset / count + 1 || 0,
        total = Math.ceil(total_count / count) || 0,
        pageData = {
        current,
        total,
        ...results.pagination
    }
    return(
        <footer className="text-center">
            <DataList pagination={pageData}/>
            <button className="btn btn-outline-dark"><span className="fa-solid fa-chevron-left" onClick={ ()=> handleState({action: "PREV"})}></span></button>
            <button className="btn btn-dark">
                { current }
            </button>
            <button className="btn btn-outline-dark"><span className="fa-solid fa-chevron-right" onClick={ ()=> handleState({action: "NEXT"})}></span></button>
        </footer>
    )
}

export default Pagination;