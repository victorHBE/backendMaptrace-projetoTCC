import databaseConnection from "../utils/database"
import Overlap from "../models/overlap"

export const listOverlaps = async () => {
    await databaseConnection()
    
    const overlaps = await Overlap.find()
    return overlaps
}

export const getOverlapById = async (id) => {
  await databaseConnection();

  try {
    const overlap = await Overlap.findById(id);
    return overlap;
  } catch (error) {
    throw new Error(`Erro ao buscar o documento com o ID ${id}: ${error.message}`);
  }
};

export const getOverlapByCidade = async (cidade) => {
  await databaseConnection();

  try {
    const overlap = await Overlap.findOne({ cidade: cidade });
    return overlap;
  } catch (error) {
    throw new Error(`Erro ao buscar o documento com a cidade ${cidade}: ${error.message}`);
  }
};

export const createOverlap = async (overlap, cidade) => {
    await databaseConnection();
  
    const overlapInstance = new Overlap({
      cidade: overlap.cidade,
      dataList: overlap.sobreposicoes,
    });
  
    const createdOverlap = await overlapInstance.save();
    return createdOverlap;
  };

export const deleteOverlap = async (id) => {
    await databaseConnection()
    await Overlap.findByIdAndDelete(id)
}

export const updateOverlap = async (id, newBody) => {
    await databaseConnection()
    await Overlap.findByIdAndUpdate(id,newBody)
}

