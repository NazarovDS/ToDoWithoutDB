let users = require('../Data/users.json')

function getUsers(){
    return new Promise((resolve, reject) => {
        if (users.length === 0){
            reject({
                message: 'Пользователи не зарегистрированы',
                status: 202
            })
        }
        resolve(users)
    })
}

module.exports={
    getUsers
}