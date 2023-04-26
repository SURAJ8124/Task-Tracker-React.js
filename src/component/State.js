import React from 'react'

class State extends React.Component
{
    constructor()
    {
        super();
        this.state ={
           
            email:'surajchavan@gmail.com',
            name:'roy'
        }
    }

       updatestate()
       {
        this.setState({
            name:'bruce'
        })
       }
      render() {
        return(
            <div>
        <h1>Hello {this.state.email}</h1>
        <h2>name:{this.state.name}</h2>
        <button onClick={()=>{this.updatestate()}}> change the state</button>
        </div>
        );
     }
}

export default State;