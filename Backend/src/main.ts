import express, { Request, Response, Router } from 'express'

const router: Router = express.Router()

router.get('/', (req: Request, res: Response) => {
    const message: string = req.body.message
    res.json({
        message: message,
        status: "OK"
    })
})

export { router }