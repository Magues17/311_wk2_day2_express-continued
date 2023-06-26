const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const port = process.env.PORT || 4001;

app.use(express.static("public"));

app.use(bodyParser.json());

const contacts = require("./data/contacts");
const vehicles = require("./data/vehicles");
const comments = require("./data/comments");
const products = require("./data/products");
const contactsRouter = require("./routes/contacts");
const vehiclesRouter = require("./routes/vehicles");
const commentsRouter = require("./routes/comments");
const productsRouter = require("./routes/products");

app.use("/contacts", contactsRouter);
app.use("/vehicles", vehiclesRouter);
app.use("/comments", commentsRouter);
app.use("/products", productsRouter);


app.get("/contacts", (req, res) => {
    res.json(contacts);
  });
  
  app.get("/vehicles", (req, res) => {
    res.json(vehicles);
  });
  
  app.get("/comments", (req, res) => {
    res.json(comments);
  });
  
  app.get("/products", (req, res) => {
    res.json(products);
  });
  

  app.get("/contacts/:id", (req, res) => {
    const contact = contacts.find((c) => c._id === req.params.id);
    res.json(contact);
  });
  
  app.get("/vehicles/:id", (req, res) => {
    const vehicle = vehicles.find((v) => v._id === req.params.id);
    res.json(vehicle);
  });
  
  app.get("/comments/:id", (req, res) => {
    const comment = comments.find((c) => c._id === req.params.id);
    res.json(comment);
  });
  
  app.get("/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
  });
  
  app.post("/contacts", (req, res) => {
    const newContact = { ...req.body, _id: getNextId(contacts) };
    contacts.push(newContact);
    res.json(newContact);
  });
  
  app.post("/vehicles", (req, res) => {
    const newVehicle = { ...req.body, _id: getNextId(vehicles) };
    vehicles.push(newVehicle);
    res.json(newVehicle);
  });
  
  app.post("/comments", (req, res) => {
    const newComment = { ...req.body, _id: getNextId(comments) };
    comments.push(newComment);
    res.json(newComment);
  });
  
  app.post("/products", (req, res) => {
    const newProduct = { ...req.body, _id: getNextId(products) };
    products.push(newProduct);
    res.json(newProduct);
  });
  
  function getNextId(arr) {
    return arr.length > 0 ? arr[arr.length - 1]._id + 1 : 1;
  }
  

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
