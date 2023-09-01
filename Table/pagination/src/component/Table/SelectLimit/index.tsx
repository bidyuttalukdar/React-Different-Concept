type SelectLimitComponentProps = {
    limit:number,
    setLimit : ()=>{}
}

const SelectLimitComponent = ({ setLimit, limit }:SelectLimitComponentProps) => {
    const limitArray = [5, 10, 15, 20, 25]
    return (
        <>
            <select className="select select-bordered max-w-xs" onChange={(e)=>setLimit(e.target.value)}>
                {
                    limitArray.map((value, index) => {
                        return value == limit ? (<option  key={index} value={value} selected>{value}</option>) : (<option value={value} key={index}>{value}</option>)
                    })
                }
            </select>
        </>
    )
}

export default SelectLimitComponent;