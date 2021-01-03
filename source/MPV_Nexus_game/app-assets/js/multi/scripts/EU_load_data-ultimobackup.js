var Id_room_EU = "";
var Name_room_EU = "";
var EU_packages = "";
var regionAeu = "";
var regionBeu = "";
var regionCeu = "";
var regionDeu="";




function getRoom(id){
//alert("SONO IN GET ROOM!");
 	Id_room_EU = id;
 //	Name_room_EU = name;

fetch('Json_Select_Package?op=get&id='+encodeURIComponent(Id_room_EU), {
		method: 'PUT',
		headers: {
				'Content-Type':'text/html"',
				//'Access-Control-Allow-Origin':'http://192.168.1.92:8080/Multiplayer_Nexus',
				'Allow-Contro-Expose-Headers': 'Content-Type'
					},
	
				})

.then(resp=>resp.text())
//.then(data => Dati_From_Fetch = data)
//.then(data => alert("DATA :"+data))
.then(data => {
	EU_packages = data;
	getEuPacks();	
})
.catch(err=>alert("To use this function, Must be Online ALL 4 REGION PLAYING"));
}


function getRoomRefresh(id){
	alert("SONO IN REFRESH ROOM!");
	 	Id_room_EU = id;
	 

	fetch('Json_Select_Package?op=get&id='+encodeURIComponent(Id_room_EU), {
			method: 'PUT',
			headers: {
					'Content-Type':'text/html"',
					//'Access-Control-Allow-Origin':'http://192.168.1.92:8080/Multiplayer_Nexus',
					'Allow-Contro-Expose-Headers': 'Content-Type'
						},
		
					})

	.then(resp=>resp.text())
	//.then(data => Dati_From_Fetch = data)
	//.then(data => alert("DATA :"+data))
	.then(data => {
		EU_packages = data;
		getEuPacksRef();
		
		
	})


	.catch(err=>alert("ERRORE : "+err));


	}



function getEuPacks() {
//	alert("DATI FROM FETCH EU: "+EU_packages);
	var obj = EU_packages.split("/");
	var regionA = obj[0];	
	var regionB = obj[1];
	var regionC = obj[2];
	var regionD = obj[3]
	regionA = regionA.split("#");
	
	regionAeu = regionA[1];
	regionAeuP = regionA[2];
	regionAeuP = regionAeuP.replace("@","");
//	alert("SOSTITUZIONE: "+regionAeuP);
	regionB = regionB.split("#");
	regionBeu = regionB[1];
	regionBeuP = regionB[2];
	regionBeuP = regionBeuP.replace("@","");

	regionC = regionC.split("#");
	regionCeu = regionC[1];
	regionCeuP = regionC[2];
	regionCeuP = regionCeuP.replace("@","");

	regionD = regionD.split("#");
	regionDeu = regionD[1];
	regionDeuP = regionD[2];
	regionDeuP = regionDeuP.replace("@","");


	localStorage.setItem("regionADataOutput", regionAeu);
	localStorage.setItem("regionBDataOutput", regionBeu);
	localStorage.setItem("regionCDataOutput", regionCeu);
	localStorage.setItem("regionDDataOutput", regionDeu);
	localStorage.setItem("Id_room_EU", Id_room_EU);
	
	localStorage.setItem("penalityA", regionAeuP);
	localStorage.setItem("penalityB", regionBeuP);
	localStorage.setItem("penalityC", regionCeuP);
	localStorage.setItem("penalityD", regionDeuP);

	
	/*alert("SOSTITUZIONE: "+localStorage.getItem("regionADataOutput"));
alert("ID ROOM: "+Id_room_EU);
alert("ID_ROOM LOCALSTORAGE: "+localStorage.getItem("Id_room_EU"));*/
//document.getElementById("id_room").innerHTML = "ARRIVATO DAL SERVER:" +regionDeu;
	//window.location.href="http://localhost:8080/Multiplayer_Nexus/EU-Index.jsp";
	window.location.href="https://game.magic-nexus.eu/EU-Index.jsp";
	//transmission = localStorage.getItem("region"+containerRegionAddebt+"DataOutput");
}

function getEuPacksRef() {
	alert("DATI FROM FETCH EU: "+EU_packages);
	var obj = EU_packages.split("/");
	var regionA = obj[0];	
	var regionB = obj[1];
	var regionC = obj[2];
	var regionD = obj[3]
	regionA = regionA.split("#");	
	regionAeu = regionA[1];
	regionAeuP = regionA[2];
	regionAeuP = regionAeuP.replace("@","");
	alert("SOSTITUZIONE: "+regionAeuP);
	regionB = regionB.split("#");
	regionBeu = regionB[1];
	regionBeuP = regionB[2];
	regionBeuP = regionBeuP.replace("@","");

	regionC = regionC.split("#");
	regionCeu = regionC[1];
	regionCeuP = regionC[2];
	regionCeuP = regionCeuP.replace("@","");

	regionD = regionD.split("#");
	regionDeu = regionD[1];
	regionDeuP = regionD[2];
	regionDeuP = regionDeuP.replace("@","");


	localStorage.setItem("regionADataOutput", regionAeu);
	localStorage.setItem("regionBDataOutput", regionBeu);
	localStorage.setItem("regionCDataOutput", regionCeu);
	localStorage.setItem("regionDDataOutput", regionDeu);
	
	//localStorage.setItem("Id_Room_EU", Id_room_EU);
	
	alert("PACCHETTO AGGIORNATO A: "+regionAeu);

}
