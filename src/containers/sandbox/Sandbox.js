import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Sandbox extends Component {

    state = {round:0}
    RiskTakers =[]
    Cowards = []
    Users = []
 
    Easygoings = []
    Tactfuls =[]
    Suggesters = []
 
 
    setEnviroment = () =>{
        var population = [4,1,1,1]
        var userDeposit = 80
        var suggesterDeposit = 20
        this.RiskTakers =[]
        this.Cowards = []
        this.Users = []
     
        this.Easygoings = []
        this.Tactfuls =[]
        this.Suggesters = []
        for( var r = population[0]; r>0; r--){
          this.RiskTakers.push([0,7,userDeposit,0,0,0,"REWARD",[]])
        }
        for( var c = population[1]; c>0; c--){
          this.Cowards.push([1,0,userDeposit,0,0,0,"REWARD",[]])
        }
        this.Users.push(this.RiskTakers)
        this.Users.push(this.Cowards)
        this.Users = this.Users.flat(1)
        for( var e = population[2]; e>0; e--){
          this.Easygoings.push([0,4.0,suggesterDeposit,4.0,0])
        }
        for( var t = population[3]; t>0; t--){
          this.Tactfuls.push([0,4.0,suggesterDeposit,4.0,0])
        }
        this.Suggesters.push(this.Easygoings)
        this.Suggesters.push(this.Tactfuls)
        this.Suggesters = this.Suggesters.flat(1)
        this.setState({round:0})
    
      }
    
 
    match = ()=>{
     this.RiskTakers.map((user)=>{
 //      if(user[7].length < this.Suggesters.length){
       var candidates = []
       if(user[3]>=3 || user[7].length==0 || (user[7].length>0 && this.Suggesters[user[7][0]][2]<0)){
         while(candidates.length < 3){
           var candidate = Math.floor(Math.random() * (this.Suggesters.length))
           if(this.Suggesters[candidate][2]>0 &&(user[7][user[7].length-1]!=candidate)){
             candidates.push(candidate);
           }
         }
         user[3]=0
       }
       else{
         candidates.push(user[7][0])
       }
       user[7] = [candidates[0], user[7]]
       user[7]=user[7].flat(1)
       if(this.Suggesters[candidates[0]][1]>=7){
         this.Suggesters[candidates[0]][2] = this.Suggesters[candidates[0]][2] + 2
         user[2] = user[2] - 2
       }
       else{
         this.Suggesters[candidates[0]][2] = this.Suggesters[candidates[0]][2] - 4
         user[2] = user[2] - 4
         user[3] = user[3]+1
         if(candidates[0]>this.Easygoings.length-1){
           this.Suggesters[candidates[0]][1] = this.Suggesters[candidates[0]][1] +1
         }
       }
 //    }
     })
     this.Cowards.map((user)=>{
       var candidates = []
       while(candidates.length < 3){
         var candidate = Math.floor(Math.random() * (this.Suggesters.length))
         if(this.Suggesters[candidate][2]>0){
           candidates.push(candidate);
         }
       }
       
       user[7] = [candidates[0], user[7]]
       user[7].flat(1)
       this.Suggesters[candidates[0]][2] = this.Suggesters[candidates[0]][2] + 2
       user[2] = user[2] - 2
     })
     this.setState({round:++this.state.round})
     }
 

    clickNextHandler = () => {
        this.props.history.push('/outro/limitations')
    }

    render () {
        return (
            <div className = 'Sandbox'>
                <div className = 'Simulation'>
                    샌드박스 모듈
                </div>      
                <button 
                    id = 'next-button'
                    onClick = {() => this.clickNextHandler()}>
                    Next
                </button>
            </div>
        )
    }

}


export default withRouter(Sandbox);