 // used to add an activity to the gym routine

 const toadd = document.getElementById("gyminput").value;

 function newListItem() {
     let li = document.createElement("li");
     var inputValue = document.getElementById("gyminput").value;
     var t = document.createTextNode(inputValue);
     li.appendChild(t);
     if (inputValue === '') {
         alert("Please add an activity"); // needs changed to be more modern
     } else {
         document.getElementById("activityList").appendChild(li);
     }

     var span = document.createElement("SPAN");
     var txt = document.createTextNode("\u2261");
     span.className = "add";
     span.appendChild(txt);
     li.appendChild(span);

     document.getElementById("gyminput").value = "";
     var span = document.createElement("SPAN");
     var txt = document.createTextNode("\u00D7");
     span.className = "close";
     span.appendChild(txt);
     li.appendChild(span);

     for (i = 0; i < close.length; i++) {
         close[i].onclick = function () {
             var div = this.parentElement;
             div.style.display = "none";
         }
     }

     // if an item is in the list, allow it to be dragged into the containment 'rightcontent'
     $("li").draggable({
         containment: ".rightcontent"
     });

 }

 var myNodelist = document.getElementsByTagName("li");
 var i;
 for (i = 0; i < myNodelist.length; i++) {
     var span = document.createElement("SPAN");
     var txt = document.createTextNode("\u00D7");
     span.className = "close";
     span.appendChild(txt);
     myNodelist[i].appendChild(span);
 }

 var close = document.getElementsByClassName("close");
 var i;
 for (i = 0; i < close.length; i++) {
     close[i].onclick = function () {
         var div = this.parentElement;
         div.style.display = "none";
     }
 }
 // end of gym routine adding

 // cookie banner - conflict with the id close with code above
 if (localStorage.getItem('cookieSeen') != 'shown') {
     $('.cookie-banner').delay(2000).fadeIn();
     localStorage.setItem('cookieSeen', 'shown')
 };

 $('.close').click(function () {
     $('.cookie-banner').fadeOut();
 })

 function newformactivity() {

 }