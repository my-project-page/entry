$.getJSON("https://api.ipify.org?format=json", function(data){
    $("#ip").html(data.ip);

    const ip = data.ip;
    // console.log(ip);

    // const geoApiUrl = "https://api.bigdatacloud.net/data/ip-geolocation-full?ip=" + ip + "&localityLanguage=en&key=9e4c5cf956804c6a8b8941bb76ebf456";
    // fetch(geoApiUrl)
    // .then(res => res.json())
    // .then(data => {
    //     console.log(data)
    // })
    const element = document.getElementById('submit');
    element.click();

})