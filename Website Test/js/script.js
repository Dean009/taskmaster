 // used to add an activity to the gym routine

 const toadd = document.getElementById("gyminput").value;

 function newListItem() {
     let li = document.createElement("li");
     var inputValue = document.getElementById("gyminput").value;
     var t = document.createTextNode(inputValue);
     li.appendChild(t);
     if (inputValue === '') {
         alert("Please add an activity");
     } else {
         document.getElementById("activityList").appendChild(li);
     }

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