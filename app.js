import express from 'express'
const app = express()
import notify from './index.js'

app.get('/push-notify/:message', (req, res) => {
    const body = req.params
    notify(body.message, (err, result) => {
        if(err) console.log(err)
        console.log(result)
        return res.send('okay fine..')
    })
})
app.get('/*', (req, res) => {
    return res.send('okay fine')
})

app.listen(3000, () => {
    console.log('app is running on port 3000')
})