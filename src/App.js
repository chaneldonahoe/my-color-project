
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { generatePalette } from './colorHelpers';
import Palette from './Palette';
import seedColors from './seedColors';
import PaletteList from './PaletteList';

class App extends Component {
  findPalette(id){
    return seedColors.find(function(palette){
      return palette.id === id;
    });
  }

  render(){

    return (
      <Switch>
        <Route exact path='/' render={() => <PaletteList palettes={seedColors}/>} />
        <Route 
          exact path='/palette/:id' 
          render={routeProps => (
             <Palette 
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />  
      </Switch>
    );
  }
  
}

export default App;
