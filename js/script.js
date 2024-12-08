document.addEventListener('DOMContentLoaded', () => {
    // Handle Tamagotchi button click
    const imageButton = document.querySelector('.image-button');
    imageButton.addEventListener('click', () => {
        console.log("Tamagotchi button clicked!");
    });

    // Add hover effect for FYI note
    const fyiNote = document.querySelector('.fyi');
    fyiNote.addEventListener('mouseover', () => {
        fyiNote.style.backgroundColor = '#ffff66'; // Highlight color
    });
    fyiNote.addEventListener('mouseout', () => {
        fyiNote.style.backgroundColor = '#cced28'; // Reset color
    });

    // Display an alert on load (Optional)
    console.log("Page loaded successfully!");
});
