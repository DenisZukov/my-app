      var xid2 = sights.features[1].properties.xid;
      var name2 = sights.features[1].properties.name;

      var api2='https://api.opentripmap.com/0.1/en/places/xid/'+xid2+'?apikey=5ae2e3f221c38a28845f05b61d2a954d288ab08e24de1e09bc302164';

      const Sight2 = await fetch(api2);
      var json2= await Sight2.json();
      let poi2= document.getElementById("poi2");

      poi2.innerHTML= "";
        if (json2.preview) {
          poi2.innerHTML += `<img src="${json2.preview.source}">`;
        }
        poi2.innerHTML += json2.wikipedia_extracts
          ? json2.wikipedia_extracts.html
          : json2.info;

          var xid3 = sights.features[3].properties.xid;
          var name3 = sights.features[3].properties.name;

          var api3='https://api.opentripmap.com/0.1/en/places/xid/'+xid3+'?apikey=5ae2e3f221c38a28845f05b61d2a954d288ab08e24de1e09bc302164';

          const Sight3 = await fetch(api3);
          var json3= await Sight3.json();
          let poi3= document.getElementById("poi3");

          poi3.innerHTML= "";
            if (json3.preview) {
              poi3.innerHTML += `<img src="${json3.preview.source}">`;
            }
            poi3.innerHTML += json3.wikipedia_extracts
              ? json3.wikipedia_extracts.html
              : json3.info;

              <React.StrictMode>
                <App />
              </React.StrictMode>,
