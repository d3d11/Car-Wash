document.addEventListener("DOMContentLoaded", function () {
    const reviews = document.querySelectorAll(".review");
    let currentIndex = 0;

    // Function to display the current review
    function showReview(index) {
        reviews.forEach((review, i) => {
            review.style.transform = `translateX(${100 * (i - index)}%)`;
        });
    }

    // Initialize by showing the first review
    showReview(currentIndex);

    // Arrow click event listeners
    const prevArrow = document.querySelector(".arrow.prev");
    const nextArrow = document.querySelector(".arrow.next");

    prevArrow.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        showReview(currentIndex);
    });

    nextArrow.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % reviews.length;
        showReview(currentIndex);
    });
});
