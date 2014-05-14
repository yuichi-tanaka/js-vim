console.log('js_vim');
var js_vim = {
};
js_vim.MODE_INERT = 'insert';
js_vim.MODE_VIEW = 'view';
js_vim.MODE_COMMAND= 'commnad';


// debugger
  var debug = function(type,message){
    var _debug = console.log;
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth()+1;
    var day = now.getDate();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    var timestamp = year + '/' + month + '/' + day + ' ' + hour + ':' + minute + ':' +second;
    console.log(timestamp + type);
  };
// end debugger

// key_code
var key_code = function(e){
  console.dir(e);
  debug(e.keyCode);
  debug(e.shiftKey);
  debug(e.ctrlKey);
  debug(e.altKey);
};
// end key_code

var get_mode = function(){
}

//create layout


//mapping
js_vim.debug = debug;
document.addEventListener('keydown',key_code);

//test
  js_vim.debug('hoge','fuga');
