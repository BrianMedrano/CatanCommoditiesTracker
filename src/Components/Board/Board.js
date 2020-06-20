import React, { Component } from 'react';
import Header from '../Header/Header';
import Commodity from '../Commodity/Commodity';
import './Board.css';

const commodityParams = {
  gold: 'WGC/GOLD_DAILY_USD',
  copper: 'ODA/PCOPP_USD',
  aluminum: 'ODA/PALUM_USD',
  corn: 'TFGRAIN/CORN',
  wheat: 'ODA/PWHEAMT_USD',
  'olive oil': 'ODA/POLVOIL_USD',
  bananas: 'ODA/PBANSOP_USD',
  oranges: 'ODA/PORANG_USD',
  sugar: 'ODA/PSUGAUSA_USD',
  tea: 'ODA/PTEA_USD',
  'cocoa bean': 'ODA/PCOCO_USD',
  poultry: 'ODA/PPOULT_USD',
  'crude oil': 'ODA/POILWTI_USD',
  'natural gas': 'ODA/PNGASUS_USD',
  coal: 'ODA/PCOALAU_USD',
  rubber: 'ODA/PRUBB_USD',
  cotton: 'ODA/PCOTTIND_USD',
  wool: 'ODA/PWOOLC_USD',
};

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      commodityData: [],
    };
  }

  //API call to Quandl
  async componentDidMount() {
    let stateData = [];

    const api_key = process.env.QUANDL_API_KEY;

    for (let commodity in commodityParams) {
      let uri = commodityParams[commodity];

      const apiURLString = `https://www.quandl.com/api/v3/datasets/${uri}?api_key=UwKYazQcq3HDZoPgUpy_`;
      const response = await fetch(apiURLString);
      console.log(response);
      try {
        const json = await response.json();

        console.log(json.dataset.data[0][0]);

        //Update array with API data
        stateData.push({
          description: commodity,
          data: json.dataset.data[0],
          uniqueID: json.dataset.id,
        });
      } catch (error) {
        // console.log(`Could not retrieve ${commodity} due to : ${error}`);
      }

      this.setState({
        loading: false,
        commodityData: stateData,
      });
    }
  }

  render() {
    return (
      <div>
        <Header />

        {this.state.commodityData.map((comm) => {
          return (
            <Commodity
              key={comm.uniqueID}
              commodityDescription={comm.description}
              commodityDate={comm.data[0]}
              commodityPrice={comm.data[1]}
            />
          );
        })}
      </div>
    );
  }
}

export default Board;
