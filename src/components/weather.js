import React from "react";
import Tabs from './Tabs.js'
import Tab from './Tab.js'

class Weather extends React.Component {
  render(){
    return(
      <div className="infoWeath">
      {this.props.city &&
        <div>
        <p>City: {this.props.city}, {this.props.country}</p>
        <p>{this.props.date}: {this.props.temp} C°</p>
        <p>{this.props.date2}: {this.props.temp2} C°</p>
        <p>{this.props.date3}: {this.props.temp3} C°</p>
        <p>{this.props.date4}: {this.props.temp4} C°</p>
        <p>{this.props.date5}: {this.props.temp5} C°</p>
        </div>
      }
      <p className="error">{this.props.error}</p>
       </div>
    );
  }
}
export default Weather;
