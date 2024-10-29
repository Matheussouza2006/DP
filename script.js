// Função para validar o formulário
document.getElementById("contactForm").onsubmit = function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        alert("Formulário enviado com sucesso!");
        // Aqui você pode adicionar lógica para enviar os dados, por exemplo, usando AJAX
    }
};

// Função para abrir a imagem na galeria
function openModal(image) {
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.onclick = function() {
        document.body.removeChild(modal);
    };

    const modalImg = document.createElement("img");
    modalImg.src = image.src;
    modalImg.classList.add("modal-content");
    
    const closeBtn = document.createElement("span");
    closeBtn.classList.add("close");
    closeBtn.innerHTML = "&times;";
    closeBtn.onclick = function() {
        document.body.removeChild(modal);
    };

    modal.appendChild(closeBtn);
    modal.appendChild(modalImg);
    document.body.appendChild(modal);
}
