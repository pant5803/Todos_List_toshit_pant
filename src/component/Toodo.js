import React,{useState} from 'react'
import "./style.css"

const Toodo = () => {
    const [inputdata,setinputdata] = useState("");
    const [items,setitems] = useState([]);
    function additem() {
        if(!inputdata){
            alert("please fill the data");
        }
        else{
            setitems([...items,inputdata]);
            // now empty the input box
            setinputdata("");
        }
    }


    function nitem(val,index){
        return(
            <>
                <div className="output-container" key={index}>
                <div className="display-text" id="additem">{val}</div>
                <button className="output-submit-button" onClick={()=>edititem(val)}><i className = "fas fa-edit ico1"></i></button>
                <button className="output-submit-button" onClick={()=>deleteitem(val)}><i className = "fa fa-trash ico2" aria-hidden="true"></i></button> 
                </div>
            </>
        )
    }
    // delete item section 
    const deleteitem = (value) => {
        const updateditems = items.filter((current)=>{
            return current != value;
        }
        )
        setitems(updateditems);
    }
    // edit item section
    const edititem = (value)=>{
        deleteitem(value);
        setinputdata(value);
    }
    // remove all the todos section
    const removeall=()=>{
        setitems([]);
    }
    
    return (
        
        <>
            <div className="container">
                <img className="logo" src="https://tse4.mm.bing.net/th?id=OIP.bf_Um5shxy9Snj8HbRR0ZAHaHa&pid=Api&P=0&h=180" alt="Logo" />
                <div className="message">Add your List here</div>
                <div className="input-container">
                    <input className="user-input" type="text" placeholder="✍️ Write something" id="inputField" value={inputdata} onChange={(event)=>setinputdata(event.target.value)} />
                    <button className="submit-button" onClick={additem}>➕</button>
                </div>
                {/* display all todos */}
                

                {items.map(nitem)}
                
                {/* checklist will delete all todos */}
                <button className="checkout-button" onClick={removeall}>Check List</button>
            </div>
        </>
    )
}

export default Toodo
