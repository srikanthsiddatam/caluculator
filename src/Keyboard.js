const Keyboard = ({handleclick,clear,cal}) => {
    // const {handleclick}=props
    return(
        <>
        <div className="keyboard">

            <div className="row">
                <button  className="digit" onClick={()=>{
                    handleclick("7")
                }}>7</button >
                <button  className="digit" onClick={()=>{
                    handleclick("8")
                }}>8</button >
                <button  className="digit" onClick={()=>{
                    handleclick("9")
                }}>9</button >
                <button  className="operator" onClick={()=>{
                    handleclick("/")
                }}>/</button >

            </div>
            <div className="row">
                <button  className="digit" onClick={()=>{
                    handleclick("4")
                }}>4</button >
                <button  className="digit" onClick={()=>{
                    handleclick("5")
                }}>5</button >
                <button  className="digit" onClick={()=>{
                    handleclick("6")
                }}>6</button >
                <button  className="operator" onClick={()=>{
                    handleclick("*")
                }}>*</button >

            </div>
            <div className="row">
                <button  className="digit" onClick={()=>{
                    handleclick("1")
                }}>1</button >
                <button  className="digit" onClick={()=>{
                    handleclick("2")
                }}>2</button >
                <button  className="digit" onClick={()=>{
                    handleclick("3")
                }}>3</button >
                <button  className="operator" onClick={()=>
                {
                    handleclick("-")
                }}>-</button >

            </div>
            <div className="row">
                <button  className="operator" onClick={()=>{
                    handleclick("0")}}>0</button >
                <button  className="fun-key" onClick={()=>{
                    cal()

                }}>=</button >
                <button  className="fun-key" onClick={()=>{
                    clear("")
                }}>c</button >
                <button  className="operator" onClick={()=>{
                    handleclick("+")
                }}>+</button >

            </div>
        </div>
        
        </>
    )
}
export default Keyboard