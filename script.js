function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  document.getElementById("navName").innerHTML ="navigator.appName is: " + navigator.appName;
  document.getElementById("navProduct").innerHTML ="navigator.product is: " + navigator.product;
  document.getElementById("navVersion").innerHTML ="navigator.appVersion is: " + navigator.appVersion;
  document.getElementById("navAgent").innerHTML ="navigator.userAgent is: " + navigator.userAgent;
  document.getElementById("navPlatform").innerHTML ="navigator.platform is: " + navigator.platform;
  document.getElementById("navLanguage").innerHTML ="navigator.language is: " + navigator.language;

  document.getElementById("window").innerHTML ="Browser inner window width: " + window.innerWidth + "px<br>" +"Browser inner window height: " + window.innerHeight + "px";
  document.getElementById("screenWidth").innerHTML = "Screen width is: " + screen.width;
  document.getElementById("screenHeight").innerHTML = "Screen height is: " + screen.height;
  document.getElementById("availWidth").innerHTML = "Available screen width is: " + screen.availWidth;
  document.getElementById("availHeight").innerHTML = "Available screen height is: " + screen.availHeight;
  document.getElementById("colorDepth").innerHTML = "Screen color depth is: " + screen.colorDepth;
  document.getElementById("pixelDepth").innerHTML = "Screen pixel depth is: " + screen.pixelDepth;

  document.getElementById("href").innerHTML = "The full URL of this page is:<br>" + window.location.href;
  document.getElementById("hostname").innerHTML = "Page hostname is: " + window.location.hostname;
  document.getElementById("pathname").innerHTML ="Page path is: " + window.location.pathname;
  document.getElementById("protocol").innerHTML ="The page protocol is: " + window.location.protocol;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    document.getElementById("geo").innerHTML =
    "Geolocation is not supported by this browser.";
  }
  
  function showPosition(position) {
    document.getElementById("geo").innerHTML =
    "Latitude: " + position.coords.latitude + "<br>" +
    "Longitude: " + position.coords.longitude;
  }
