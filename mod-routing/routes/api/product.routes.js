// I'm going to put all my product routes here

const router = require('express').Router();
const authenticate = require('../../middleware/authenticate')

router.get("/", authenticate, (req, res) => {
    // console.log(products)
    const result = req.database.products
    res.json({ status: 'ok, good to go', result})
})

router.get("/:id", authenticate, (req, res) => {
    console.log(req.params.id)
    const itemId = req.params.id;
    console.log(req.database.products)
    const result = req.database.products.find(({ id }) => id === itemId)
    res.json({ status: 'ok, good to go', result })

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