import React, { Component } from 'react'

export default class pass_props extends Component {

  constructor() {
    super()

    this.state = {
      goOut : "Yes",
      setCount : 1,
      setContact : {
        name : "John",
        age : 25,
        phone: "1234567890",
        email: "john@gmail.com",
        isFavorite: false

      },
      character : {}
  }

  }

  setFavorite = () => {
    this.setState({
      setContact: {
        ...this.state.setContact,
        isFavorite: !this.state.setContact.isFavorite
      }
    })
    

  }

    add = () => {
      this.setState({setCount: this.state.setCount + 1})
    }

    subtract = () => {
      this.setState({setCount: this.state.setCount - 1})
    }

    toggleGoOut = () => {
        this.setstate(prevState => {
            return {
                goOut: prevState.goOut === "Yes" ? "No" : "Yes"
            }
            
        })
        
    }

    getStarWarsCharacters = (id) => {
        fetch(`https://swapi.dev/api/people/ ${id}`)
        .then(response => response.json())
        .then(data => {
            this.setState({character: data})
        })

    }

    componentDidMount = () => {
      this.getStarWarsCharacters(this.state.setCount)
    }

    componentDidUpdate = (prevProps, prevState) => { 
      if(prevState.setCount !== this.state.setCount) {
        this.getStarWarsCharacters(this.state.setCount)
      } 
    }

  render() {
    return (
      <div>
        <h1>Should I go out tonight?</h1>
        <div onClick={this.toggleGoOut}>
            <h2>{this.state.goOut}</h2>
        </div>

        <h2>Count</h2>
        <h3>{this.state.setCount}</h3>
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>

        <h3>Contact</h3>
        <h4>Name: {this.state.setContact.name}</h4>
        <h4>Age: {this.state.setContact.age}</h4>
        <h4>Phone: {this.state.setContact.phone}</h4>
        <h4>Email: {this.state.setContact.email}</h4>
        <h4>Fasvourite: {this.state.setContact.isFavorite ? "true" : "False"}</h4>
        <button onClick={this.setFavorite}>Favorite</button>

        <h1>Star wars characters</h1>
        <h4>Name: {this.state.character.name || "Loading...."}</h4>
        <h4>Height: {this.state.character.height}</h4>
        <h4>Mass: {this.state.character.mass}</h4>
      </div>
    )
  }
}
