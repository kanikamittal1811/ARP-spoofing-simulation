var user2_router = false;
(function () {
    document.getElementById("line2").style.display = "none";
    document.getElementById("e2").style.display = "none";
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
    }
}, {
        greetings: 'Bash --Terminal\n'
    });