
const express = require("express");

const app = express();
app.use(express.json())

app.listen(3333, ()=> {
    console.log("👌 back-end iniciado!")
})

app.get("/projects", (request, response) => {

    const query = request.query
    console.log(query)

    return response.json({
        titulo: "Filme Tarzan",
    })

})

app.post("/projects", (request, response)=> {
    
    const body = request.body
    console.log(body)

    return response.json(["Post1", "P2", "P3", "P4", "P5"])
})

app.put("/projects/:id", (request, response)=> {

    const {id} = request.params
    console.log(id)
    
    return response.json(["Put1", "P2", "P3", "P4", "P5"])
})

app.delete("/projects/:id", (request, response)=> {

    const params = request.params
    console.log(params)

    return response.json(["Delete1", "P2", "P3", "P4", "P5"])
})