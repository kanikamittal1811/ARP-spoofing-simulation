var user2_router = false;
(function () {
    document.getElementById("line2").style.display = "none";
    document.getElementById("line3").style.display = "none";
    document.getElementById("e2").style.display = "none";
    document.getElementById("e3").style.display = "none";
    document.getElementById("e4").style.display="none";
})();
$('.terminal-1').terminal({
    cat: function (width, height) {
        return new Promise(function (resolve) {
            const img = $('<img src="https://placekitten.com/' +
                width + '/' + height + '">');

            img.on('load', () => resolve(img));
        });
    },
    team: function () {
        return "pradyumn jain | kanika mittal | raghav verma | prahalad v rao"
    },
    connect: function (from, to) {
        if (from == "192.168.32.9" && to == "192.168.32.1") {
            var new_to = "client_2_router";
            var new_from = "e2"
        } else {
            this.echo($('<p style="color:#FF355E"> IP address not recognized [ one or both argument entered may be inncorrect]!</p>'));
            return;
        }
        user2_router = true;
        document.getElementById(new_from).style.display = "block";
        var element = document.getElementById(new_from);
        element.classList.add(new_to);
        setTimeout(function () { document.getElementById("e3").style.display = "block"; }, 5000);
        setTimeout(function () { document.getElementById("e3").style.display = "none"; }, 5500);
        setTimeout(function () { document.getElementById("e3").style.display = "block"; }, 6000);
        setTimeout(function () { document.getElementById("e3").style.display = "none"; }, 6500);
        setTimeout(function () { document.getElementById("e3").style.display = "block"; }, 7000);
        setTimeout(function () { document.getElementById("e3").style.display = "none"; }, 7500);
        setTimeout(function () { document.getElementById("e3").style.display = "block"; }, 8000);
        setTimeout(function () { document.getElementById("e3").style.display = "none"; }, 8500);
        setTimeout(function () { element.classList.remove(new_to); document.getElementById("line2").style.display = "block"; }, 10000);
        return "making a connection from " + from + " to " + to;
    },
    connection_status: function (ip_address) {
        if (user2_router && ip_address == "192.168.32.1") {
            this.echo($('<p style="color:#66FF66"> Connection estabilished!</p>'));
            return;
        } else {
            this.echo($('<p style="color:#FF355E"> No connection found [argument provided is either inncorrect or unkown]!</p>'));
            return;
        }
    },
    table: function (ip_address) {
        if (user2_router && ip_address == "192.168.32.9") {
            this.echo($('<table style="color:#66FF66"><tr><th>IP address</th><th>HW type</th><th>Flags</th><th>HW address</th><th>Mask</th><th>Device</th></tr><tr><td>192.168.92.2</td><td>0x1</td><td>0x2</td><td>00:0c:29:83:06:97</td><td>*</td><td>eth0</td></tr></table>'));
            return;
        } else {
            this.echo($('<p style="color:#FF355E"> No connection found [argument provided is either inncorrect or unkown]!</p>'));
            return;
        }
    },
    arp_attack_to_client: function(ip_addressclient){
        if(ip_addressclient!="192.168.32.5"){
            this.echo($('<p style="color:#FF355E"> No connection found [argument provided is either inncorrect or unkown]!</p>'));
            return;
        }
        else{
            //TODO: check for connection b/w client1 and router and client 2 and router
            //TODO: change table
            var red_env=document.getElementById("e4");
            //display red packet
            red_env.style.display="block";
            //display momement of red packet to fro
            red_env.classList.add("attacker_to_client");
            // establish line
            setTimeout(function(){
                document.getElementById("line3").style.display="block"
            },8500);
            //hide packet
            setTimeout(function(){
                red_env.classList.remove("attacker_to_client")
                red_env.style.display="none";
            },8600);
            //reappear packet
            setTimeout(function(){
                red_env.style.display="block";
            },9100);
            //packet to and fro to router
            setTimeout(function(){
                red_env.classList.add("client_2_router")
            },9200);
            //hide victim and router line
            setTimeout(function(){
                document.getElementById("line1").style.display="none";
            },17800);
            
            //fix here what to display after attack  
             return "attack_done";
            

        }

    }

}, {
        greetings: 'Bash --Terminal\n'
    });