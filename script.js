

 async function main () {
    const last = document.createElement('p')
    const loader = document.querySelector('.lastPost')
    loader.innerText = 'Telechargement....'
    Wrapper.append(loader) 

    try {
        const recq = await fetch('Lien de lAPI', {
            Headers: {
                Accept: 'Application/json'
            }
        })
        if(!recq.ok) {
            //loader.innerText = '//
        }
    } caches (e) {
        loader.innerText = 'Impossible de se Connecter'
        loader.computedStyleMap.color = 'red'
    }
}