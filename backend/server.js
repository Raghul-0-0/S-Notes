const express = require('express')
const { OAuth2Client } = require('google-auth-library')
require('dotenv').config() 

const app = express()
const client = new OAuth2Client(process.env.VITE_G_CLIENT_ID)

app.use(express.json()) 

const cors = require('cors')
app.use(cors())

app.post('/api/auth/google', async (req, res) => {
  try {
    const { idToken } = req.body

    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.VITE_G_CLIENT_ID, 
    })

    const payload = ticket.getPayload()
    console.log(payload);

    res.json({ success: true, user: payload })

  } catch (err) {
    console.error('Token verification failed:', err)
    res.status(401).json({ success: false, message: 'Invalid token' })
  }
})

app.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000')
})
