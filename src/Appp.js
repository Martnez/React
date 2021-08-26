
import React,{Component} from 'react'
import "./App.css"
import Mynav from "./components/navbar"
 class App extends Component {
  
  render(){
    return(
     <div className="container">
       <div className="flex-item flex-item1">
           <Mynav/>
       </div>
       <div className="flex-item flex-item2">
       </div>
       <div className="flex-item flex-item3">
       </div>
     </div>
    )
  }
}

export default App;
