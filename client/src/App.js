import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Grid from './components/grid';

class App extends Component {
  state = {
    post: '',
    responseToPost: '',
  };


  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/distance', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();

    this.setState({ responseToPost: body });
  };

render() {
    return (
      <Wrapper>
        <Title>Miroculus Challenge</Title>
        <Content>
          <Panel>
            <form onSubmit={this.handleSubmit}>
              <div>Set distance</div>
              <input
                type="text"
                value={this.state.post}
                onChange={e => this.setState({ post: e.target.value })}
              />
              <button type="submit">Submit</button>
            </form>
            <div>{this.state.responseToPost}</div>
          </Panel>
          <Board>
            <Grid />
          </Board>
        </Content>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  display:flex;
  flex-direction:column;
  padding:1em;
  min-height:90vh;
  align-items:center;
`;
const Title = styled.h1`
  color: #003da6;
  font-size: 3em;
  margin-top: 1em;
`
const Content = styled.div`
  display:flex;
  width:100%;
  margin-top:2em;
  `
const Panel = styled.div`
  display:flex;
  width:100%;
  padding:2em;

  `
const Board = styled.div`
  display:flex;
  width:100%;
  justify-content:center;

  `
export default App;