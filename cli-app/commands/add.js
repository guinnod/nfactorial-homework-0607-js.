const conf = new (require('conf'))()

function add (site, key) {
    
    let passwordsArr = conf.get('store-passwords')

    if (!passwordsArr) {
        //default value for todos-list
        passwordsArr = []
    }

    //push the new task to the todos-list
    passwordsArr.push({
        siteName: site,
        password: key
    })

    //set todos-list in conf
    conf.set('store-passwords', passwordsArr)

    //display message to user
    console.log(
        'Password has been added successfully!'
    )
}

module.exports = add
