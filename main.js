document.addEventListener("DOMContentLoaded", function(){
    const perfilNome = document.querySelector('.profile-name');
    const perfilUserName = document.querySelector('.profile-username');
    const perfilAvatar = document.querySelector('.profile-avatar');
    const repositorios = document.querySelector('.numbers-item:nth-child(1)');
    const seguidores = document.querySelector('.numbers-item:nth-child(2)');
    const seguindo = document.querySelector('.numbers-item:nth-child(3)');
    const linkPerfil = document.querySelector('.profile-link');

    const url = 'https://api.github.com/users/Davziinn';

    fetch(url)
        .then(resposta => {
            if(!resposta.ok){
                throw new Error(`HTTP error! Status ${resposta.status}`);
            }
            return resposta.json();
        })
        .then(data => {
            perfilNome.textContent = data.name;
            perfilUserName.textContent =  `@${data.login}`;
            perfilAvatar.src = data.avatar_url;
            repositorios.innerHTML = `<h4>Repositórios</h4> ${data.public_repos}`
            seguidores.innerHTML = `<h4>Seguidores</h4> ${data.followers}`;
            seguindo.innerHTML = `<h4>Seguindo</h4> ${data.following}`;
            linkPerfil.href = data.html_url;
            linkPerfil.innerHTML = 'Ver no GitGub';
        })
        .catch(error => {
            console.error("Ocorreu um erro ao buscar os dados: ", error)
        })
})