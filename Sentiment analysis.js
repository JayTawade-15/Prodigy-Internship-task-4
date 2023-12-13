function analyzeSentiment() {
    const textInput = document.getElementById('textInput').value;

    // Perform sentiment analysis using the 'Sentiment' library
    const analyzer = new Sentiment();
    const result = analyzer.analyze(textInput);

    // Display the sentiment result
    console.log('Sentiment Analysis Result:', result);

    // Visualize the sentiment result using 'Chart.js'
    const ctx = document.getElementById('resultChart').getContext('2d');

    const resultChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Positive', 'Negative', 'Neutral'],
            datasets: [{
                data: [result.score > 0 ? result.score : 0,
                       result.score < 0 ? Math.abs(result.score) : 0,
                       result.score === 0 ? 1 : 0],
                backgroundColor: ['#4CAF50', '#FF5252', '#9e9e9e']
            }]
        },
        options: {
            responsive: true,
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Sentiment Analysis Result'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    });
}
