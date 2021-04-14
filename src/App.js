import React,{ Component } from "react";
import Form from "./components/form";
import Weather from "./components/weather";
import Tabs from './components/Tabs.js';
import Tab from './components/Tab.js';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      selected:'Sights'
    }
  }
  setSelected=(tab)=>{
    this.setState({ selected:tab});
  }
  state = {
    temp: undefined,
    date: undefined,
    temp2: undefined,
    date2: undefined,
    temp3: undefined,
    date3: undefined,
    temp4: undefined,
    date4: undefined,
    temp5: undefined,
    date5: undefined,
    city: undefined,
    country: undefined,
    error: "no info"
  }

gettingWeather = async (e)=>{
  e.preventDefault();
  var city=e.target.elements.city.value;
  var lon;
  var lat;
  var data;
  var api;
  const API_URL = await fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&appid=771a9d033710efe8f1fe59d00a649206');
  console.log(API_URL);
  var data_weather= await API_URL.json();
  console.log(data_weather);

  if(data_weather.cod === "200"){

  function apiGet(method, query) {
      return new Promise(function(resolve, reject) {
        var otmAPI =
          "https://api.opentripmap.com/0.1/en/places/" +
          method;
        if (query !== undefined) {
          otmAPI +=query;
        }
        otmAPI += "&apikey=" + "5ae2e3f221c38a28845f05b61d2a954d288ab08e24de1e09bc302164";
        api = otmAPI;
      });
    }

    apiGet("geoname", "?name=" + city);
    const API_SIGHTS = await fetch(api);
    data = await API_SIGHTS.json();
    console.log(api);
    console.log(data);
    lon = data.lon;
    lat = data.lat;
    console.log(lon);
    console.log(lat);
    const sightamount=30;
     apiGet(
      "radius",
      "?radius=50000&lon="+lon+"&lat="+lat+"&limit="+sightamount);
    console.log(api);

    function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

    const API_SIGHT = await fetch(api);
    var sights = await API_SIGHT.json();

    console.log(sights);
    var poi1= document.getElementById("poi1");
    var xid1 = sights.features[getRandomInt(sightamount-1)].properties.xid;
    var name1 = sights.features[getRandomInt(sightamount-1)].properties.name;
    var api1='https://api.opentripmap.com/0.1/en/places/xid/'+xid1+'?apikey=5ae2e3f221c38a28845f05b61d2a954d288ab08e24de1e09bc302164';
    console.log(api1);

    const Sight = await fetch(api1);
    var json1= await Sight.json();
    console.log(json1);
    if(poi1!==null){
    poi1.innerHTML= "";
      if (json1.preview) {
        poi1.innerHTML += `<img src="${json1.preview.source}">`;
      }
      poi1.innerHTML += json1.wikipedia_extracts
        ? json1.wikipedia_extracts.html
        : json1.info
        ? json1.info.descr
        : "No info about that sight";

    while((poi1.innerHTML===undefined)||(poi1.innerHTML==="No info about that sight")){
    var xid1 = sights.features[getRandomInt(sightamount-1)].properties.xid;
    var name1 = sights.features[getRandomInt(sightamount-1)].properties.name;
    var api1='https://api.opentripmap.com/0.1/en/places/xid/'+xid1+'?apikey=5ae2e3f221c38a28845f05b61d2a954d288ab08e24de1e09bc302164';
    console.log(api1);

    const Sight = await fetch(api1);
    var json1= await Sight.json();
    console.log(json1);
    poi1.innerHTML= "";
      if (json1.preview) {
        poi1.innerHTML += `<img src="${json1.preview.source}">`;
      }
      poi1.innerHTML += json1.wikipedia_extracts
        ? json1.wikipedia_extracts.html
        : json1.info
        ? data.info.descr
        : "No info about that sight";
      }
    }

    console.log(poi1);
    var weathernow=0;
    var weathercicle=8;
    var kelvin=273;

    console.log(data_weather);
    var date=data_weather.list[weathernow].dt_txt;
    var date2=data_weather.list[weathernow+weathercicle].dt_txt;
    var date3=data_weather.list[weathernow+2*weathercicle].dt_txt;
    var date4=data_weather.list[weathernow+3*weathercicle].dt_txt;
    var date5=data_weather.list[weathernow+4*weathercicle].dt_txt;

    this.setState({

    temp: Math.round(data_weather.list[weathernow].main.temp -kelvin),
    date: date,
    temp2 : Math.round(data_weather.list[weathernow+weathercicle].main.temp -kelvin),
    date2: date2,
    temp3: Math.round(data_weather.list[weathernow+2*weathercicle].main.temp -kelvin),
    date3: date3,
    temp4: Math.round(data_weather.list[weathernow+3*weathercicle].main.temp -kelvin),
    date4: date4,
    temp5: Math.round(data_weather.list[weathernow+4*weathercicle].main.temp -kelvin),
    date5: date5,
    city: data_weather.city.name,
    country: data_weather.city.country
    });
      }else{
        this.setState({
            temp: undefined,
            city: undefined,
            temp2: undefined,
            date2: undefined,
            temp3: undefined,
            date3: undefined,
            temp4: undefined,
            date4: undefined,
            temp5: undefined,
            date5: undefined,
            country: undefined,
            error: "Write a correct city name"});
          }
      }

render(){
    return(
      <div className="wrapper">
       <div className="main">
        <div className="container">
          <div className="row">
              <div className="col-sm-5 info">
              </div>
              <div className="col-sm-7 form">
              <Form className="infoWeath" weatherMethod = {this.gettingWeather}/>
              <Tabs className="tabs" tabs={['Weather','Sights']} selected={this.state.selected} setSelected={this.setSelected}>
              <Tab isSelected={this.state.selected==='Weather'}>
              <Weather
              temp={this.state.temp}
              date={this.state.date}
              temp2={this.state.temp2}
              date2={this.state.date2}
              temp3={this.state.temp3}
              date3={this.state.date3}
              temp4={this.state.temp4}
              date4={this.state.date4}
              temp5={this.state.temp5}
              date5={this.state.date5}
              city={this.state.city}
              country={this.state.country}
              error
              />
              </Tab>
              <Tab isSelected={this.state.selected==='Sights'}>
              <div className="infoWeath">
              <div id="poi1">Search the city</div>
              </div>
              </Tab>
              </Tabs>
              </div>
           </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
