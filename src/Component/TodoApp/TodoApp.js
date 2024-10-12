import React, { Component } from 'react'
import "../TodoApp.css"


export default class TodoApp extends Component {
   state ={
    input: "",
    items:[]
   }


    handleChange = event =>{
        this.setState({
            input:event.target.value

        })
        
    };

    storeItems = event => {
        event.preventDefault();    // page refresh avumboo text store avatha issue avoid eyyam
    const {input} = this.state;
   

    this.setState({
        items:[...this.state.items,input]  , //spread operator ... which means direct kodukand oru reference allengil oru copy kodukunna method,idh array de ullil store aavum
     input :""    // onece enter akki kazinjalu clear ayitt "Enter Another Text"  nu kanikanam
    })
};
deleteItem = key => {
    const allItems = this.state.items;

    allItems.splice(key,1)                 //splice use cheytat anh delet cheyya ,splice(key,1) nu paranjal ipo olla key value plus 1 which means oron vech delete ayyii poyikolum

    this.setState({
        items:allItems
    })
}
    
  render() {

    const {input,items} =this.state
    console.log(items);
    return (
      <div className='todo-container'>
       

        <form className='input-section' onSubmit={this.storeItems}>
        <h1>Todo App</h1>
            <input type='text' value={input} onChange={this.handleChange}  placeholder='Enter Items...'/>
            
        </form>

        <ul>
              {items.map((data,index) => (                        //enter eyyunadh display aavn key nu parayunna value kodutthittu
                <li key={index}>
                    {data}<i className="fa-solid fa-trash" onClick={() => this.deleteItem(index)}></i>

                </li>
              ))}
              
              
        </ul>
        </div>
    )
  }
}
