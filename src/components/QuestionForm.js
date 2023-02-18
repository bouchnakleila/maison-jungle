import {useState} from 'react'

export default ()=>{

    const [inputValue, setInputValue] = useState("Posez votre question ici")
    return(
<form>
    <input type='text' name='my_input'
     value={inputValue} 
     onChange={(e)=>setInputValue(e.target.value)} />
    <button type='submit' onClick={()=>alert(inputValue)}>Alertez moi!</button>
</form>


)
}
