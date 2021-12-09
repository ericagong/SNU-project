import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

class Sandbox extends Component {

    state = {
      round : 0,
      riskTakerPop : 3,
      cowardPop : 2, 
      easygoingPop : 1, 
      tactfulPop : 1,
      userDeposit : 80,
      suggesterDeposit : 20,
      currTab: 'Population',
    }

    RiskTakers =[]
    Cowards = []
    Users = []
 
    Easygoings = []
    Tactfuls =[]
    Suggesters = []
 
    setEnviroment = () =>{
        let population = [4,1,1,1]
        let userDeposit = 80
        let suggesterDeposit = 20
        this.RiskTakers =[]
        this.Cowards = []
        this.Users = []
     
        this.Easygoings = []
        this.Tactfuls =[]
        this.Suggesters = []
        for( let r = population[0]; r>0; r--){
          this.RiskTakers.push([0,7,userDeposit,0,0,0,'REWARD',[]])
        }
        for( let c = population[1]; c>0; c--){
          this.Cowards.push([1,0,userDeposit,0,0,0,'REWARD',[]])
        }
        this.Users.push(this.RiskTakers)
        this.Users.push(this.Cowards)
        this.Users = this.Users.flat(1)
        for( let e = population[2]; e>0; e--){
          this.Easygoings.push([0,4.0,suggesterDeposit,4.0,0])
        }
        for( let t = population[3]; t>0; t--){
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
       let candidates = []
       if(user[3]>=3 || user[7].length==0 || (user[7].length>0 && this.Suggesters[user[7][0]][2]<0)){
         while(candidates.length < 3){
           let candidate = Math.floor(Math.random() * (this.Suggesters.length))
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
       let candidates = []
       while(candidates.length < 3){
         let candidate = Math.floor(Math.random() * (this.Suggesters.length))
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
 

    clickStartSimulationHandler = () => {
      if(this.state.riskTakerPop <= this.state.easygoingPop + this.state.tactfulPop) {
        alert('Population of Risk Taker should be larger than that of users. Please adjust population values.')
      }
      else if(this.state.userDeposit <= this.state.suggesterDeposit) {
        alert('Population of Risk Taker should be larger than that of users. Please adjust population values.')
      }
      else {
        alert('Start Simulation')
      }
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
                <div className = 'display'>
                  [Display]
                  Suggesters
                  [Easygoing] {this.state.easygoingPop}
                  [Tactful] {this.state.tactfulPop}
                  Users
                  [RiskTaker] {this.state.riskTakerPop}
                  [Coward] {this.state.cowardPop}
                </div>
                <button 
                    id = 'population-tab'
                    onClick = {() => this.setState({ currTab : 'Population'})}>
                    Population Tab
                </button>
                <button 
                    id = 'environment-tab'
                    onClick = {() => this.setState({ currTab: 'Environment'})}>
                    Environment Tab
                </button>
                <div className = 'Inputbox'>
                  { (this.state.currTab === 'Population') &&
                    <div className = 'Popoulation'>
                      <label>Suggesters</label>
                      <p>
                        <label>[Easygoing]</label>
                        <input 
                          id = 'easygoing-population'
                          type = 'number'
                          min = '1'
                          max = '5'
                          value = {this.state.easygoingPop}
                          onChange = {(event) => this.setState({easygoingPop : event.target.value })}>
                        </input>
                        <div>
                          (min: 1, max: 5)
                        </div>
                      </p>
                      <p>
                        <label>[Tactful]</label>
                        <input 
                          id = 'tactful-population'
                          type = 'number'
                          min = '1'
                          max = '5'
                          value = {this.state.tactfulPop}
                          onChange = {(event) => this.setState({tactfulPop : event.target.value })}>
                        </input>
                        <div>
                          (min: 1, max: 5)
                        </div>
                      </p>
                      
                      <label>Users</label>
                      <p>
                        <label>[RiskTaker]</label>
                        <input 
                          id = 'risktaker-population'
                          type = 'number'
                          min = '3'
                          max = '10'
                          value = {this.state.riskTakerPop}
                          onChange = {(event) => this.setState({riskTakerPop : event.target.value })}>
                        </input>
                        <div>
                          (min: 3, max: 10)
                        </div>
                      </p>
                      <p>
                        <label>[Coward]</label>
                        <input 
                          id = 'coward-population'
                          type = 'number'
                          min = '2'
                          max = '10'
                          value = {this.state.cowardPop}
                          onChange = {(event) => this.setState({cowardPop : event.target.value })}>
                        </input>
                        <div>
                          (min: 2, max: 10)
                        </div>
                      </p>
                    </div>
                  }
                  { (this.state.currTab === 'Environment') && 
                    <div className = 'Environment'>
                      <p>
                        <label>[User Deposit]</label>
                        <input 
                          id = 'user-deposit'
                          type = 'number'
                          min = '80'
                          max = '200'
                          value = {this.state.userDeposit}
                          onChange = {(event) => this.setState({userDeposit : event.target.value })}>
                        </input>
                        <div>
                          (min: 80, max: 200)
                        </div>
                      </p>
                      <p>
                        <label>[Suggester Deposit]</label>
                        <input 
                          id = 'suggester-deposit'
                          type = 'number'
                          min = '20'
                          max = '80'
                          value = {this.state.suggesterDeposit}
                          onChange = {(event) => this.setState({suggesterDeposit : event.target.value })}>
                        </input>
                        <div>
                          (min: 20, max: 80)
                        </div>
                      </p>
                    </div>
                  }
                </div>
                <button 
                    id = 'start-simulation'
                    onClick = {() => this.clickStartSimulationHandler()}>
                    Start Simulation
                </button>  
                
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