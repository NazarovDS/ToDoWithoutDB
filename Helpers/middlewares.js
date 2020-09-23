//проверяем приходящие таскки
function checkFieldsTask(req, res, next) {
    const {description, priority, contractor} = req.body
    if (description && priority && contractor) {
        next()
    } else {
        res.status(400).json({message: "Таск заполнен не полностью"})
    }
}

function mustBeInteger(req, res, next) {
    const id = req.params.id

    if (!Number.isInteger(parseInt(id))) {
        res.status(400).json({message: 'ID должент быть числовым значением'})
    } else {
        next()
    }
}

module.exports = {
    checkFieldsTask,
    mustBeInteger
}