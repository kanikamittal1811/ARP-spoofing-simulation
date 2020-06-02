var t1 = false;
(function () {
    document.getElementById("line1").style.display = "none";
})();
$('.terminal').terminal({
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
        var element = document.getElementById(from);
        if (from == "192.168.32.5" && to == "192.168.32.1") {
            var new_to = "client_1_router";
        } else {
            this.echo($('<p style="color:red">IP address not recognized [ one or both argument entered may be inncorrect]</p>'));
            return;
        }
        t1 = true;
        element.classList.add(new_to);
        setTimeout(function () { element.classList.remove(new_to); }, 11000);
        return "making a connection from " + from + " to " + to;
    },
    check_connection: function (system) {
        if (t1) {
            return "connection estabilished";
        } else {
            return "connection not estabilished";
        }
    },
    table: function (ip_address) {
        if (ip_address == "122") {
            this.echo($('<table><tr><th>IP address</th><th>HW type</th><th>Flags</th><th>HW address</th><th>Mask</th><th>Device</th></tr><tr><td>192.168.92.2</td><td>0x1</td><td>0x2</td><td>00:0c:29:83:06:97</td><td>*</td><td>eth0</td></tr></table>'));

        } else {
            return "no table found";
        }
    }
}, {
        greetings: 'Bash --Terminal\n'
    });