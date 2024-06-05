

 async function main () {
    const last = document.createElement('p')
    const loader = document.querySelector('.lastPost')
    loader.innerText = 'Telechargement....'
    Wrapper.append(loader) 

     const recq = await fetch('Lien de lAPI', {
        Headers: {
            Accept: 'Application/json'
        }
    })
    if(!recq.ok) {
        loader.innerText = 'Impossible de se Connecter'
    }
}