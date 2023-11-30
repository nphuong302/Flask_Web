function deleteNote(noteId) {
    fetch('/delete-note', {
        method: 'POST',
        body: JSON.stringify({ noteId: noteId}),})
        .then((_res) => {
            if (_res.ok) {
                window.location.href = '/';
            } else {
                console.error('Failed to delete note: ' + noteId);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
}