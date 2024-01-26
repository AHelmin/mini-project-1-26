// I'm going to put all my product routes here

const router = require('express').Router();
const authenticate = require('../../middleware/authenticate')
const products = require('../../db/products.json')

router.get("/", authenticate, (req, res) => {
    res.json({ status: 'ok, good to go', products })
})

router.get("/:id", authenticate, (req, res) => {
    console.log(req.params)
    console.log(req.params.id)
    const itemId = req.params.id;
    const item = products[itemId]
    for (var i = 0; i < products.length; i++) {
        if (products[i].id === itemId) {
            console.log(products[i])
            return products[i]
        }
    }

    // let productObj = id: req.params
    res.json({ status: 'ok, good to go', item: item })

})

router.post("/", (req, res) => {
    //...
})

router.put("/:id", (req, res) => {
    //...
})

router.delete("/:id", (req, res) => {
    //...
})

module.exports = router;