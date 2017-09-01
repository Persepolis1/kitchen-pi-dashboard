import './Traffic.styl'
import React,{Component} from "react";
import Box from "../Box/index";

export default class Traffic extends Component{
  constructor(){
    super();
  }
  componentDidMount(){
    window.initMap = this.initMap;
    this.loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyDWJLkLsNWLpDiJBPKaZdZuVLMNka0FAQU&callback=initMap');
  }
  initMap(){
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 11,
      center: {lat: 45.49812, lng: -73.7564797}
    });

    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map)
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
      <Box title={"Travel Times"} icon={"google"} type={"traffic"}>
        <div ref={"map"} id={"map"}>
        </div>
      </Box>
    );
  }
}