function createArticle (post) {
    const arcticle = document.createElement('article')
    arcticle.innerHTML = `
    <h2>${post.tittle}</h2>
    <p>${post.body}</p>
    `
    return arcticle
}

 async function main () {
    const last = document.createElement('p')
    const loader = document.querySelector('.lastPost')
    loader.innerText = 'Telechargement....'
    Wrapper.append(loader) 

    try {
        const recq = await fetch('https://jsonplaceholder.org/', {
            Headers: {
                Accept: 'Application/json'
            }
        })
        if(!recq.ok) {
            //loader.innerText = '//
            throw new Error('Connectez....')
        }

        for (let post of posts) {
            Wrapper.append(createArticle(post))
        }

        const posts = await recq.json
        loader.remove()
    } catch (e) {
        loader.innerText = 'Impossible de se Connecter'
        loader.computedStyleMap.color = 'red'
    }
}