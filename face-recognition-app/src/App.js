import React, { Component } from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
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
    imageUrl:'',
  }
}
onInputChange=(event) =>{
this.setState({input:event.target.value});
}
onButtonSummit=() =>{
this.setState({imageUrl:this.state.input})
app.models
.predict(
Clarifai.FACE_DETECT_MODEL,
    // URL
    this.state.input
)
.then(function(response) {
    // do something with responseconsole.log(response);
    console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
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
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
