document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('clickIt');
    var anaplanAccount = document.getElementById('clickIt2');
    //var imgURL = chrome.extesnion.getURL("anaplan.png");
    //document.getElementById("clickIt").src = imgURL
    //checkPageButton.addEventListener('click', function() {

      //chrome.tabs.getSelected(null, function(tab) {
      //  alert("Select your option");
      //});
    //}, false);
  }, false);

  function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


  (function() {
    var dialog = document.getElementById('myFirstDialog');
    document.getElementById('show').onclick = function() {
        dialog.show();
    };

})();

(function() {
  var dialog = document.getElementById('myFirstDialog1');
  //var tenant = localStorage.getItem("OneTrust.ZenTenant")
  document.getElementById('show1').onclick = function() {
    dialog.show();
  };

})();

(function() {
  var dialog = document.getElementById('myFirstDialog2');
  document.getElementById('show2').onclick = function() {
      dialog.show();
  };

})();

(function() {
  var dialog = document.getElementById('myFirstDialog3');
  document.getElementById('show3').onclick = function() {
      dialog.show();
  };

})();

(function() {
  var dialog = document.getElementById('myFirstDialog4');
  document.getElementById('show4').onclick = function() {
      dialog.show();
  };

  var all=document.getElementsByClassName('slds-m-bottom--none ng-star-inserted');

  for(var i=0;i<all.length;i++){
   console.log(all[i].innerHTML);
  }

})();

(function() {
  var dialog = document.getElementById('myFirstDialog5');
  document.getElementById('show5').onclick = function() {
      dialog.show();
  };

})();
/*
  var dialog = document.querySelector('dialog');
  document.querySelector('#show').onclick = function() { dialog.show(); };
   //document.querySelector('#close').onclick = function() { dialog.close(); };


   document.addEventListener('keydown', function() {
       if (event.keyCode == 123) {
         alert("This function has been disabled for you!");
         return false;
       } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
         alert("This function has been disabled for you!");
         return false;
       } else if (event.ctrlKey && event.keyCode == 85) {
         alert("This function has been disabled for you!");
         return false;
       }
     }, false);

     if (document.addEventListener) {
       document.addEventListener('contextmenu', function(e) {
         alert("This function has been disabled for you!");
         e.preventDefault();
       }, false);
     } else {
       document.attachEvent('oncontextmenu', function() {
         alert("This function has been disabled for you!");
         window.event.returnValue = false;
       });
     }
*/
  //var imgURL = chrome.extension.getURL("images/myimage.png");
  //document.getElementById("someImage").src = imgURL;
