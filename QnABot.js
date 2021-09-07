function openChat() {
  document.getElementById("azure-qna-bot").style.display = "block";
  document.getElementById("qna-chat-btn").style.display = "none";
}

function minimizeChat() {
  document.getElementById("azure-qna-bot").style.display = "none";
  document.getElementById("qna-chat-btn").style.display = "block";
  document.getElementById('chat-bot-iframe').style.height = "500px"
}

function closeChat() {
  document.getElementById("azure-qna-bot").style.display = "none";
  document.getElementById("qna-chat-btn").style.display = "none";
}

function openWin() {
  var divText = document.getElementById("azure-qna-bot").innerHTML;
  popup = window.open('', '', 'width=500,height=650');
  var doc = popup.document;
  doc.open();
  doc.write('<html><head> \
   <title>Project Hosts Bot</title> \
   <link rel="stylesheet" type="text/css" href="https://gitcdn.link/repo/johnnycchapman/johnnycchapman.github.io/master/QnABot.css"> \
   </head><body>');
  //doc.write($("#azure-qna-bot").outerHTML());
  doc.write(divText);
  doc.write('</body></html>');
  doc.close();
}
  