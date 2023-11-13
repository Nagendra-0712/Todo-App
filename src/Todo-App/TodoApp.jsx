import React, { Fragment, useState } from 'react'

const TodoApp = () => {
    let [inputvalue,setinputvalue]=useState("");
    let[listitems,setlistitems]=useState([])
    let[editindex,seteditindex]=useState(null)

    let handlechange=(e)=>{
        setinputvalue(e.target.value);

    }
    let handlesubmit=(e)=>{
        e.preventDefault();
        console.log(inputvalue)
    }
    let handleadd=()=>{
        if(inputvalue!=="")
        {
            if(editindex!==null){
                listitems[editindex]=inputvalue;
                seteditindex(null)
            }
            else{
                setlistitems([...listitems,inputvalue])
            }
           setinputvalue("")
        }
    }
    let handledelete=(id)=>{
        let newlist=listitems.filter((val,index)=>{
            return index!==id
        })
        setlistitems(newlist)

    }
   let handleedit=(id)=>{
    setinputvalue(listitems[id])
    seteditindex(id);

   }
    
  return (
    
    <>
    <body className='container-fluid'>
    <h1>TO-DO-APP</h1>
    <form onSubmit={handlesubmit} autoComplete='off'>
        <input type='text' name='inputvalue' id='inputvalue' value={inputvalue} onChange={handlechange}/>&nbsp;&nbsp;
         
        <button onClick={handleadd} id='additems'>{editindex!==null?"Update items":"Add items"}</button>
    </form>
    
    <section>
       {listitems.map((val,index)=>{
        return(
            <Fragment key={index}>
                <h3>{val}</h3>
               
                <button onClick={()=>handleedit(index)} id='edit'>Edit</button>
                &nbsp;&nbsp;
                <button onClick={()=>handledelete(index)} id='delete'>Delete</button>
                

            </Fragment>
        )
       })}
    
    </section>
    
    <button onClick={()=>setlistitems([])} id='clear'>Clear all</button>
    </body>
    </>
   
  )
 
}

export default TodoApp