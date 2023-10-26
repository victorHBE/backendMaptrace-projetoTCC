import express from 'express'
import bodyParser from 'body-parser'
import overlapController from './controllers/overlap'
const cors = require('cors')

const app = express()
const port = 3000

app.use(cors())

app.use(bodyParser.json({ limit: '10mb' }));

app.use('/overlap', overlapController)

app.listen(port, () => {
  console.log(`App rodando em http://localhost:${port}`)
})
