// settled returns completes resolve/rejects
// resolve returns successfully/passes
// reject returns unsuccessfully/fails

// all (all resolved) -> then, any fail -> catch
const promise1All = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('promise1 (all)');
        resolve('value1 (all)');
    }, 500);
});

const promise2All = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('promise2 (all)');
        reject('promise 2 was bad (all)');
    }, 1000);
});

Promise.all([promise1All, promise2All])
    .then((values) => {
        console.log('everything resolved (all)');
        console.log(values);
    })
    .catch((reason) => {
        console.log('one of our promises failed (all)');
        console.log(reason);
    });
    
// allSettled
const promise1AllSettled = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('promise1 (allSettled)');
        reject('promise 1 was bad (allSettled)');
    }, 1500);
});

const promise2AllSettled = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('promise2 (allSettled)');
        resolve('value2 (allSettled)');
    }, 2000);
});

Promise.allSettled([promise1AllSettled, promise2AllSettled])
    .then((responses) => {
        console.log('(then) all promises settled (allSettled)');
        console.log(responses);
    });
    
    
// race first promise resolves -> then, first promise rejects -> catch
const promise1Race = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('promise1 (race)');
        resolve('value1 (race)');
    }, 2500);
});

const promise2Race = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('promise2 (race)');
        reject('promise2 was bad (race)');
    }, 3000);
});

Promise.race([promise1Race, promise2Race])
    .then(value => {
        console.log('(then) first race promise resolved (race)');
        console.log(value);
    })
    .catch(reason => {
        console.log('(catch) first race promise rejected (race)');
        console.log(reason);
    });