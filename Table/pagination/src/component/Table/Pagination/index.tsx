import _ from 'lodash';
import {returnPaginationrange} from '../../../utils/index';

type PaginationComponentProps = {
    totalPage:number;
    page:number;
    limit:number;
    siblings:number;
    onPageChange:()=>{};
}
const PaginationComponent = ({totalPage,page,limit,siblings,onPageChange}:PaginationComponentProps) => {    

    const pageNumberList = returnPaginationrange(totalPage,page,limit,siblings); 

    return (
        <div className="join">
            <button className={page === 1 ? " join-item btn btn-disabled":"join-item btn"} onClick={()=>onPageChange("&lsaquo;")}>&lsaquo;</button>
            {
                pageNumberList.map((value,index)=>{
                    return value===page ? (<button key={index} className="join-item btn btn-primary" onClick={()=>onPageChange(value)}>{value}</button>) : (
                        <button key={index} className="join-item btn" onClick={()=>onPageChange(value)}>{value}</button>
                    )
                })
            }
            <button className={totalPage === page ? " join-item btn btn-disabled":"join-item btn"} onClick={()=>onPageChange("&rsaquo;")}>&rsaquo;</button>
        </div>
    )
}
export default PaginationComponent