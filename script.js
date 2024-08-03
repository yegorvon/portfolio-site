document.getElementById('recommendation-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const recommendationText = document.getElementById('recommendation').value;
    if (name.trim() && recommendationText.trim()) {
        const recommendationList = document.getElementById('recommendations-list');
        const newRecommendation = document.createElement('div');
        newRecommendation.classList.add('recommendation');
        newRecommendation.innerHTML = `<strong>${name}:</strong> ${recommendationText}`;
        recommendationList.appendChild(newRecommendation);

        document.getElementById('name').value = '';
        document.getElementById('recommendation').value = '';

        alert('Recommendation added successfully!');
    }
});


document.addEventListener('scroll', function () {
    const backToTopButton = document.getElementById('back-to-top');
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

document.getElementById('back-to-top').addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
