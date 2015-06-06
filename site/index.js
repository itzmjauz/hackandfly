// sorry node gods, satan made me use jquery
$.get('contents.txt', function(data) {
  document.querySelector('#dem').innerHTML = data;
});