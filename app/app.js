
import * as Model from "../model/model.js";


function initURLListener(){
    $(window).on("hashchange", Model.changeRoutes);
    Model.changeRoutes(); 
}

$(document).ready(function () { 
   
  //console.log(Model.wordArray);
  initURLListener();
 
});

 