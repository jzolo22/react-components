import logo from './logo.svg';
import './App.css';
import Header from './Components/Header'
import InstructorContainer from './Containers/InstructorContainer'
import AnimeContainer from './Containers/AnimeContainer'
import React from 'react'

class App extends React.Component {

  state = { instructor: {} }

  appClickHandler = (instructor_obj) => {
      this.setState({ instructor: instructor_obj })
  }

  render() {
    return (
      <div>
        <Header />
        <InstructorContainer appClickHandler={this.appClickHandler} />
        <AnimeContainer instructor={this.state.instructor} />
      </div>
      );

  }
}
  
  export default App;
  