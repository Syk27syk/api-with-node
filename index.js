const app = require('express')();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)

app.get('/tshirt', () => {
    resizeBy.status(200).send({
        tshirt: 'SHIRT',
        size: 'large'
    })
});

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'We need a logo!' })
    }

    res.send({
        tshirt: `SHIRT with your ${logo} and ID of ${id}`,
    });
});
