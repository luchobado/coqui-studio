const server = require('./src/app');
const PORT = process.env.PORT || 3002;
server.listen(PORT, () => {
    console.log('Server escuchando');
});