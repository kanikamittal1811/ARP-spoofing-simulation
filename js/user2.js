var user2_router = false;
(function () {
    document.getElementById("line2").style.display = "none";
    document.getElementById("line3").style.display = "none";
    document.getElementById("e2").style.display = "none";
    document.getElementById("e3").style.display = "none";
    document.getElementById("e5").style.display = "none";
    document.getElementById("e4").style.display = "none";
    document.getElementById("cross-ani").style.display = "none";
    document.getElementById("cross-ani1").style.display = "none";
    document.getElementById("at_man").style.display = "none";
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
        setTimeout(function () {
            element.classList.remove(new_to); document.getElementById("line2").style.display = "block"; document.getElementById(new_from).style.display = "none";
        }, 10000);
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
    table: function () {
        if (user2_router) {
            this.echo($(cur_user_table));
            return;
        } else {
            this.echo($('<p style="color:#FF355E"> No connection found [argument provided is either inncorrect or unkown]!</p>'));
            return;
        }
    },
    arp_attack_to_client: function (ip_addressclient) {
        if (ip_addressclient == "192.168.32.5" && user2_router) {
            //TODO: check for connection b/w client1 and router and client 2 and router
            //TODO: change table
            setTimeout(function () { document.getElementById("e5").style.display = "block"; }, 5000);
            setTimeout(function () { document.getElementById("e5").style.display = "none"; }, 5500);
            setTimeout(function () { document.getElementById("e5").style.display = "block"; }, 6000);
            setTimeout(function () { document.getElementById("e5").style.display = "none"; }, 6500);
            setTimeout(function () { document.getElementById("e5").style.display = "block"; }, 7000);
            setTimeout(function () { document.getElementById("e5").style.display = "none"; }, 7500);
            setTimeout(function () { document.getElementById("e5").style.display = "block"; }, 8000);
            setTimeout(function () { document.getElementById("e5").style.display = "none"; }, 8500);

            setTimeout(function () { document.getElementById("e3").style.display = "block"; }, 13600);
            setTimeout(function () { document.getElementById("e3").style.display = "none"; }, 14600);
            setTimeout(function () { document.getElementById("e3").style.display = "block"; }, 15100);
            setTimeout(function () { document.getElementById("e3").style.display = "none"; }, 15600);
            setTimeout(function () { document.getElementById("e3").style.display = "block"; }, 16100);
            setTimeout(function () { document.getElementById("e3").style.display = "none"; }, 16600);
            setTimeout(function () { document.getElementById("e3").style.display = "block"; }, 17100);
            setTimeout(function () { document.getElementById("e3").style.display = "none"; }, 17600);
            var red_env = document.getElementById("e4");
            //display red packet
            red_env.style.display = "block";
            //display momement of red packet to fro
            red_env.classList.add("attacker_to_client");
            // establish line
            setTimeout(function () {
                document.getElementById("line3").style.display = "block"
            }, 11000);
            //hide packet
            setTimeout(function () {
                red_env.classList.remove("attacker_to_client")
                red_env.style.display = "none";
            }, 8600);
            //display cross
            setTimeout(function () {
                document.getElementById("cross-ani").style.display = "block";
            }, 8600);
            //hide cross
            setTimeout(function () {
                document.getElementById("cross-ani").style.display = "none";
            }, 9600);
            setTimeout(function () {
                document.getElementById("cross-ani").style.display = "block";
            }, 10100);
            setTimeout(function () {
                document.getElementById("cross-ani").style.display = "none";
            }, 10600);
            setTimeout(function () {
                document.getElementById("cross-ani").style.display = "block";
            }, 11100);
            setTimeout(function () {
                document.getElementById("cross-ani").style.display = "none";
            }, 11100);
            //hide victim and router line
            setTimeout(function () {
                document.getElementById("line1").style.display = "none";
            }, 11100);
            //reappear packet
            setTimeout(function () {
                red_env.style.display = "block";
            }, 9600);
            //packet to and fro to router
            setTimeout(function () {
                red_env.classList.add("client_2_router")
            }, 9600);
            //hide packet
            setTimeout(function () {
                red_env.style.display = "none";
                document.querySelector(".attacker").style.display = "block";

            }, 18500);

            //file blink
            setTimeout(function () {
                document.getElementById("file_arp").classList.remove("file_ani");
                document.getElementById("file_arp").classList.add("file_fixed");
                document.getElementById("file_arp").style.display = "none";
            }, 18500);
            setTimeout(function () {
                document.getElementById("file_arp").style.display = "block";
            }, 19500);
            setTimeout(function () {
                document.getElementById("file_arp").style.display = "none";
            }, 20500);
            setTimeout(function () {
                document.getElementById("file_arp").style.display = "block";
            }, 21500);




            //cross on top line

            setTimeout(function () {
                document.getElementById("cross-ani1").style.display = "none";
            }, 21600);
            setTimeout(function () {
                document.getElementById("cross-ani1").style.display = "block";
            }, 22100);
            setTimeout(function () {
                document.getElementById("cross-ani1").style.display = "none";
            }, 22600);
            setTimeout(function () {
                document.getElementById("cross-ani1").style.display = "block";
            }, 23100);
            setTimeout(function () {
                document.getElementById("cross-ani1").style.display = "none";
            }, 23600);



            //back to original connections
            setTimeout(function () {
                document.getElementById("line3").style.display = "none"
            }, 24100);
            setTimeout(function () {
                document.getElementById("line1").style.display = "block";
            }, 24600);

            this.echo($('<p style="color:#FF355E"> Attack In Progress!</p>'));
            return;
        }
        else {
            this.echo($('<p style="color:#FF355E"> No connection found [argument provided is either inncorrect or unkown]!</p>'));
            return;
        }
    },


}, {
        greetings: 'Bash --Terminal\n'
    });