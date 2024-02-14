var myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        var data = Math.floor(Math.random() * 100)
        if (data % 5 == 0) {
            reject("This is the Wrong Number that got Generated: " + data)
        } else {
            resolve("This is the Right random Value " + data);
        }
    }, 10000);
});


myPromise.then(
    (resolvedData) => {
        console.log(resolvedData)
    },
    (rejectionData) => {
        console.log(resolvedData)
    }
)