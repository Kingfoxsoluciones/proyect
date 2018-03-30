module.exports = {
    port: process.env.PORT || 3001,
    db: process.env.MONGODB || 'mongodb://localhost:27017/kingFox',
    SECRET_TOKEN: 's3cr3t_jwt'
}