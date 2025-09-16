const myPromiseSuccess = new Promise( (resolve) => {
    setTimeout(() => {
        resolve('Promesa resuelta');
    }, 2000); // 2 segundos
});

const myPromiseReject = new Promise<string>( (reject) => {
    setTimeout(() => {
        reject('Promesa rechazada');
    }, 2000); // 2 segundos
});

myPromiseSuccess.then(
    myMoneyIsBack => {
        console.log(myMoneyIsBack);
    }
);

myPromiseReject.then(
    myMoneyIsBack => {
        console.log(myMoneyIsBack);
    }
);

myPromiseReject.then(
    myMoneyIsBack => {
        console.log(myMoneyIsBack);
    }
).catch( err => console.warn(err) )
.finally( () => console.log('Finalizó la promesa') );