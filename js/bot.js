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
    stopRecognition();
  } else {
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
}

function setClass(state) {
	if (state) {
		$(".voice").addClass("red");
	} else {
		$(".voice").removeClass("red");
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
		$(".chatArea").text();

    let ul = document.querySelector(".chatArea");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(val.result.fulfillment.speech));
    li.setAttribute("class", "botResponse");
    ul.appendChild(li);

    let chatEle = document.querySelector(".chatArea");
    chatEle.scrollTop = chatEle.scrollHeight;
	}
}


function setUserMessage(value) {
  let ul = document.querySelector(".chatArea");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(value));
  li.setAttribute("class", "userMessage");
  ul.appendChild(li);

  let chatEle = document.querySelector(".chatArea");
  chatEle.scrollTop = chatEle.scrollHeight;
}
