// I'm going to put all my customer routes here

const router = require('express').Router();
const verifyCustomer = require('../../middleware/verify-customer')
const fs = require('fs');

router.get("/", verifyCustomer, (req, res) => {
  const result = req.database.customers
  res.json({status: 'ok', result})
})

//this is a protected route, verifyCustomer is an injected middleware function
router.get("/:id", verifyCustomer, (req, res) => {
  console.log(req.params.id)
  const customerId = req.params.id;
  console.log(req.database.customers)
  const result = req.database.customers.find(({ id }) => id == customerId)
  res.json({ status: 'ok, good to go', result: result })

});

router.post("/", (req, res) => {
  let newCustomer = req.body
  let newCustomerId = req.database.customers.length;
  let newCustomerFName = 
  req.database.customers.push(newCustomer);
  fs.writeFile('customers.json', req.database.customers + `
  { 
    "id": ${newCustomerId},
    "fname": "Mary",
    "lname": "Smith",
    "email": "msmith@gmail.com"
  }`)

})



router.put("/:id", (req, res) => {
  //...
})

router.delete("/:id", (req, res) => {
  //...
})


module.exports = router;