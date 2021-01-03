function Loadtrade(region)
{
    if (region.length != 0)
    {

        var url = "Auth.jsp?Region="+region;
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById("tradecenter").innerHTML = this.responseText;
          }else{
        	document.getElementById("tradecenter").innerHTML = " <img src='images/ajax-loader.gif' style=\"width:64px;text-align:center;\">"; 
          }
        };
        xhttp.open("GET", url, true);
        xhttp.send();
       
    }else{
        document.getElementById("tradecenter").innerHTML = ""; 
    } 
}
