const conf = new (require('conf'))()

function list () {
    const passwordsArr = conf.get('store-passwords')
    if (passwordsArr && passwordsArr.length) {
        passwordsArr.forEach(e => {
            console.log(e.siteName + ": " + e.password);
        })
    } else {
        console.log(
            'You don\'t have any passwords yet.'
        )
    }
}
module.exports = list
