// I'm going to put all my customer routes here

const router = require('express').Router();
const verifyCustomer = require('../../middleware/verify-customer')
const customers = require('../../db/customers.json')

router.get("/", verifyCustomer, (req, res) => {
  res.json({status: 'ok', customers})
})

//this is a protected route, verifyCustomer is an injected middleware function
router.get("/:id", verifyCustomer, (req, res) => {
  res.json({status: 'ok'})
});



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