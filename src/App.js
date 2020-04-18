import React from 'react';

import Commodity from './Components/Commodity/Commodity'

import './App.css';
import { stat } from 'fs';



/* let metalsArray = ['Gold', 'Copper', 'Aluminum'];
let foodsArray = ['Corn', 'Wheat', 'Bananas', 'Oranges', 
              'Sugar', 'Tea', 'Cocoa Bean', 'Poultry', 'Olive Oil'];
let energyArray = ['Crude Oil', 'Natural Gas', 'Coal'];
let rawMaterials = ['Rubber', 'Cotton', 'Wool']; */

//commodities object
const commodityData = {
  'gold': 'WORLDBANK/WLD_GOLD',
  'copper': 'ODA/PCOPP_USD',
  'aluminum': 'ODA/PALUM_USD',
  'corn': 'WORLDBANK/WLD_MAIZE',
  'wheat': 'ODA/PWHEAMT_USD',
  'olive oil': 'ODA/POLVOIL_USD',
  'bananas': 'ODA/PBANSOP_USD',
  'oranges': 'ODA/PORANG_USD',
  'sugar': 'ODA/PSUGAUSA_USD',
  'tea': 'ODA/PTEA_USD',
  'cocoa bean': 'ODA/PCOCO_USD',
  'poultry': 'ODA/PPOULT_USD',
  'crude oil': 'ODA/POILWTI_USD',
  'natural gas': 'ODA/PNGASUS_USD',
  'coal': 'BRP/COAL_PRICES',
  'rubber': 'ODA/PRUBB_USD',
  'cotton': 'ODA/PCOTTIND_USD',
  'wool': 'ODA/PCOALAU_USD'

}






//const apiURLString = 'https://www.quandl.com/api/v3/datasets/ODA/PBEEF_USD?api_key=w2zdE5zrvcjADAmnaTWw';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state ={
        loading: true, 
        commodityData : []
       
    }
  }

  //API call to Quandl 
  async componentDidMount(){

    let stateData = [];

    for(let commodity in commodityData){
     // console.log('inside for loop of async call');

      let uri = commodityData[commodity]
      console.log(uri); 

    const apiURLString = `https://www.quandl.com/api/v3/datasets/${uri}?api_key=w2zdE5zrvcjADAmnaTWw`;
    
    const response = await fetch(apiURLString)
      try{
        const json = await response.json();

        console.log(json.dataset.data[0][0]);
        //const commodityDate = json.dataset.data[0][0];
       // const commodityPrice = json.dataset.data[0][1];
        //commodityData[commodity].date = commodityDate; 
        //commodityData[commodity].price = commodityPrice; 

        stateData.push({
          description: commodity,
          data: json.dataset.data[0]
        });

        

    }
    catch(error){
      console.log('Could not retrieve data from ' + error)
    }

    this.setState({
      loading: false, 
      commodityData: stateData
    })

  }



  
    

    

  
  }




  render(){
    


  return (
    <div className="App">
      {}
      <h1> Commodities</h1>
      <ul>
        
        {this.state.commodityData.map(comm => {
          return <Commodity commodityDescription={comm.description}
                            commodityDate={comm.data[0]}
                            commodityPrice={comm.data[1]}
          />
        })}

         
        
      </ul>
      
    </div>
  );
  }
}

export default App;
