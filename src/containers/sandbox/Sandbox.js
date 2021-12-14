import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';

import RiskTaker from '../../components/sandbox/RiskTaker';
import Coward from '../../components/sandbox/Coward';
import Easygoing from '../../components/sandbox/Easygoing';
import Tactful from '../../components/sandbox/Tactful';

import Button from './../../Assets/Images/Button.png'
import Box from './../../Assets/Images/Box.png'

import './Sandbox.css'


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
    setEnv : false,
    final : false,
  }

  RiskTakers = []
  Cowards = []
  Users = []

  Easygoings = []
  Tactfuls = []
  Suggesters = []
  
  //-------
  SuggesterDeposit = []
  UserDeposit = []
  Connect  = []
  SuggesterAlive = []
  UserAlive = []
  Punish = []
  //---
 
  setEnviroment = () => {
    console.log("SE")
    let population = [this.state.riskTakerPop, this.state.cowardPop, this.state.easygoingPop, this.state.tactfulPop]
    let userDeposit = this.state.userDeposit
    let suggesterDeposit = this.state.suggesterDeposit

    this.RiskTakers =[]
    this.Cowards = []
    this.Users = []
  
    this.Easygoings = []
    this.Tactfuls = []
    this.Suggesters = []
    this.SuggesterDeposit[population[2]+population[3]-1] = 0
    this.SuggesterDeposit.fill(0)
    this.UserDeposit[population[0]+population[1]-1] = 0
    this.UserDeposit.fill(0)
    this.Connect[population[0]+population[1]-1] = 0
    this.Connect.fill(0)
    this.SuggesterAlive[population[2]+population[3]-1] = 0
    this.SuggesterAlive.fill(0)
    this.UserAlive[population[0]+population[1]-1] = 0
    this.UserAlive.fill(0)
    this.Punish[population[0]+population[1]-1] = 0
    this.Punish.fill(0)

    for( let r = population[0]; r>0; r--){
      this.RiskTakers.push([0,7,userDeposit,0,0,0, true ,[]])
    }
    for( let c = population[1]; c>0; c--){
      this.Cowards.push([1,0,userDeposit,0,0,0, true ,[]])
    }
    this.Users.push(this.RiskTakers)
    this.Users.push(this.Cowards)
    this.Users = this.Users.flat(1)
    for( let e = population[2]; e>0; e--){
      this.Easygoings.push([0,4.0,suggesterDeposit,4.0,0, true])
    }
    for( let t = population[3]; t>0; t--){
      this.Tactfuls.push([0,4.0,suggesterDeposit,4.0,0, true])
    }
    this.Suggesters.push(this.Easygoings)
    this.Suggesters.push(this.Tactfuls)
    this.Suggesters = this.Suggesters.flat(1)

    console.log("CHECK ENV")
    console.log(this.Users)
    console.log(this.Suggesters)

    this.setState({round : 0, setEnv : true})
  }
 
  
  // TODO: change to call callMatch()
  callMatch = () => {
    setTimeout(() => {
      this.match()
    }, 4000)
  }

  match = () => {
    console.log("M")
    this.RiskTakers.map((user, userIdx)=>{
      if(user[2]>0){
        let candidates = []
        if(user[3]>=3 || user[7].length === 0 || (user[7].length>0 && this.Suggesters[user[7][0]][2]<0)){
          while(candidates.length < 1){
            let candidate = Math.floor(Math.random() * (this.Suggesters.length))
            if(this.Suggesters[candidate][2]>0){
              if((user[7][user[7].length-1]!== candidate))
                candidates.push(candidate);
              else
                candidates.push(user[7][0])
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
          this.Punish[userIdx] = 0
        }
        else{
          this.Suggesters[candidates[0]][2] = this.Suggesters[candidates[0]][2] - 4
          if(this.Suggesters[candidates[0]][2]<0) this.Suggesters[candidates[0]][5] = false
          user[2] = user[2] - 4
          user[3] = user[3]+1
          this.Punish[userIdx] = 1
          if(candidates[0]>this.Easygoings.length-1){
            this.Suggesters[candidates[0]][1] = this.Suggesters[candidates[0]][1] +1
          }
        }
        this.SuggesterDeposit[candidates[0]] = this.Suggesters[candidates[0]][2]
        this.UserDeposit[userIdx] = user[2]
        this.Connect[userIdx] = candidates[0]
        this.SuggesterAlive[candidates[0]] = this.Suggesters[candidates[0]][5] ? 1 : 0
        this.UserAlive[userIdx] = user[2]>0 ? 1 : 0
    }
    else{
      user[6] = false
      this.Connect[userIdx] = -1
    }
    })
    this.Cowards.map((user, userIdx)=>{
    if(user[2]>0){
        let candidates = []
        while(candidates.length < 1){
          let candidate = Math.floor(Math.random() * (this.Suggesters.length))
          if(this.Suggesters[candidate][2]>0){
            candidates.push(candidate);
          }
        }
        
        user[7] = [candidates[0], user[7]]
        user[7].flat(1)
        this.Suggesters[candidates[0]][2] = this.Suggesters[candidates[0]][2] + 2
        user[2] = user[2] - 2
        this.SuggesterDeposit[candidates[0]] = this.Suggesters[candidates[0]][2]
        this.UserDeposit[this.RiskTakers.length+ userIdx] = user[2]
        this.Connect[this.RiskTakers.length+ userIdx] = candidates[0]
        this.SuggesterAlive[candidates[0]] = this.Suggesters[candidates[0]][5] ? 1 : 0
        this.UserAlive[this.RiskTakers.length+ userIdx] = user[2]>0 ? 1 : 0
      }
    else{
      user[6] = false
      this.Connect[this.RiskTakers.length+ userIdx] = -1
    }
      
    })
    this.setState({round:++this.state.round})
  }

  checkAlive = () =>{
    let numOfDeadSuggester = 0
    let numOfDeadUser = 0
    this.Suggesters.map((suggester) => {
      if(suggester[5] === false)
        numOfDeadSuggester++;
      }
    )
    
    if(numOfDeadSuggester === this.Suggesters.length)
      return false
    
    this.Users.map((user)=>{
      if(user[6] === false)
          numOfDeadUser++;
    })
    if(numOfDeadUser === this.Users.length)
        return false
    return true
  }

  final = () => {
    if(this.state.final === false) this.setState({ final : true })
  }

  clickStartSimulationHandler = () => {
    if(this.state.riskTakerPop <= this.state.easygoingPop + this.state.tactfulPop) {
      alert('Population of Risk Taker should be larger than that of users. Please adjust population values.')
    }
    else if(this.state.userDeposit <= this.state.suggesterDeposit) {
      alert('Population of Risk Taker should be larger than that of users. Please adjust population values.')
    }
    else {
      this.setEnviroment()
    }
  }

  clickNextHandler = () => {
      this.props.history.push('/outro/limitations')
  }

  render () {
    let riskTakers = []
    let cowards = []
    let easygoings = []
    let tactfuls = []  
    let lines = []

    if(this.state.setEnv && this.checkAlive()) {
      this.match()
      console.log("match")
      console.log("suggesterDeposit", this.SuggesterDeposit)
      console.log("userDeposit", this.UserDeposit)
      console.log("Connect", this.Connect)
      console.log("SuggesterAlive", this.SuggesterAlive)
      console.log("UserAlive", this.UserAlive)
      console.log("Punish", this.Punish)

      for(let i = 0; i < this.state.riskTakerPop; i++) {
        let newRiskTaker = 
          <div className = {`user${i}`}>
            <RiskTaker  connect = {this.Connect[i]} deposit = {this.UserDeposit[i]} punish={this.UserAlive[i]} dead = {this.UserAlive[i]}/>
          </div>
        riskTakers.push(newRiskTaker)
      }
      for(let i = this.state.riskTakerPop; i < this.state.riskTakerPop + this.state.cowardPop; i++) {
        let newCoward = <Coward className = {`user${i}`} connect = {this.Connect[i]} deposit = {this.UserDeposit[i]} punish={this.UserAlive[i]} dead = {this.UserAlive[i]}/>
        cowards.push(newCoward)
      }
      for(let i = 0; i < this.state.easygoingPop; i++) {
        let newEasygoing = <Easygoing className = {`suggester${i}`} id = {i} deposit = {this.SuggesterDeposit[i]} dead = {this.SuggesterAlive[i]}/>
        easygoings.push(newEasygoing)
      }
      for(let i = this.state.easygoingPop; i < this.state.easygoingPop + this.state.tactfulPop; i++) {
        let newTactful = <Tactful className = {`suggester${i}`} id = {i} deposit = {this.SuggesterDeposit[i]} dead = {this.SuggesterAlive[i]}/>
        tactfuls.push(newTactful)
      }      
    }


    if(this.state.setEnv && !this.checkAlive()) {
      this.final()
    }

    if(this.state.final) {
      console.log("final")
      console.log("suggesterDeposit", this.SuggesterDeposit)
      console.log("userDeposit", this.UserDeposit)
      console.log("Connect", this.Connect)
      console.log("SuggesterAlive", this.SuggesterAlive)
      console.log("UserAlive", this.UserAlive)
      console.log("Punish", this.Punish)

      for(let i = 0; i < this.state.riskTakerPop; i++) {
        let newRiskTaker = <RiskTaker className = {`user${i}`} deposit = {this.UserDeposit[i]} punish={this.UserAlive[i]} dead = {this.UserAlive[i]}/>
        riskTakers.push(newRiskTaker)
      }
      for(let i = this.state.riskTakerPop; i < this.state.riskTakerPop + this.state.cowardPop; i++) {
        let newCoward = <Coward className = {`user${i}`} deposit = {this.UserDeposit[i]} punish={this.UserAlive[i]} dead = {this.UserAlive[i]}/>
        cowards.push(newCoward)
      }
      for(let i = 0; i < this.state.easygoingPop; i++) {
        let newEasygoing = <Easygoing className = {`suggester${i}`} deposit = {this.SuggesterDeposit[i]} dead = {this.SuggesterAlive[i]}/>
        easygoings.push(newEasygoing)
      }
      for(let i = this.state.easygoingPop; i < this.state.easygoingPop + this.state.tactfulPop; i++) {
        let newTactful = <Tactful className = {`suggester${i}`} deposit = {this.SuggesterDeposit[i]} dead = {this.SuggesterAlive[i]}/>
        tactfuls.push(newTactful)
      }      
    }

    return (
        <div className = 'Sandbox'>
            <p className = 'Simulation'>
                Sandbox Module
            </p>
            
              <div className = 'display'>
                <img className="display_Container" src={Box} alt={Box} />
                Easygoing: Suggester who does not increase service quality even if User punish them.
                <br/>
                Tactful: Suggester who increase service quality if User punish them.
                <br/>
                Risktaker: User who punishes Suggester for poor service quality.
                <br/>
                Coward: Users who do not punish Suggester even if the quality of service is low.
                <br/>

                [Display]
                Suggesters
                [Easygoing] {this.state.easygoingPop}
                [Tactful] {this.state.tactfulPop}
                Users
                [RiskTaker] {this.state.riskTakerPop}
                [Coward] {this.state.cowardPop}

                <div className = 'Users'>
                  {riskTakers}
                  {cowards}
                </div>
                <div className = 'Suggesters'>
                  {easygoings}
                  {tactfuls}
                </div>
                {/* {lines} */}
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
                <img className="Inputbox_Container" src={Box} alt={Box} />
                { (this.state.currTab === 'Population') &&
                  <div className = 'Population'>
                    <b>Suggesters</b>
                    <p>
                      <label>[Easygoing]</label>
                      <input 
                        id = 'easygoing-population'
                        type = 'number'
                        min = '1'
                        max = '3'
                        value = {this.state.easygoingPop}
                        onChange = {(event) => this.setState({easygoingPop : event.target.value })}>
                      </input>
                      <b>
                        (min: 1, max: 3)
                      </b>
                    </p>
                    <p>
                      <label>[Tactful]</label>
                      <input 
                        id = 'tactful-population'
                        type = 'number'
                        min = '1'
                        max = '3'
                        value = {this.state.tactfulPop}
                        onChange = {(event) => this.setState({tactfulPop : event.target.value })}>
                      </input>
                      <b>
                        (min: 1, max: 3)
                      </b>
                    </p>
                    
                    <b>Users</b>
                    <p>
                      <label>[RiskTaker]</label>
                      <input 
                        id = 'risktaker-population'
                        type = 'number'
                        min = '3'
                        max = '5'
                        value = {this.state.riskTakerPop}
                        onChange = {(event) => this.setState({riskTakerPop : event.target.value })}>
                      </input>
                      <b>
                        (min: 3, max: 5)
                      </b>
                    </p>
                    <p>
                      <label>[Coward]</label>
                      <input 
                        id = 'coward-population'
                        type = 'number'
                        min = '2'
                        max = '5'
                        value = {this.state.cowardPop}
                        onChange = {(event) => this.setState({cowardPop : event.target.value })}>
                      </input>
                      <b>
                        (min: 2, max: 5)
                      </b>
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
                      <b>
                        (min: 80, max: 200)
                      </b>
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
                      <b>
                        (min: 20, max: 80)
                      </b>
                    </p>
                  </div>
                }
              </div>
            <button 
                id = 'start-simulation'
                onClick = {() => this.clickStartSimulationHandler()}>
                Start Simulation
            </button>  
          {/* <button 
              id = 'next-button'
              onClick = {() => this.clickNextHandler()}>
              Next
          </button> */}
          <img className="NextButtonStyle" src={Button} alt={Button} onClick = {() => this.clickNextHandler()} />
          <div className="NextButtonText" onClick = {() => this.clickNextHandler()}>Next</div>
        
      </div>
    )
  }
}


export default withRouter(Sandbox);