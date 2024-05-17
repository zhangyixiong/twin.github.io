const connectHistoryApiFallback = require('connect-history-api-fallback');
const express = require('express');
const app = express();

const server = require('http').createServer(app);

server.listen(8080, () => {
    const port = server.address().port;
    console.log('应用实例,访问地址为 http://localhost:%s', port);
})

app.use('/', connectHistoryApiFallback())
app.use(express.static('./dist'))

app.get('/*', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html')
})