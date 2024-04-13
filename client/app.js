function getCutValue() {
    var cutRadios = document.getElementsByName("cut");
    for (var i = 0; i < cutRadios.length; i++) {
      if (cutRadios[i].checked) {
        return cutRadios[i].value.toLowerCase();
      }
    }
    return "Invalid Value";
  }

function getColor(){
    var colorRadios=document.getElementsByName("color");
    for(var i=0;i<colorRadios.length;i++){
        if(colorRadios[i].checked){
            return colorRadios[i].value.toLowerCase();
        }
    }
}

function getClarity(){
    var clarityRadios=document.getElementsByName('clarity');
    for(var i=0;i<clarityRadios.length;i++){
        if(clarityRadios[i].checked){
            return clarityRadios[i].value.toLowerCase();
        }
    }
}

function onClickedEstimatePrice(){
    console.log("Estimate price button clicked");
    var carat=document.getElementById("uiCarat");
    var table=document.getElementById("uiTable");
    var depth=document.getElementById("uiDepth");
    var x=document.getElementById("uiX");
    var y=document.getElementById("uiY");
    var z=document.getElementById("uiZ");
    var cut=getCutValue();
    var color=getColor();
    var grade=getClarity()
    var estimatedPriceElement = document.getElementById("uiEstimatedPrice");
    
    //var url = "http://127.0.0.1:5000/predict_diamond_price";
    var url="/api/predict_diamond_price";
    
    $.post(url, {
        carat: parseFloat(carat.value),
        depth: parseFloat(depth.value),
        table: parseFloat(table.value),
        x: parseFloat(x.value),
        y: parseFloat(y.value),
        z: parseFloat(z.value),
        cut: cut,
        color: color,
        grade: grade
    },function(data, status) {
        //alert('clicked');
        console.log(data.estimated_price);
        //alert('hi');
        //alert(data.estimated_price);
        estimatedPriceElement.innerHTML = "<h2>" + "Estimated Price: "+data.estimated_price.toString()+"$" + "</h2>";
        console.log(status);
    });

}


function onPageLoad(){
    console.log('document loaded');
    
}

window.onload=onPageLoad;