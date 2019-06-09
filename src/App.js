import React, { Component } from 'react';
import './App.css';
import image from './rec.png'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      medium: [],
    };
  }

  componentDidMount() {
    fetch('https://api.airtable.com/v0/apporjVCnz1NflfHQ/content?api_key=keyHkyAlxZaDO9fJe')
    .then((response) => response.json())
    .then(data => {
      console.log(data);
      this.setState({ medium: data.records });
    }).catch(error => {
      // Error
    });
  }

  render() {
    return (
      <div class="wrapper">
        <h1>/Product Management</h1>
        <p>A job which has elements of engineering, marketing, research and project management – is key to building great products. It requires a relentless focus on cohesion; ensuring that how a product is designed, engineered, named, branded, and marketed are all united under a single vision. It is still a young and rather ill-defined discipline, due to the constantly changing nature of software products. Some argue it’s not even a distinct discipline these days. In the startup world a lot of people become PMs by default rather than design.</p>
        <br></br> 
        <h2>Highlighted Books</h2>
        {this.state.medium.map(productmanagement => <MediumCard {...productmanagement.fields} /> )}
      </div>
    );
  }
}

export default App;

const MediumCard = ({ name, description, url, notes }) => (
  <a target="_blank" href={url}>
    <div class= "card">
      <img class="image_placeholder" src={image} />
      <div class="content">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>{notes}</p>
      </div>
    </div>
    </a>
)