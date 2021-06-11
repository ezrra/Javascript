const promises = [
    Promise.resolve(100),
    fetch(''),
    fetch('')
];

const statusPromises = await Promise.all(promises)
