import { Router } from "express";

import { listOverlaps, createOverlap, deleteOverlap, updateOverlap, getOverlapById, getOverlapByCidade } from "../services/overlap";

const router = Router()

router.get('/all', async (req, res) =>{
    const overlapList = await listOverlaps()
    res.send(overlapList)
})

router.get('/buscarCidadePorId/:overlapId', async (req, res) =>{
    const overlapId = req.params.overlapId; // Captura o overlapId da URL
    const overlap = await getOverlapById(overlapId);
    res.send(overlap);
})

router.get('/buscarCidade/:cidade', async (req, res) => {
    const cidade = req.params.cidade; // Captura o nome da cidade da URL
    const overlap = await getOverlapByCidade(cidade);

    if (overlap) {
        res.send(overlap);
    } else {
        res.status(404).send(`Não foi encontrado nenhum registro para a cidade: ${cidade}`);
    }
});

router.post('/salvar-dados', async (req, res) =>{
   //console.log(req.body)
    try {
        const overlap = await createOverlap(req.body)
        res.status(201).send(overlap)
    } catch (error) {
        res.status(400).send(error)
    }
   
})

router.delete('/delete/:overlapId', async (req, res) =>{
    await deleteOverlap(req.params.overlapId)
    res.send()
})

router.put('/update/:overlapId' , async (req, res) => {
    await updateOverlap(req.params.overlapId, req.body)
    res.send()
})
export default router