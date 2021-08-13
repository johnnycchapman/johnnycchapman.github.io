function openChat() {
    document.getElementById("myChat").style.display = "block";
    document.getElementById("chat-btn").style.display = "none";
  }
  
  function minimizeChat() {
    document.getElementById("myChat").style.display = "none";
    document.getElementById("chat-btn").style.display = "block";
    document.getElementById('iframe1').style.height = "500px"
  }
  
  function maximizeChat(){
    document.getElementById('iframe1').style.height = "700px"
  }
  
  function closeChat() {
    document.getElementById("myChat").style.display = "none";
    document.getElementById("chat-btn").style.display = "none";
  }