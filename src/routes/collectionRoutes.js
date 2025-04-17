import express from "express";
import CollectionController from "../controllers/collectionController.js";

const collectionRouter = express.Router();

// Rotas de Personagens
// GET /colecoes - Listar todos as coleções
collectionRouter.get("/", CollectionController.getAllCollections);

// GET /personagens/:id - Obter um Personagem pelo ID
//collectionRouter.get("/:id", CollectionController.getCollectionsById);

// POST /personagens - Criar um novo Personagem
//collectionRouter.post("/", CollectionController.createCollections);

// PUT /personagens/:id - Atualizar um Personagem
//collectionRouter.put("/:id", CollectionController.updateCollections);

// DELETE /personagens/:id - Remover um Personagem
//collectionRouter.delete("/:id", CollectionController.deletePersonagem);

export default collectionRouter;
