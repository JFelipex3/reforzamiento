import type { GiphyRandomResponse } from "../data/giphy.response"; // Se define como type cuando solo se usara como tipo de dato

const API_KEY = 'JqPQQYfxYvrTvDsWNaQPbWgyUtruUCUz';

const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);
}

const getRandomGifUrl = async(): Promise<string> => {

    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
    const { data } = await response.json() as GiphyRandomResponse;

    return data.images.original.url;
};

getRandomGifUrl().then(createImageInsideDOM);