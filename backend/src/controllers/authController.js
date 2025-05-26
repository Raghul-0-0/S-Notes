const User = require('../models/LoginSchema');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.VITE_G_CLIENT_ID);

exports.googleLogin = async (req, res) => {
    try {
        const { idToken } = req.body;

        const ticket = await client.verifyIdToken({
            idToken,
            audience: process.env.VITE_G_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        const existingUser = await User.findOne({ email: payload.email });

        if (!existingUser) {
            const result = await User.create({
                id: payload.sub,
                email: payload.email,
                name: payload.name,
            });
            console.log(result);
        }
        console.log(payload);
        res.json({ success: true, user: payload });
    } catch (err) {
        console.error('Token verification failed:', err);
        res.status(401).json({ success: false, message: 'Invalid token' });
    }
};
