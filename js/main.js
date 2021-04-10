
// mega menu section

var shop_item = document.querySelector('.shop a');
var mega_menu = document.getElementsByClassName('mega-menu');

shop_item.addEventListener('mouseover', function(){
	 mega_menu[0].style.display = 'inline-block';
});
shop_item.addEventListener('mouseout', function(){
	 mega_menu[0].style.display = 'none';
});