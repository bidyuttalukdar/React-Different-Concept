import { useState,useEffect } from 'react'
import PaginationComponent from './component/Table/Pagination/index';
import SelectLimitComponent from './component/Table/SelectLimit/index';

type Pagination = {
    data1: Array<Object>
}

function App({ data1 }: Pagination) {
  const [data,setData]=useState([])
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [totalPage, setTotalPage] = useState<Number>();
    const siblings = 1;

    // page=1 & limit=5  0-4 (page-1)*limit -  (page*limit)-1
    //page=2 & limit=10 5-9

    useEffect(()=>{
        const resultArray = []
        for (let i = (page - 1) * limit; i < page * limit && data1[i]; i++) {
            resultArray.push(data1[i])
        }
        setData(resultArray)
        const numberOfPages = Math.ceil(data1?.length / limit)
        setTotalPage(numberOfPages)
    },[limit,page])
    
    useEffect(()=>{
        setPage(1)
    },[limit])



    const handlePageChange = (value: string | number) => {
        if (value === '&laquo;' || value === "... ") {
            console.log("1 if")
            setPage(1)
        } else if (value === '&lsaquo;') {
            console.log("2 if")

            if (page != 1) {
                setPage(page - 1)
            }
        } else if (value === '&rsaquo;') {
            console.log("3 if")
            if (page < totalPage - 2) {
                setPage(page + 1)
            }
        } else if (value === '&raquo;' || value === " ...") {
            console.log("4 if")
            if(page < totalPage - 2){
                setPage(totalPage-1)
            }
        } else {
            console.log("5 if")

            setPage(Number(value))
        }
    }


    return (
        <>
            <div className="flex flex-col">
                <div>
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                data.map(({ ID, NAME, EMAIL }) => (
                                    <tr>
                                        <td>{ID}</td>
                                        <td>{NAME}</td>
                                        <td>{EMAIL}</td>
                                    </tr>
                                ))
                            }

                        </tbody>
                    </table>
                </div>
                <div className="flex flex-row">
                    <div>
                    <PaginationComponent totalPage={totalPage} page={page} limit={limit} siblings={siblings} onPageChange={handlePageChange} />
                    </div>
                    <div>
                        <SelectLimitComponent setLimit={setLimit} limit={limit}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
