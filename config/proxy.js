require('dotenv').config();

export default {
    '/api': {
        target: process.env.API_URL,
        pathRewrite: { '^/api': '' }
    }
}