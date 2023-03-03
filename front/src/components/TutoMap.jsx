import React from "react"

const TutoMap = () => {
    const array = [1,2,3,4,5]
    const array2 = [{id:1},{id:2},{id:3},{id:4},{id:5}]
    const myData = {
        result:[1,2,3,4,5]
    }
    
    
    return (
        <div>
        
            {myData.result.map((result, index) => {
                return(
                    <p key={index}>{result}</p>
                )
            })}
        
        
            {array2.map((data,index) => {
                return(
                    <p key={index}>{data.id}</p>
                )
            })}
        
        
            {array.map((num,index) => {
                return (
                    <React.Fragment key={index}>
                        <div>
                            <p>{num}</p>
                        </div>
                        <div>
                            <p>{num}</p>
                        </div>
                    </React.Fragment>
                )
            })}
        </div>
    )
}

export default TutoMap