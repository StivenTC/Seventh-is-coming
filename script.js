var present = moment().format('YYYY-MM-DD HH:mm:ss');
var premiere = moment("2017-06-25 08:30:00", "YYYY-MM-DD HH:mm:ss");

var d, h, m, s;
d = premiere.diff(present, 'd'); // Diff in days
present = moment(present).add(d, 'days');
h = premiere.diff(present, 'h'); // Diff in hours
present = moment(present).add(h, 'hours');
m = premiere.diff(present, 'm'); // Diff in minutes
present = moment(present).add(m, 'minutes');
s = premiere.diff(present, 's'); // Diff in seconds
backCount(d, h, m, s) // 0 Dias 0 Horas 1 Minuto 20 Segundos
function backCount(d, h, m, s) {
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
        document.body.innerHTML = d + " d " + h + " h " + m + " m " + s + " s"
    }, 1000);
}
