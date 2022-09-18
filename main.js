var SpeechRecognition = window.webkitSpeechRecognition;
  var Content;
var recognition = new SpeechRecognition();

function start()
{
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

 Content = event.results[0][0].transcript;

    console.log(Content);
      if(Content =="take my selfie")
      {
        console.log("taking selfie --- ");
        speak();
      }
}


function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Taking you Selfie in 5 seconds";

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function()
    { 
        take_snapshot();
        image_id="selfie1";
        speak_data = "Taking you Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        save();
    }, 5000);
    setTimeout(function()
    { 
        take_snapshot();
        image_id="selfie1";
        speak_data = "Taking you Selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        save();
    }, 10000);
}

 
camera = document.getElementById("camera");
Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}


function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}