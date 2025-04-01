window.InitUserScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script14 = function()
{
  var player = GetPlayer();
var transcript = player.GetVar("userResponse");
player.SetVar("charCount", transcript.length);
}

window.Script15 = function()
{
  var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.continuous = true; // Continuous listening
recognition.lang = 'en-AU'; // Set language to Australian English
recognition.interimResults = true; // Capture interim results

// Reference to Storyline player
var player = GetPlayer();

// Variable to store the final transcript
var finalTranscript = '';

// Flag to track if recognition is already stopped
var isRecognitionStopped = true; // Initially set to true

// Custom event for stopRecording change
var stopRecordingEvent = new Event('stopRecordingChange');

// Event handler for processing speech recognition results
recognition.onresult = function(event) {
    var interimTranscript = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript + ' ';
        } else {
            interimTranscript += event.results[i][0].transcript;
        }
    }
    var currentTranscript = finalTranscript + interimTranscript;
    player.SetVar("userResponse", currentTranscript.trim());
};

// Event handler for errors
recognition.onerror = function(event) {
    console.error('Speech recognition error detected: ' + event.error);
    player.SetVar("isRecording", false);
    isRecognitionStopped = true; // Set the flag to true
};

// Event handler when recognition ends
recognition.onend = function() {
    player.SetVar("isRecording", false);
    isRecognitionStopped = true; // Set the flag to true
};

// Function to start speech recognition
function startRecognition() {
    if (isRecognitionStopped) {
        console.log("Starting recognition");
        player.SetVar("isRecording", true);
        isRecognitionStopped = false; // Reset the flag
        recognition.start();
    }
}

// Function to stop speech recognition
function stopRecognition() {
    if (!isRecognitionStopped) {
        console.log("Stopping recognition");
        player.SetVar("isRecording", false);
        recognition.stop();
        isRecognitionStopped = true; // Set the flag to true
    }
}

// Function to handle stopRecording change
function handleStopRecordingChange() {
    var stopRecording = player.GetVar("stopRecording");
    console.log("stopRecording value:", stopRecording); // Log the value of stopRecording

    if (stopRecording) {
        console.log("Stopping recognition");
        stopRecognition();
    } else {
        console.log("No action needed, stopRecording is false");
    }
}

// Add event listener for stopRecording change
document.addEventListener('stopRecordingChange', handleStopRecordingChange);

// Function to trigger stopRecording change event
function triggerStopRecordingChange() {
    console.log("Triggering stopRecording change event");
    document.dispatchEvent(stopRecordingEvent);
}

// Monitor stopRecording variable in Storyline
function monitorStopRecording() {
    var previousValue = player.GetVar("stopRecording");

    setInterval(function() {
        var currentValue = player.GetVar("stopRecording");
        if (currentValue !== previousValue) {
            console.log("stopRecording changed from", previousValue, "to", currentValue); // Log the change
            previousValue = currentValue;
            triggerStopRecordingChange();
        }
    }, 1000); // Check every second
}

// Start monitoring stopRecording variable
monitorStopRecording();

startRecognition();
}

window.Script16 = function()
{
  var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.continuous = true; // Continuous listening
recognition.lang = 'en-AU'; // Set language to Australian English
recognition.interimResults = true; // Capture interim results

// Reference to Storyline player
var player = GetPlayer();

// Variable to store the final transcript
var finalTranscript = '';

// Flag to track if recognition is already stopped
var isRecognitionStopped = true; // Initially set to true

// Custom event for stopRecording change
var stopRecordingEvent = new Event('stopRecordingChange');

// Event handler for processing speech recognition results
recognition.onresult = function(event) {
    var interimTranscript = '';
    for (var i = event.resultIndex; i < event.results.length; ++i) {
        if (event.results[i].isFinal) {
            finalTranscript += event.results[i][0].transcript + ' ';
        } else {
            interimTranscript += event.results[i][0].transcript;
        }
    }
    var currentTranscript = finalTranscript + interimTranscript;
    player.SetVar("userResponse", currentTranscript.trim());
};

// Event handler for errors
recognition.onerror = function(event) {
    console.error('Speech recognition error detected: ' + event.error);
    player.SetVar("isRecording", false);
    isRecognitionStopped = true; // Set the flag to true
};

// Event handler when recognition ends
recognition.onend = function() {
    player.SetVar("isRecording", false);
    isRecognitionStopped = true; // Set the flag to true
};

// Function to start speech recognition
function startRecognition() {
    if (isRecognitionStopped) {
        console.log("Starting recognition");
        player.SetVar("isRecording", true);
        isRecognitionStopped = false; // Reset the flag
        recognition.start();
    }
}

// Function to stop speech recognition
function stopRecognition() {
    if (!isRecognitionStopped) {
        console.log("Stopping recognition");
        player.SetVar("isRecording", false);
        recognition.stop();
        isRecognitionStopped = true; // Set the flag to true
    }
}

// Function to handle stopRecording change
function handleStopRecordingChange() {
    var stopRecording = player.GetVar("stopRecording");
    console.log("stopRecording value:", stopRecording); // Log the value of stopRecording

    if (stopRecording) {
        console.log("Stopping recognition");
        stopRecognition();
    } else {
        console.log("No action needed, stopRecording is false");
    }
}

// Add event listener for stopRecording change
document.addEventListener('stopRecordingChange', handleStopRecordingChange);

// Function to trigger stopRecording change event
function triggerStopRecordingChange() {
    console.log("Triggering stopRecording change event");
    document.dispatchEvent(stopRecordingEvent);
}

// Monitor stopRecording variable in Storyline
function monitorStopRecording() {
    var previousValue = player.GetVar("stopRecording");

    setInterval(function() {
        var currentValue = player.GetVar("stopRecording");
        if (currentValue !== previousValue) {
            console.log("stopRecording changed from", previousValue, "to", currentValue); // Log the change
            previousValue = currentValue;
            triggerStopRecordingChange();
        }
    }, 1000); // Check every second
}

// Start monitoring stopRecording variable
monitorStopRecording();

startRecognition();
}

};
