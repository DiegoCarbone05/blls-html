const firebase = require("firebase");
require("firebase/firestore");
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBP8zycIUzI067ph0QHAmJkWq5InjG8Ois",
    authDomain: "meet-konnect.firebaseapp.com",
    projectId: "meet-konnect",
    storageBucket: "meet-konnect.appspot.com",
    messagingSenderId: "759559330802",
    appId: "1:759559330802:web:8f257e7054bb60dd77a96b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var db = firebase.firestore();

//<reference path="../../../../node_modules/@types/jquery/index.d.ts" />
jQuery(function () {
    jQuery("button [title=\"Play Video\"]").attr("disabled", "true");
    window.onresize = reportWindowSize;
    jQuery("#btnStream").on("click", function () {
        jQuery("#txtLive").attr("class", "live-on");
        jQuery("#player").removeClass("hide");
        jQuery("#imgBanner").addClass("hide");
    });
    setTimeout(function () {
        $('#btnModal').trigger("click");
    }, 3000);
    $("#volver").on("click", function () {
        location.href = "/meet-konnect";
    });
    var config = db.collection("configuraciones");

    config.doc("transmision").get().then((doc)=>{

        if(doc.exists){

            console.log(doc.data());

        }
        else{

            console.log("error al abrir documento")

        }
    

    })

});
function reportWindowSize() {
    window.innerHeight;
    window.innerWidth;
}
function Ir(url) {
    location.href = url;
}
