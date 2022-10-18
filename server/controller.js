const dataBaseHouse = require('./db.json')
let upComingId = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(dataBaseHouse)
    },
    deletHouse: (req,res) => {
        // console.log(req.params)
        const deleteId = req.params.id
        let index = dataBaseHouse.findIndex(element => element.id === +deleteId)
        dataBaseHouse.splice(index, 1)
        res.status(200).send(dataBaseHouse)
    },
    createHouse: (req,res) => {
        const {address, price, imageUrl} = req.body
        let newHouse = {
            id: upComingId,
            address,
            price,
            imageUrl

        }
        dataBaseHouse.push(newHouse)
        res.status(200).send(dataBaseHouse)

    },
    updateHouse: (req,res) => {
        let currentId = req.params.id
        let type = req.body.type
        
        let index = dataBaseHouse.findIndex(element => element.id === +currentId)

        if (type === 'plus') {
            dataBaseHouse[index].price = +dataBaseHouse[index].price + 10000
            res.status(200).send(dataBaseHouse)
        } else if (type === 'minus') {
            dataBaseHouse[index].price = +dataBaseHouse[index].price - 10000
            res.status(200).send(dataBaseHouse)
        } else {
            res.send(400)
        }
    }
}