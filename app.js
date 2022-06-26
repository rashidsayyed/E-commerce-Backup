const http = require('http');
const fs = require('fs');

const indexhtml = fs.readFileSync('./index.html')
const about = fs.readFileSync('./about.html')
const contact = fs.readFileSync('./contact.html')
const account = fs.readFileSync('./account.html')
const cart = fs.readFileSync('./cart.html')
const product = fs.readFileSync('./product.html')
const productdetails = fs.readFileSync('./productdetails.html')
const style = fs.readFileSync('./styles.css')
const server = http.createServer((req, res) => {
    try {
        if (req.url == '/') {
            res.end(indexhtml)
        } else if (req.url == '/contact') {
            res.end(contact)
        } else if (req.url == '/account') {
            res.end(account)
        } else if (req.url == '/about') {
            res.end(about)
        } else if (req.url == '/account') {
            res.end(account)
        } else if (req.url == '/cart') {
            res.end(cart)
        } else if (req.url == '/product') {
            res.end(product)
        } else if (req.url == '/productdetails') {
            res.end(productdetails)
        } else {
            res.end('404 not found')
        }
    } catch (error) {
        console.log(error)
    }
})
server.listen(5500, () => {
    console.log("Server Running on port 5500")
})