const accessToken = "3f3233c373724b64bdbb984de1169164 ";
const baseUrl = "https://api.api.ai/v1/";

$(document).ready(function() {
  $(".input").keypress(function(event) {
    if (event.which == 13) {
      event.preventDefault();
      send();
    }
  });
  $(".voice").click(function(event) {
    switchRecognition();
  });
});

let recognition;

function startRecognition() {
  recognition = new webkitSpeechRecognition();
  recognition.onstart = function(event) {
    updateRec();
  };
  recognition.onresult = function(event) {
    let text = "";
    for (var i = event.resultIndex; i < event.results.length; ++i) {
      text += event.results[i][0].transcript;
    }
    setInput(text);
    stopRecognition();
  };
  recognition.onend = function() {
    stopRecognition();
  };
  recognition.lang = "en-US";
  recognition.start();
}

function stopRecognition() {
  if (recognition) {
    recognition.stop();
    recognition = null;
  }
  updateRec();
}

function switchRecognition() {
  if (recognition) {
		$(".voice").removeClass("red");
		$(".voice").addClass("green");
    stopRecognition();
  } else {
		$(".voice").removeClass("green");
		$(".voice").addClass("red");
    startRecognition();
  }
}

function setInput(text) {
  $(".input").val(text);
  send();
}

function updateRec() {
	setClass(recognition);
  $(".voice").text(recognition ? "Stop" : "Speak");
}

function setClass(state) {
	if (state) {
		$(".voice").removeClass("green");
		$(".voice").addClass("red");
	} else {
		$(".voice").removeClass("red");
		$(".voice").addClass("green");
	}
}

function send() {
  let text = $(".input").val();
  $.ajax({
    type: "POST",
    url: baseUrl + "query?v=20150910",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    headers: {
      "Authorization": "Bearer " + accessToken
    },
    data: JSON.stringify({
      query: text,
      lang: "en",
      sessionId: "somerandomthing"
    }),
    success: function(data) {
      setResponse(data);
    },
    error: function() {
      setResponse("Internal Server Error");
    }
  });
  setUserMessage(text);
}

function setResponse(val) {
	if (val.result) {
		console.log(val);
		$(".chat-thread").text();

    let ul = document.querySelector(".chat-thread");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(val.result.fulfillment.speech));
    li.setAttribute("class", "botResponse");
    ul.appendChild(li);
	}
}


function setUserMessage(value) {
  let ul = document.querySelector(".chat-thread");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(value));
  li.setAttribute("class", "userMessage");
  ul.appendChild(li);
}
