var itemList = document.getElementById('contenttitle');
var filter = document.getElementById('filter');

itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);


function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('h1');
    // Convert to an array
    Array.from(items, function(item){
      var itemName = item.firstChild.textContent;
      if(itemName.toLowerCase().indexOf(text) != -1){
        item.style.display = 'list-item';
      } else {
        item.style.display = 'none';
      }
    });
  }
  
  