document.addEventListener('mousemove', function (e) {
    var handImage = document.getElementById('hand-follow');
    var offsetX = -150; // Adjust this value to bring the image closer horizontally
    var offsetY = -60; // Adjust this value to bring the image closer vertically
    

    handImage.style.left = e.pageX + offsetX + 'px'; // Move horizontally with cursor
    handImage.style.top = e.pageY + offsetY + 'px';  // Move vertically with cursor
    handImage.style.display = 'block';               // Make the image visible as the cursor moves
  });

