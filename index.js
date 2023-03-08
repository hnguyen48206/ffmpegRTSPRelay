const RtspServer = require('rtsp-streaming-server').default;
require("dotenv").config();
global.currentListOfStreams=[];

const server = new RtspServer({
    serverPort: 9000,
    clientPort: 9001,
    rtpPortStart: 10000,
    rtpPortCount: 10000
}); 
 
async function run () {
    try {
        await server.start();
        console.log('OK')
    } catch (e) {
        console.error(e);
    }
}
 
run();
 