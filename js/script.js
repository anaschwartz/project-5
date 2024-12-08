document.addEventListener('DOMContentLoaded', () => {
    // Handle Tamagotchi button click
    const imageButton = document.querySelector('.image-button');
    imageButton.addEventListener('click', () => {
        console.log("Tamagotchi button clicked!");
    });

    console.log("Page loaded successfully!");
});
