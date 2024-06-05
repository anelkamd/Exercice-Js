

function main {
    const last = document.createElement('p')
    const loader = document.querySelector('.lastPost')
    loader.innerText = 'Telechargement....'
    Wrapper.append(loader) 

    await fetch('Lien de lAPI') {
        Headers: {
            Accept: 'Application/json'
        }
    }
}