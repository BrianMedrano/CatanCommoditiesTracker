import React from 'react';
import ReactDOM from 'react-dom';
import Commidity from './Components/Commodity/Commodity'

import './App.css';



let metalsArray = ['Gold', 'Copper', 'Aluminum'];
let foodsArray = ['Corn', 'Wheat', 'Bananas', 'Oranges', 
              'Sugar', 'Tea', 'Cocoa Bean', 'Poultry', 'Olive Oil'];
let energyArray = ['Crude Oil', 'Natural Gas', 'Coal'];
let rawMaterials = ['Rubber', 'Cotton', 'Wool'];

//Parameters for Quandle API calls 
const apiParams = {
  'Gold': 'WORLDBANK/WLD_GOLD',
  'Copper': 'ODA/PCOPP_USD',
  'Aluminum': 'ODA/PALUM_USD',
  'Corn': 'WORLDBANK/WLD_MAIZE',
  'Wheat': 'ODA/PWHEAMT_USD',
  'Olive Oil': 'ODA/POLVOIL_USD',
  'Bananas': 'ODA/PBANSOP_USD',
  'Oranges': 'ODA/PORANG_USD',
  'Sugar': 'ODA/PSUGAUSA_USD',
  'Tea': 'ODA/PTEA_USD',
  'Cocoa bean': 'ODA/PCOCO_USD',
  'Poultry': 'ODA/PPOULT_USD',
  'Crude Oil': 'ODA/POILWTI_USD',
  'Natural Gas': 'ODA/PNGASUS_USD',
  'Coal': 'BRP/COAL_PRICES',
  'Rubber': 'ODA/PRUBB_USD',
  'Cotton': 'ODA/PCOTTIND_USD',
  'Wool': 'ODA/PCOALAU_USD'

}
let commoditiesArray = [];



const apiURLString = 'https://www.quandl.com/api/v3/datasets/ODA/PBEEF_USD?api_key=w2zdE5zrvcjADAmnaTWw';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state ={
        date: 'test1',
        price: 0
    }
  }

  //API call to Quandl 
  async componentDidMount(){
    const response = await fetch(apiURLString); 
    const json = await response.json();
    console.log(json.dataset.data[0][0]);
    const commodityDate = json.dataset.data[0][0];
    const commodityPrice = json.dataset.data[0][1];
    this.setState({
      date: commodityDate,
      price: commodityPrice.toFixed(2)
    })
  }



  render(){
 

  



  return (
    <div className="App">
      <h1> Commodities</h1>
      <ul>
        
        {Object.entries(apiParams).map(([key, value], index) => {
           return <Commidity listItemKey={key}
           listItemValue={value} 
           commodityDate={this.state.date} 
           commodityPrice={this.state.price}/>;
        })}
      </ul>
      
    </div>
  );
  }
}

export default App;
