///////////////////////////////
//    Blocked Page Script    //
///////////////////////////////

// This is run when you load the blocked site.



// Big Brother is watching.



////// Begin Code //////

// Just sets the info of the blocked page.
function setInfo() {
    try {
    var site = new URLSearchParams(window.location.search).get("site");
    var category =  new URLSearchParams(window.location.search).get("category");
    var categoryElem = document.getElementById("category");
    var siteElem = document.getElementById("site");
    categoryElem.innerHTML = atob(category);
    siteElem.innerHTML = atob(site);
    } catch(err) {
        //Do nothing. This is for suppressing javascript errors.
    }
}

// On page load, set the info. Duh..
 document.addEventListener("DOMContentLoaded", function(event) {
      setInfo();
  });