import React from "react";
import "./Map.css";
const Map = () => {
  return(
    <>
    
    <iframe className="map"
      src="https://maps.google.com/maps?q=3QV6+497%D8%8C%20%D8%B7%D8%B1%D9%8A%D9%82%20%D8%A7%D9%84%D8%A5%D8%B3%D9%83%D9%86%D8%AF%D8%B1%D9%8A%D8%A9%20-%20%D9%85%D8%B1%D8%B3%D9%89%20%D9%85%D8%B7%D8%B1%D9%88%D8%AD%D8%8C%20%D8%A7%D9%84%D8%B9%D8%AC%D9%85%D9%8A%20%D8%A7%D9%84%D8%A8%D8%AD%D8%B1%D9%8A%D8%8C%20%D9%82%D8%B3%D9%85%20%D8%A7%D9%84%D8%AF%D8%AE%D9%8A%D9%84%D8%A9%D8%8C,%20Dekhela,%20Alexandria%20Governorate&t=&z=13&ie=UTF8&iwloc=&output=embed"
      frameBorder={0}
      scrolling="no"
    
    />
    <style
      dangerouslySetInnerHTML={{
        __html:
          ".mapouter{display:table;}.gmap_canvas{overflow:hidden;position:relative;height:400px;width:1080px;background:#fff;}"
      }}
    />
    <style
      dangerouslySetInnerHTML={{
        __html:
          ".gmap_canvas iframe{position:relative !important;z-index:2 !important;}.gmap_canvas a{color:#fff !important;position:absolute !important;top:0 !important;left:0 !important;z-index:0 !important;}"
      }}
    />
    
    </>
  )
}
export default Map;