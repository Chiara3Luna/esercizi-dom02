document.addEventListener('DOMContentLoaded', function() {
    // Array di nomi
    let nomi = ['Mattias', 'Arcadia', 'Piergiorgio'];
    
    // Ottenere il dropdown menu
    let dropdownMenu = document.getElementById('dropdownMenu');
    
    // Creare gli elementi del dropdown
    nomi.forEach(function(nome) {
        let nomeLink = document.createElement('a');
        nomeLink.classList.add('dropdown-item');
        nomeLink.href = '#';
        nomeLink.textContent = nome;
        dropdownMenu.appendChild(nomeLink);
    });
});
