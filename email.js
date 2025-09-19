(function() {
    emailjs.init({
        publicKey: "Smm1l5N41UJklUq_p",
    });
})();

window.onload = function() {
    document.getElementById('modal-form').addEventListener('submit', function(event) {
        event.preventDefault();
        
        emailjs.sendForm('service_gr3jgrn', 'template_og1p04j', this)
            .then(() => {
                console.log('Email Sent! Success.');
                const modalEl = document.getElementById('contactModal');
                const modal = bootstrap.Modal.getInstance(modalEl);
                showAlert("Email sent successfully!", "success");
                modal.hide();
            }, (error) => {
                console.log('Email FAILED...', error);
                showAlert("Failed to send email. Please try again.", "danger");
            });
    });
}

function showAlert(message, type) {
    const alertPlaceholder = document.getElementById('alertPlaceholder');

    const wrapper = document.createElement('div');
    wrapper.innerHTML = `
        <div class="alert alert-${type} alert-dismissible fade show" role="alert">
            ${message}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    `;

    alertPlaceholder.append(wrapper);

    setTimeout(() => {
        const alert = bootstrap.Alert.getOrCreateInstance(wrapper.querySelector('.alert'));
        alert.close();
    }, 3000);
}