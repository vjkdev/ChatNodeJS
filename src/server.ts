import express from "express";

const app = express();

app.get("/", (request, response) => {
    return response.send("Olá Mundo, bem vindo ao NLW 5");
});

app.post("/", (request, response) => {
    return response.json({ message: "Usuário salvo com sucesso" });
});

app.listen(3333, () => console.log("Server is running on port 3333"));