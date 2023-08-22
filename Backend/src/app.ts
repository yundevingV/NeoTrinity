import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import path from 'path'

import { router } from './main'

const app: Application = express()
const __dirname = path.resolve()

app.use(express.json())
app.use(cors())
// app.use(express.static(path.join(__dirname, '../Frontend/build')))

app.use('/main', router)

app.get('/', (req: Request, res: Response) => {
  res.send("Hello NeoTrinity API")
})

// app.get('/', (req: Request, res: Response) => {
//     res.sendFile(path.join(__dirname, '../Frontend/build/index.html'))
// })

// app.get('*', function (req: Request, res: Response) {
//     res.sendFile(path.join(__dirname, '../Frontend/build/index.html'));
//   });

export { app }