var MAX_PRESSURE = 0;
var N_PASSENGERS = 0;
var TOTAL_WEIGHT = 0;
var FRONT = 0;
var REAR = 0;
document.getElementById("front").innerHTML = 0;
document.getElementById("rear").innerHTML = 0;

/*Resolve Function*/  

function resolve(){
    
    const mm_cm = 1/10;
    const PERCENT = 1/100;
    var CAR_EMPTY_WEIGHT = parseInt(document.getElementById("a").value);
    var LOAD = parseFloat(document.getElementById("b").value);
    var TIRE_WIDE = parseInt(document.getElementById("c").value);
    var TIRE_PROFILE = parseInt(document.getElementById("d").value);
    var RIM_SIZE = parseInt(document.getElementById("e").value);
    var WORD0 = "";
    var LOADED_EMPTY = document.getElementsByName("passengers");
    for (let i = 0 ; i < LOADED_EMPTY.length ; i++) {
        if(LOADED_EMPTY[i].checked) {
            WORD0 = ""+ LOADED_EMPTY[i].value;
        } 
    }
    var N_PASSENGERS = parseFloat(WORD0);

    if (isNaN(LOAD)){
        LOAD = 0;
    }
    var RIM_SIZECM = RIM_SIZE * 2.54; 
    var TIRE_WIDECM = TIRE_WIDE * mm_cm;
    var TIRE_PROFILECM = TIRE_WIDECM * TIRE_PROFILE * PERCENT;
    var TIRE_DIAMETER = RIM_SIZECM + (TIRE_PROFILECM * 2);
    var RIM_RELATION = ((Math.sqrt(TIRE_DIAMETER)) / 7.3);
    const CAR_TIRES = 4;
    const DRIVER_WEIGHT = 75;
    var PASSENGERS = (DRIVER_WEIGHT * N_PASSENGERS);
    var LOADED_CAR_WEIGHT_F = ((CAR_EMPTY_WEIGHT + PASSENGERS  + DRIVER_WEIGHT)/ CAR_TIRES);
    var LOADED_CAR_WEIGHT_R = ((CAR_EMPTY_WEIGHT + PASSENGERS + DRIVER_WEIGHT) / CAR_TIRES) + LOAD;
    var CONTACT_AREA = ((TIRE_PROFILECM * TIRE_WIDECM * Math.PI) / 4) / RIM_RELATION ;
    var FRONT = (LOADED_CAR_WEIGHT_F / CONTACT_AREA);
    var REAR = (LOADED_CAR_WEIGHT_R / CONTACT_AREA);
    var WORD1 = "";
    var UNITS = document.getElementsByName("units");
    for (let i = 0 ; i < UNITS.length ; i++) {
        if(UNITS[i].checked) {
            WORD1 = ""+ UNITS[i].value;
        } 
    }
    var UNIT = parseFloat(WORD1);

    var PRESSURE_FRONT = (FRONT.toFixed(2)) * UNIT;
    var PRESSURE_REAR = (REAR.toFixed(2)) * UNIT;

    if (UNIT > 10) {
        document.getElementById("front").innerHTML = Math.round(PRESSURE_FRONT) + " PSI" ;
        document.getElementById("rear").innerHTML = Math.round(PRESSURE_REAR) + " PSI" ;
    }else {
        document.getElementById("front").innerHTML = PRESSURE_FRONT.toFixed(1) + " Kg/cm²" ;
        document.getElementById("rear").innerHTML = PRESSURE_REAR.toFixed(1) + " Kg/cm²" ;
    }
    if(isNaN(REAR)){
        document.getElementById("front").innerHTML = 0;
        document.getElementById("rear").innerHTML = 0;
    }
}
function cleaner(){
    document.getElementsByName("myform").reset;
    document.getElementById("front").innerHTML = 0;
    document.getElementById("rear").innerHTML = 0;
}