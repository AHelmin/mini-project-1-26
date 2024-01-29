const userFNameInput = document.getElementById('fname');
const userLNameInput = document.getElementById('lname');
const useremailInput = document.getElementById('email');
const customerForm = document.querySelector('form');
const submitBtn = document.getElementById('submit')

const addCustomer = (customer) =>
    // Fetch accepts a URL and an options object where you can declare the HTTP method, the request body, and any headers.
    fetch('/api/customers', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(customer),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log('Successful POST request:', data);
            return data;
        })
        .catch((error) => {
            console.error('Error in POST request:', error);
        });

// Listen for when the form is submitted
customerForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Create a new review object from the input values
    const newCustomer = {
        "fname": userFNameInput.value,
        "lname": userLNameInput.value,
        "email": useremailInput.value,
    };

    // Call our postReview method to make a POST request with our `newReview` object.
    addCustomer(newCustomer)
        .then((data) => alert(`Customer added! Customer: ${data}`))
        .catch((err) => console.error(err));
});
