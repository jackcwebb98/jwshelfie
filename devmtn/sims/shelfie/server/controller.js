module.exports = {
    getAll: (req, res) => {
        const dbInstance = req.app.get('db');
        dbInstance.getInventory().then((response) => {
            res.send(response)
        }) 
    },
    createProduct: (req, res) => {
        const dbInstance = req.app.get('db')
        const {productName, imageUrl, price} = req.body
        dbInstance.createProduct(productName, imageUrl, price).then((response) => {
            res.send('new customer created')
        })
    },
    deleteProduct: (req, res) => {
        const dbInstance = req.app.get('db')
        const {id} = req.params
        dbInstance.deleteProduct(id).then((response) => {
            console.log('successfully deleted')
            res.sendStatus(200)
        }).catch((err) => {
            res.sendStatus(500)
            console.log(err)
        })
    }
}
