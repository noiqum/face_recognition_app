import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
 apiKey: 'c2b9fd0be81843d1bbc6c067ac2fe2bd'
});


const ParticlesOptions= {
  particles: {
    number:{
      value:30,
      density:{
        enable:true,
        value_area:800
      }
    }
  }
}

class App extends Component {

constructor(){
  super();
  this.state={
    input:'',
  }
}
onInputChange=(event) =>{
  console.log(event.target.value);
}
onButtonSummit=() =>{
  console.log('click');
app.models
.predict(
Clarifai.COLOR_MODEL,
    // URL
    "https://samples.clarifai.com/metro-north.jpg"
)
.then(function(response) {
    // do something with responseconsole.log(response);
    console.log(response);
    },
    function(err) {// there was an error}
  }
);
}

  render() {
    return (
      <div className="App">
        <Particles className='particles' params={ParticlesOptions}/>
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm 
        onInputChange={this.onInputChange}
        onButtonSummit={this.onButtonSummit}
        />
         {/* <FaceRecognition/>
        }
        */}
      </div>
    );
  }
}

export default App;
