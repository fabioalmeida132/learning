const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send(process.env.MESSAGE || 'Hello World!')
})

// Health check
app.get('/health', (req, res) => {
  if (Math.random() > 0.5) {
    return res.status(500).send('Internal Server Error');
  }
  res.status(200).send('OK');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

