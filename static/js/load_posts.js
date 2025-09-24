document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const displayPostsNum = 5;
    const posts = document.querySelectorAll('.page-item');
    const loadMoreButton = document.getElementById('load-more');

    // Function to show the next post
    function showNextPost(numberOfPostsToDisplay) {
        for (let i = 0; i < numberOfPostsToDisplay; i++){
            if (currentIndex < posts.length) {
                posts[currentIndex].style.display = 'flex';
                currentIndex++;
            }
        }
        
        if (currentIndex >= posts.length) {
            loadMoreButton.style.display = 'none'; // Hide button if no more posts
        }
    }

    // Show the first post and the button
    showNextPost(displayPostsNum);
    if (posts.length > 1 && currentIndex < posts.length){
        loadMoreButton.style.display = 'flex';
    }

    // Add click event to the button
    loadMoreButton.addEventListener('click', function() {
        showNextPost(displayPostsNum); // Pass the number of posts to show
    });
});