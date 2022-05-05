import React, { Component } from 'react';

export class ViewAll extends Component {
    state = {
      trucks: []
    };
  
    async componentDidMount() {
        const response = await fetch('/all');
        const body = await response.json();
        this.setState({trucks: body});
    }
  
    render() {
      const {trucks} = this.state;
      return (
          <div className="App">
            <header className="App-header">
              <div className="App-intro">
                <h1>Food Trucks in San Francisco</h1>
                {trucks.map(trucks =>
                    <div key={trucks.id}>
                      ID - {trucks.id} <br/> Name - {trucks.applicant} <br/> Address - {trucks.address} <br/> Food Type - {trucks.foodItems} <br/><br/>
                    </div>
                )}
              </div>
            </header>
          </div>
      );
    }
  }
