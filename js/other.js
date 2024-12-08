document.addEventListener('mousemove', function (e) {
    var handImage = document.getElementById('bad-hand-follow');
    var offsetX = -430; 
    var offsetY = -170; 

    handImage.style.left = e.pageX + offsetX + 'px'; 
    handImage.style.top = e.pageY + offsetY + 'px';  
    handImage.style.display = 'block';               
  });

