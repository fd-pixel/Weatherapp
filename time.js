var time = document.getElementById('time');
var date = document.getElementById('date');
var today = new Date();

function startTime() {
  //Shows current time and date
  //config

  var h = today.getHours();
  var m = today.getMinutes();
  var d = today.getDate();
  var y = today.getFullYear();
  var month = new Array(); //Creates Array for months
  month[0] = 'OCAK';
  month[1] = 'ŞUBAT';
  month[2] = 'MART';
  month[3] = 'NİSAN';
  month[4] = 'MAYIS';
  month[5] = 'HAZİRAN';
  month[6] = 'TEMMUZ';
  month[7] = 'AĞUSTOS';
  month[8] = 'EYLÜL';
  month[9] = 'EKİM';
  month[10] = 'KASIM';
  month[11] = 'ARALIK';

  var n = month[today.getMonth()];
  m = checkTime(m);
  d = checkTime(d);
  h = checkTime(h);
  // s = checkTime(s);
  time.innerHTML = h + ':' + m;

  date.innerHTML = d + ' ' + n + ' ' + y;
}

function checkTime(i) {
  if (i < 10) {
    i = '0' + i;
  } // adds zero in front of numbers < 10
  return i;
}
var t = setTimeout(startTime, 500);
