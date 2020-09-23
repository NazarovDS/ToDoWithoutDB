const fs = require('fs')

    //Генерация Ид
const getNewId = (array) =>{
    if (array.length>0){
        return array[array.length-1].id +1
    } else {
        return 1
    }
}
    //Поиск объекта по Ид
function mustBeInArray(array,id) {
    return new Promise((resolve, reject) =>{
        const row = array.find(r => r.id == id )
        if (!row){
            reject({
                message:'id не верный',
                status: 404
            })
        }
        resolve(row)
    })
}
    //меняем json
function writeJSONFile (filename, content) {
    fs.writeFileSync(filename, JSON.stringify(content), 'utf8', (err)=>{
        if(err){
            console.log(err)
        }
    })
}

module.exports = {
    getNewId,
    mustBeInArray,
    writeJSONFile
}