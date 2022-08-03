
//Handlebars
const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const arr = [
  {
    title: "Guitar Stratocaster",
    price: 100,
    thumbnail:
      "Url de la foto del producto",
    id: 1,
  },
  {
    title: "Guitar Telecaster",
    price: 120,
    thumbnail:
      "url de la foto del producto",
    id: 2,
  },
  {
    title: "Guitar Jazz Master",
    price: 150,
    thumbnail:
      "url de la foto del producto",
    id: 3,
  },
  {
    title: "Bass Jazz",
    price: 110,
    thumbnail:
      "url de la foto del producto",
    id: 4,
  },
  {
    title: "Bass Presicion",
    price: 140,
    thumbnail:
      "url de la foto del producto",
    id: 5,
  },
];

app.listen(4000, () => {
  console.log("Servidor corriendo en el puerto 4000");
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.engine(
  "hbs",
  handlebars.engine({
    layoutDirs: __dirname + "/handlebars/views/layouts",
    extname: "hbs",
  })
);

app.set("views", __dirname + "/handlebars/views");
app.set("view engine", "hbs");

//Routes

app.get("/productos", (req, res) => {
  res.render("main", { 
    layout: "home",
    data: arr,

});
});

app.post("/productos", (req, res) => {
  let obj = {
    title: req.body.title,
    price: req.body.price,
    thumbnail: req.body.thumbnail,
  };
  arr.push(obj);
  res.redirect("/productos");
});

app.get("/formulario", (req, res) => {
  res.render("form", { layout: "home" });
});


//PUG

/* const express = require("express");
const app = express();
app.set("views", __dirname + "/pug/views");
app.set("view engine", "pug");
const arr = [
  {
    title: "Guitar Stratocaster",
    price: 100,
    thumbnail:
      "Url de la foto del producto",
    id: 1,
  },
  {
    title: "Guitar Telecaster",
    price: 120,
    thumbnail:
      "url de la foto del producto",
    id: 2,
  },
  {
    title: "Guitar Jazz Master",
    price: 150,
    thumbnail:
      "url de la foto del producto",
    id: 3,
  },
  {
    title: "Bass Jazz",
    price: 110,
    thumbnail:
      "url de la foto del producto",
    id: 4,
  },
  {
    title: "Bass Presicion",
    price: 140,
    thumbnail:
      "url de la foto del producto",
    id: 5,
  },
];

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Rutas
app.get("/productos", (req, res) => {
  res.render("index", { data: arr });
});
app.post("/productos", (req, res) => {
  let obj = {
    title: req.body.title,
    price: req.body.price,
    thumbnail: req.body.thumbnail,
  };
  arr.push(obj);
  res.redirect("/productos");
});
app.get("/formulario", (req, res) => {
  res.render("form", { layout: "home", data: arr });
});
app.listen(4000, () => {
  console.log("Server is running on port 4000");
}); */


//#EJS
/* const express = require("express");
const app = express();
app.set("views", __dirname + "/ejs/views");
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const arr = [
  {
    title: "Guitar Stratocaster",
    price: 100,
    thumbnail:
      "Url de la foto del producto",
    id: 1,
  },
  {
    title: "Guitar Telecaster",
    price: 120,
    thumbnail:
      "url de la foto del producto",
    id: 2,
  },
  {
    title: "Guitar Jazz Master",
    price: 150,
    thumbnail:
      "url de la foto del producto",
    id: 3,
  },
  {
    title: "Bass Jazz",
    price: 110,
    thumbnail:
      "url de la foto del producto",
    id: 4,
  },
  {
    title: "Bass Presicion",
    price: 140,
    thumbnail:
      "url de la foto del producto",
    id: 5,
  },
];

//Routes

app.get("/productos", (req, res) => {
  res.render("index", { data: arr });
});
app.post("/productos", (req, res) => {
  let obj = {
    title: req.body.title,
    price: req.body.price,
    thumbnail: req.body.thumbnail,
  };
  arr.push(obj);
  res.redirect("/productos");
});
app.get("/formulario", (req, res) => {
  res.render("form", { layout: "home", data: arr });
});
app.listen(4000, () => {
  console.log("Server is running on port 4000");
}); */
