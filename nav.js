var divmain = document.createElement("div");
divmain.setAttribute('id','back');
document.body.append(divmain);

var div = document.createElement("div");
div.setAttribute('id','con');
divmain.append(div);

var div1 = document.createElement("div");
div1.setAttribute('class','box');
divmain.append(div1);

var heading = document.createElement("h1");
heading.innerText="Page Not Found";
div1.append(heading);


var para1 = document.createElement("p");
para1.innerText="Looks like you've followed a broken link or entered a URL that doesn't exist on this site."
div1.append(para1);

var link = document.createElement("a");
link.setAttribute('href',"http://127.0.0.1:5501/index.html#");
link.innerText="< Back to page"
div1.append(link);

var link = document.getElementsByClassName('linking');
var line = document.createElement("hr");
div1.append(line);


var para2 = document.createElement("p");
para2.innerText="followed a broken link or entered a URL that doesn't exist on this site."
div1.append(para2);