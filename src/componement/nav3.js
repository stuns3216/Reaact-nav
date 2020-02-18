import React from 'react'
function nav(props){
    return(

        <div>{props.marwen.map(el=><li>{el.name}</li> )}
        
         </div>
    )
}
export default nav;