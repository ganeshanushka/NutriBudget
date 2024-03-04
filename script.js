document.getElementById('askButton').addEventListener('click', function() {
    const question = document.getElementById('question').value;
    fetchAIAnswer(question);
});

async function fetchAIAnswer(question) {
    const response = await fetch("https://api.openai.com/v1", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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'
        },
        body: JSON.stringify({
           model: "gpt-3.5-turbo",
           messages: [
            {
                role: "user",
                content: question
            }
           ]
        })
    });

    if (response.ok) {
        const data = await response.json();
        if(data.choices && data.choices.length > 0 && data.choices[0].message) {
            document.getElementById('answer').textContent = data.answers[0].message.content;
        }
    } else {
        document.getElementById('answer').textContent = 'Error: Could not retrieve an answer.';
    }
}
