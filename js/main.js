'use strict'

var sec = [ 'sec01', 'sec02', 'sec03' ],
    num = sec.length;

var form = document.getElementsByName('form'),
    val = document.getElementsByName('input1'),
    btn = document.getElementById('btn01');

var text = {
  txt00: {
    txt: ''
  },
  txt01: {
    txt: ''
  },
  txt02: {
    txt: ''
  }
}

var sub = document.getElementById('sub');

btn.onclick = function(){
  for(var i = 0; i < num; i++) {
    var done = text['txt0' + i].txt
    sub.children[i].innerHTML = val[i].value
  }
}

