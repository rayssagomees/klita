// Bootstrap de carregamento da API -->
(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({
    key: "AIzaSyC9CmVUVCbVhXEePRFaLKNfLL95YouS6Ig",
    v: "weekly",
    // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
    // Add other bootstrap parameters as needed, using camel case.
});

// Script de inicialização do mapa

let map;
let center =  { lat: -15.9089215, lng: -52.2419165 };

async function initMap() {
  await google.maps.importLibrary("maps");
  await google.maps.importLibrary("marker");

  map = new google.maps.Map(document.getElementById("map"), {
    center,
    zoom: 17,
    mapId: "DEMO_MAP_ID",
  });

  addMarker();
}

async function addMarker() {
  const marker = new google.maps.marker.AdvancedMarkerElement({
    map,
    position: center,
  });
}

initMap();