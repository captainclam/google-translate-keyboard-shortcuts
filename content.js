key('`', function() {
  var result = document.getElementById('result_box').innerText;
  var components = window.location.hash.substr(1).split('/');
  window.location = '#' + components[1] + '/' + components[0] + '/' + result; // components[2];
  document.getElementById('source').select();
  return false;
});
