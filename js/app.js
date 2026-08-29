
fetch('background.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const gradientString = `linear-gradient(${data.angle}, ${data.startColor}, ${data.endColor})`;
        
        document.body.style.backgroundImage = gradientString;
    })
    .catch(error => {
        console.error('Error loading or applying the JSON background:', error);
    });