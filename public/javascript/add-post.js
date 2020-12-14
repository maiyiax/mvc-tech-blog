async function newFormHandler(event) {
    event.preventDefault();

    // get title
    const title = document.querySelector('input[name="post-title"]').value;
    // get blog entry
    const blog = document.querySelector('input[name="blog"]').value;

    const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            blog
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);