import './TrafficMap.styl'
import {rotatingMapData} from "../../constants/mapLocations";
import React,{Component} from "react";
import Box from "../Box/index";

export default class TrafficMap extends Component{
  constructor(props) {
    super(props);
    this.state = {location : "Montreal Area"}
  }
  componentDidMount(){
    window.initMap = this.initMap.bind(this);
    this.loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyDWJLkLsNWLpDiJBPKaZdZuVLMNka0FAQU&callback=initMap');
  }
  initMap(){
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: {lat: 45.49812, lng: -73.7564797},
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      streetViewControl: false,
      rotateControl: false,
      fullscreenControl: false

    });
    const trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
    let index =  0;
    function panMapArea(){
      map.panTo(({lat: rotatingMapData[index].lat, lng: rotatingMapData[index].lng}));
      map.setZoom(rotatingMapData[index].zoom);
      this.setState({location: rotatingMapData[index].location});
      index = ++index === rotatingMapData.length ? index = 0 : index++;
    }
    setInterval(panMapArea.bind(this), 10000);
  }
  loadJS(url){
    let ref = document.getElementsByTagName("script")[0];
    let script = document.createElement('script');
    script.src = url;
    script.async = true;
    ref.parentNode.insertBefore(script,ref);
  }
  render(){
    return(
      <Box title={`Live Traffic : ${this.state.location}`} icon={"google"} type={"traffic"}>
        <div ref={"map"} id={"map"}>
        </div>
      </Box>
    );
  }
}