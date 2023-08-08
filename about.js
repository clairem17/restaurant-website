// Array containing reviews
const reviews = ["The food was delicious! 10/10", "Fantastic service and tasty food", "Lovely atmosphere and I particularly enjoyed the casserole", "Had a lovely birthday at Claire's Corner! Will definitely be coming again",];

// function to pick a random review from the array
function pickReview() {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    const randomlyPickReview = reviews[randomIndex];

    document.getElementById("randomReview").textContent = randomlyPickReview;
}

