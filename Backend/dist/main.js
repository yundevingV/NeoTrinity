import express from 'express';
const router = express.Router();
router.get('/', (req, res) => {
    const message = req.body.message;
    res.json({
        message: message,
        status: "OK"
    });
});
export { router };
