var a;
var b;
var c;
var d;

var aa;
var bb;
var cc;
var dd;

//alert("local storage el A CASO: "+localStorage.getItem("el_tr_parse_A")+ "e BIO a caso "+localStorage.getItem("bio_fr_parse_A"));


function ResultBalancer() {

a = localStorage.setItem("el_tr_parse_A", "1");
b = localStorage.setItem("el_tr_parse_B", "1");
c = localStorage.setItem("el_tr_parse_C", "1");
d = localStorage.setItem("el_tr_parse_D", "1");

aa = localStorage.setItem("bio_fr_parse_A", "1");
bb = localStorage.setItem("bio_fr_parse_B", "1");
cc = localStorage.setItem("bio_fr_parse_C", "1");
dd = localStorage.setItem("bio_fr_parse_D", "1");

a = localStorage.getItem("el_tr_parse_A", "1");
b = localStorage.getItem("el_tr_parse_B", "1");
c = localStorage.getItem("el_tr_parse_C", "1");
d = localStorage.getItem("el_tr_parse_D", "1");

aa = localStorage.getItem("bio_fr_parse_A", "1");
bb = localStorage.getItem("bio_fr_parse_B", "1");
cc = localStorage.getItem("bio_fr_parse_C", "1");
dd = localStorage.getItem("bio_fr_parse_D", "1");


}
