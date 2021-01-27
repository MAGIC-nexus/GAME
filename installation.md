# Installation requirements

- Java 1.8
- Apache Tomcat 8 or higher
- Mysql Server
- MySql database
- **Nexus.war**

# Installation and execution

Make sure you have a version of Java installed on your machine
at least 1.8.

For more information:
https://www.java.com/

## Customization of database location
The file `config.properties` holds the details about the personal database instance to use:
  URL, login and password 
 
 with the format:
 
```
db.host = <IPserver>/<nomedb> 

db.login = <login_accesso_db>

db.password = <password_accesso_db>
```

Any time the file has been edited You need to restart the Tomcat server and the application will point to the custom database. A "*Connessione Ok*" message will appear in the log file of Tomcat.

## Apache Tomcat 8:
Download the Apache Tomcat “Binary Distributions”

For more information on download:
https://tomcat.apache.org/download-80.cgi

For more information on the content of the different distributions:
https://downloads.apache.org/tomcat/tomcat-8/v8.5.60/README.html

Once you have selected the most suitable version for your operating system, start the installation wizard.

Once installation is complete, a "webapps" folder will be available in the path you have chosen.
Inside the folder you will need to store the Magic.war file.
Once the server has restarted, the project will be available at the following address:

`http://localhost:8080/Magic`

# Main contents of the Magic.war file

`WEB-INF/classes/eligesoft`
This folder contains all the .class and.java files useful for authentication operations and data exchange in the Multiplayer version

`/WEB-INF/lib`
Library used .jar

`webapps/Magic`
Root of the project

`webapps/Magic/magic.jsp`
Game page for SP1 and SP2 versions

`webapps/Magic/Multi.jsp`
Game page for Multiplayer version

`/webapps/Magic/app-assets/js/scripts`
Path of the main .js files useful for the exchange part, in the SP1 and SP2 versions, and for the visualization of the same

`/webapps/Magic/_trade.js`
Javascript file containing control functions for SP1 and SP2 versions

`/webapps/Magic/app-assets/js/multi/scripts`
Path of the main .js files useful for displaying data in Multiplayer

`/webapps/Magic/_trade_multi.js`
Javascript file containing control functions for the Multiplayer version
