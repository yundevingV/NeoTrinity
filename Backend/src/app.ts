// import express, { Application, Request, Response } from 'express'
import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import path from 'path'

const app: Application = express()

app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, '../Frontend/build')))

app.get('/', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname, '../Frontend/build/index.html'))
})

app.get('*', function (req: Request, res: Response) {
    res.sendFile(path.join(__dirname, '../Frontend/build/index.html'));
  });

export { app }