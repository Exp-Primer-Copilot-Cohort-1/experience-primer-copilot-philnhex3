// Create web server

import http from 'http';

const server = http.createServer((_req, _res) => {
    // Handle incoming requests here
});

server.listen(3000, () => {
    console.log('Server is running on port 3000');
});
