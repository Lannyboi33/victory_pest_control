var ellipsisElements = document.getElementsByClassName('text-ellipsis');
for (var i = 0; i < ellipsisElements.length; i++) {
  var element = ellipsisElements[i];
  var lineHeight = parseInt(window.getComputedStyle(element).lineHeight);
  var maxHeight = lineHeight * 1; // Set the maximum height for three lines
  element.style.maxHeight = maxHeight + 'px';
}