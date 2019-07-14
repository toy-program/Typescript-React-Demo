import React from "react";
import Number from "./Number";
import { Input, Form } from "./Input";

interface IState {
  counter: number;
  name: string;
}

class App extends React.Component<{}, IState> {
  state = {
    counter: 0,
    name: ""
  };

  render() {
    const { counter, name } = this.state;
    return (
      <>
        <Number count={counter} />
        <Form onFormSubmit={this.onFormSubmit}>
          <Input value={name} onChange={this.onChange} />
        </Form>
        <button onClick={this.add}>Add</button>
      </>
    );
  }

  onChange = (event: React.SyntheticEvent<HTMLInputElement>) => {
    console.log(event.target);
  };

  onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  add = () => {
    this.setState(prev => ({ counter: prev.counter + 1 }));
  };
}

export default App;
