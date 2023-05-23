window.onload = function (){
    var dino = document.getElementById("dino");
    var cactus = document.getElementById("tus");
    var cactus2 = document.getElementById("tus2");
    var cactus3 = document.getElementById("tus3");
    var toach = document.getElementById("toach");
    var points = document.getElementById("points");
    var point_p = document.getElementById("point_p");
    var point = 0;
    var node = document.createTextNode("Ваш счет:"+point);
    var count = -250;
    var pos_down = 80;
    var pos_up = 0;
    var stop = 1;

    var t_tus = setInterval(move_tus, 10);
    var num = 0;
  
    
    
    toach.onclick = function jump(){
        
        if(stop == 1){
            var t_din = setInterval(move_din, 8);
        }
        function move_din (){
            if(pos_up == 80){
                dino.style.bottom = pos_down +"px";
                pos_down--;
                if(pos_down == 0){
                    clearInterval(t_din);
                    pos_down = 80;
                    pos_up = 0;
                    stop = 1;
                }
            }
            else{
                dino.style.bottom = pos_up + "px";
                pos_up++;
                stop = 0;
            }
        }
              
    }
    
    function move_tus(){
        if(count == 120){
            count = -250;
            ++point;
            points.innerHTML = "Ваш счет: "+point;
            }
        else{
            cactus2.style.right = "-250px"
            cactus.style.right = count + "px";
            count++;
            if(point > 5){
                cactus2.style.right = (count-0) + "px";
            }
        }
        if (count > 18 && count < 70){
            if(pos_up < 30 | pos_down < 30){
                alert("fail!!!")
                count = -250
                point = 0;
                points.innerHTML = "Ваш счет:" + point
            }
            
        }
        
    }
    
    window.onload = function() {
    var p = document.createElement("p");
    var node = document.createTextNode("This is new");
    p.appendChild(node);

    var parent = document.getElementById("demo");
    var child = document.getElementById("p1");
    parent.replaceChild(p, child);
};
    
};
    