import React, { Component } from 'react';

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
            <div>
              <h1>/Product Management</h1>
              {this.state.medium.map(productmanagement => <MediumCard {...productmanagement.fields} /> )}
              {this.state.medium.map(productmanagement => <PodcastSection {...productmanagement.category} /> )}
            </div>
    );
  }
}

export default App;

const MediumCard = ({ name, description, url, notes }) => (
  <div>
    <div>
      <h5>{name}</h5>
      <p>{description}</p>
      <p>{notes}</p>
      <p>{url}</p>
    </div>
  </div>
)

const PodcastSection = ({ name, category, description, url, notes }) => (
    <div>
    <h1>{name}</h1>
    </div>
)