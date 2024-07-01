document.getElementById('addImage').onclick = function() {
    const url = document.getElementById('imageUrl').value;
    if (url) {
        const gallery = document.getElementById('gallery');
        
        const img = document.createElement('img');
        img.src = url;
        img.alt = "Gallery Image";

        img.onclick = function() {
            showModal(url);
        };

        gallery.appendChild(img);
        document.getElementById('imageUrl').value = ''; // Clear the input field
    }
};

function showModal(url) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    modalImage.src = url;
    modal.style.display = 'flex';
}

function hideModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}