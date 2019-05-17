import React, { Component } from 'react';
import { InputGroup, FormControl, Form } from 'react-bootstrap';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {value: '', realPrice: 0};


    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    if(event.target.value.length == 5){
      var price = this.calculatePrice(event.target.value)
      this.setState({realPrice: price})
    }
  }

  calculatePrice(receivedPrice) {
    console.log(receivedPrice);
    var first = {
      "A": 100,
      "B": 200,
      "C": 300,
      "D": 400,
      "E": 500,
      "F": 600
    };

    var mid = {
      "0": 50,
      "1": 60,
      "2": 70,
      "3": 80,
      "4": 90,
      "5": 0,
      "6": 10,
      "7": 20,
      "8": 30,
      "9": 40
    };

    var firstValue = receivedPrice[0];
    var midValue = receivedPrice[2];

    return first[firstValue] + mid[midValue];
  }



  render() {
    return (
        <div className="App">
          <header className="App-header">
            <p>
              BM LIN Pricing made easy
            </p>
            <label>
              Input Price:
            </label>
            <div>
              <p>
              </p>

              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows="3" onChange={this.handleChange} />
              </Form.Group>
            </div>
            <label>
              Real Price: ¥{this.state.realPrice}
            </label>
          </header>
        </div>
    );
  }
}

export default App;
