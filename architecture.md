# Single Player Level 1
The single player game mode has been created in order to carry out operations exclusively on the client side.
To achieve this, we have "translated" the excel file into a series of algorithms able to interact with each other, according to the chosen region, and simulate the various calculations through the formulas declared on excel.
Then the calculations have been globalized within specific javascript files, while regarding the regions 4 different local storage containers which contain the data flow have been created.
Local storage is updated almost in real time, depending on the inputs that players enter from their viewing area.

The containers are recalled through special pre-existing variables within our algorithms and, thanks to the use of some game constants, duly inserted in other javascript files, it is possible to convey this flow of information so that it can simulate the right functioning of the game and feed correctly the various output graphics created using chart.js library.
Employing a local storage and a browser memory has enabled us to simulate the game, without having to store the data in a database or use a server-side database.

![pic1](pictures/pic1.png)

# Single Player Level 2
In the multiplayer version, the operating principle explained in the "Single Player" version applies.
The algorithms to carry out the various calculations, the constant variable files and the engine to simulate the excel formulas have the same operating principles as the Single Player version, but data are stored in a single container (according to the region chosen by the player), while the other 3 versions use default values ​​and are not powered.
However, in the SP2 version regions can exchange import requests. Therefore, a trade center must be created, through which the various regions can view the requests received and possibly accept, reject or test them.
In order to create the trade center it was deemed necessary to combine the client-side logic with the server-side one, by the means of java classes, jsp pages and a mysql database.

In fact, requests are sent through ajax calls to jsp pages which use Java methods to query, modify or insert data in the correct charts in the database.
This solution allowed us to create a much more dynamic and secure tradecenter as well as a much more intuitive and 2.0 one thanks to a request list view

![pic2](pictures/pic2.png)

# Multiplayer
The architecture of the Multiplayer version is completely different from the Single Player versions 1 & 2. The Requirements provide for the possibility of having one player for each Region, who cooperatively play in order to reach the prerequisites for completing the game.
 
 
Our primary focus has been to be able to store the information of the various players and to communicate requests to the regions in real time without using local storage components for data interchange.

Each single region (player) can interact with the game using the correct interfaces (components and entry forms) in order to be able to view the effects of their actions in real time, through the use of graphics created ad hoc by the library chart.js.
In order to "capture" every single value of the input components present on the game dashboard, it was necessary to map the fields, and this led to the assignment of a unique "ID" denotation for each of them.
Once you have entered the page called "multi.jsp", the system stores one’s access information (`IdPlayer`, `IdStanza` and `Nome Region`), which are accordingly transferred to the page through an Authentication Servlet and stored in a mysql table called "player". These data are of vital importance because they represent the unique values ​​by which it will be possible to obtain the requests and information of each individual region at any time.
Once all the useful information has been collected, the JavaScript values, a sort of snapshot of all the region’s data, will then be converted into a JSON string and stored in an eu-stream table.

The data stream is updated in the same way every time a region makes an import request to another region. By the means of ajax calls, which are on the confirmation onclick button, the request and identification information of the regions are stored in a table called "request", while the complete stream of the player’s data is updated by the means of a real time call from a special java Servlet. It collects information, converts it into a Json data stream and updates it in the appropriate “eu_stream” table.
Therefore, each single player will be able to play using the data of their own Region, by the means of appropriately created local storage components, but one’s data flow will be sent only when an import or export request is made.

Through these two design choices several important results have been achieved:
-	Greater system stability: 
Limiting the flow of data interchange to individual requests avoids overloads and quantities of little useful information in the database
-	Greater freedom to play on your dashboard: 
By using local storage the player can freely simulate the result of their actions in real time.
 In addition to data exchange, a javascript function has been created which allows to check the presence of new requests received and to show the list of requests to be accepted or rejected every 3 seconds.
-	Through xml http prequest the function calls a jsp page, which in turn uses java methods to query the database and return information: 
Number of pending requests, list of requests, possibility to accept, reject or test requests.

![pic3](pictures/pic3.png)

