if ("serviceWorker" in navigator){
  navigator.serviceWorker.register("syncsw.js").then(registration => {
    console.log("SW Sync Registered!");
    console.log(registration);
  }).catch(error => {
    console.log("SW Sync Registration Failed!");
    console.log(error);
  });
}
navigator.serviceWorker.ready.then(function(registration) {
  registration.periodicSync.register({
    tag: 'get-latest-news',         
    minPeriod: 12 * 60 * 60 * 1000, 
    powerState: 'auto',   
    networkState: 'online'  
  }).then(function(periodicSyncReg) {
    // success
  }, function() {
    // failure
  })
});
