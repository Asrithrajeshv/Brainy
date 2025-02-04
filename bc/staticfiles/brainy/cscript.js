document.getElementById('send-query').addEventListener('click', () => {
    const userQuery = document.getElementById('user-query').value;

    fetch('/chatbot-response/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': getCookie('csrftoken')  // Ensure CSRF token is included
        },
        body: JSON.stringify({ query: userQuery })
    })
    .then(response => response.json())
    .then(data => {
        const chatOutput = document.getElementById('chat-output');
        const response = document.createElement('p');
        response.textContent = `Bot: ${data.response}`;
        chatOutput.appendChild(response);
    })
    .catch(error => console.error('Error:', error));
});

// CSRF Token helper function
function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
