import React, { Fragment,useState } from 'react'
import Hello from './components/Hello'


const App = () => {
  const name = "Pro716"
  const numb = 5
  const color = "#C3B1E1"
  const [showContent, setShowContent] = useState(false)
  
  return (
    <Fragment>
      <button 
      onClick={()=>{setShowContent(!showContent)}} styles={{marginTop:16}}>
        show/hide
      </button>
      {showContent && <Hello color={color} />}
      <Hello color={color}/>
      <h1 style={{backgroundColor:"#F8C8DC"}}>{name}</h1>
      <h1>{numb}</h1>
    </Fragment>
  );
}

export default App