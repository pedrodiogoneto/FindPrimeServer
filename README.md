# FindPrime

## Project

Application which takes a string input of three numbers from a User and performs a search to return the first prime number that contains those same digits in the correct order from the following list of the first 10,000 primes.

### Start

Server:
- Run the Project with Nodemon on Port 3000.

Client:
- Run the Project: https://github.com/pedrodiogoneto/FindPrimeClient

### Code Walkthrough

This project contains a 2 main Routes: getInputHistory and saveNewInput, which are both connected to controllers and services.

The connection to the database is handled by mongoose.

On the helpers, there are 2 files:
- findPrime: which returns either the 1 prime number that fullfils the projects conditions.
- the list of prime numbers.

