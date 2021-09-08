function openWin() {
  var divText = document.getElementById("azure-qna-bot").innerHTML;
  popup = window.open('', '', 'width=500,height=650');
  var doc = popup.document;
  doc.open();
  doc.write('<html><head> \
   <title>Project Hosts Bot</title> \
   <link rel="stylesheet" type="text/css" href="QnABot.css"> \
   </head><body>');
  //doc.write($("#azure-qna-bot").outerHTML());
  doc.write(divText);
  doc.write('</body></html>');
  doc.close();
}
  