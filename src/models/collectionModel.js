import prisma from "../../prisma/prisma.js";

class CollectionModel {
  // Obter todas as coleções
  async findAll() {
    const colecoes = await prisma.collection.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    console.log(colecoes);

    return colecoes;
  }

  // Obter uma coleção pelo ID
  async findById(id) {
    const colecao = await prisma.collection.findUnique({
      where: {
        id: Number(id),
      },
    });

    return colecao;
  }

  // Criar uma nova coleção
  async create(
    name,
    description,
    releaseYear,
  ) {
    const newCollection = await prisma.collection.create({
      data: {
        name,
        description,
        releaseYear,
      },
    });

    return newCollection;
  }

  // Atualizar uma coleção
  async update(
    id,
    title,
    description,
    episodes,
    releaseYear,
    studio,
    genres,
    rating,
    imageUrl
  ) {
    const colecao = await this.findById(id);

    if (!colecao) {
      return null;
    }

    // Atualize a coleção existente com os novos dados
    const data = {};
    if (title !== undefined) {
      data.title = title;
    }
    if (description !== undefined) {
      data.description = description;
    }
    if (episodes !== undefined) {
      data.episodes = episodes;
    }
    if (releaseYear !== undefined) {
      data.releaseYear = releaseYear;
    }
    if (studio !== undefined) {
      data.studio = studio;
    }
    if (genres !== undefined) {
      data.genres = genres;
    }
    if (rating !== undefined) {
      data.rating = rating;
    }
    if (imageUrl !== undefined) {
      data.imageUrl = imageUrl;
    }

    const personagemUpdated = await prisma.collection.update({
      where: {
        id: Number(id),
      },
      data,
    });

    return personagemUpdated;
  }

  // Remover um personagem
  async delete(id) {
    const personagem = await this.findById(id);

    if (!personagem) {
      return null;
    }

    await prisma.collection.delete({
      where: {
        id: Number(id),
      },
    });

    return true;
  }
}

export default new CollectionModel();
