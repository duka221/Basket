import React, { useState,useEffect} from "react";
import Home from "./home";
import Carditems from "./cardItems";
function Items() {
    const[saveitem,setSaveItem]=useState([])
    const[cardsave,setCardSave]=useState([])
    const[kaka,setKaka]=useState(false)
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(
            res=>res.json()
        )
        .then(json=>setSaveItem(json))
    }, [])
    return (
        <div>
            <button onClick={()=>setKaka(!kaka)}> {kaka ? "პროდუქტების გვერდი":"კალათაში გადასვლა"} </button>
            <>
            {kaka ?cardsave && cardsave.map((e)=>
                <Carditems object={e}  setCardSave={setCardSave} cardsave={cardsave}/>
            ): saveitem && saveitem.map((e)=>
                <Home object={e} setSaveItem={setSaveItem} setCardSave={setCardSave}/>
            )}
            </>
        </div>
    )
}

export default Items