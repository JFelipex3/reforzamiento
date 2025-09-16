import type { GiphyRandomResponse } from "../data/giphy.response"; // Se define como type cuando solo se usara como tipo de dato

const API_KEY = 'JqPQQYfxYvrTvDsWNaQPbWgyUtruUCUz';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);

const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);
}

myRequest
    .then( (resp) => resp.json() )
    .then( ( {data} : GiphyRandomResponse) => {
        // const imageUrl = data.data.images.original.url;
        // console.log(imageUrl);

        // const imgElement = document.createElement('img');
        // imgElement.src = imageUrl;

        // document.body.append(imgElement);

        const imageUrl = data.images.original.url;
        createImageInsideDOM(imageUrl);

    })
    .catch( (err) => {
        console.error(err);
    });