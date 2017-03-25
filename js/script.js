var present = moment().format('YYYY-MM-DD HH:mm:ss');
var premiere = moment("2017-07-16 20:30:00", "YYYY-MM-DD HH:mm:ss");

var d, h, m, s;
d = premiere.diff(present, 'd'); // Diff in days
present = moment(present).add(d, 'days');
h = premiere.diff(present, 'h'); // Diff in hours
present = moment(present).add(h, 'hours');
m = premiere.diff(present, 'm'); // Diff in minutes
present = moment(present).add(m, 'minutes');
s = premiere.diff(present, 's'); // Diff in seconds

var capa = document.getElementById("countDown");
var clock = document.createElement("tr");

countDown(d, h, m, s);
capa.appendChild(clock);

function countDown(d, h, m, s) {
    var interval = setInterval(function() {
        if (s > 0) { s--; } else {
            if (m > 0) {
                m--;
                s = 59;
            } else {
                if (h > 0) {
                    h--;
                    m = 59;
                    s = 59;
                } else {
                    if (d > 0) {
                        d--;
                        h = 24;
                        m = 59;
                        s = 59;
                    } else {
                        clearInterval(interval);
                    }
                }
            }
        }
        //document.body.innerHTML = d + " d " + h + " h " + m + " m " + s + " s"
        clock.innerHTML = "<td>"+ d + "</td> <td>" + h + "</td> <td>" + m + "</td> <td>" + s + "</td>";
    }, 1000);
}
