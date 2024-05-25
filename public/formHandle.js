const Name = document.getElementById('name');
const Email = document.getElementById('email');
const Score = document.getElementById('score');
const Form = document.getElementById('gm-form');
const Restart = document.getElementById('restart');

Restart.addEventListener('click', () => {
    location.reload();
});
Form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = {
        name: Name.value,
        email: Email.value,
        score: parseInt(Score.textContent.replace('Your Score: ', ''))
    };
    try {
        const response = await fetch('/api/score', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if (response.ok) {
            console.log('Form data submitted successfully');
            Form.reset();
        } else {
            console.error('Form data submission failed');
        }

    } catch (error) {
        console.error('An error occurred:', error);
    }
});