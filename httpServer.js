const express = require('express')
const app = express()
var events = require('events');

var http_server_event = new events.EventEmitter();

app.get('/stream_ended', async function(req, res) {
    console.log('Got /events');
    const headers = {
      'Content-Type': 'text/event-stream',
      'Connection': 'keep-alive',
      'Cache-Control': 'no-cache'
    };
    res.writeHead(200, headers);   
    http_server_event.on('stream_removed', function(data) {
        console.log('Recieved ID', data.streamID);
        if(data.streamID!=null)
        {
          let message = `data: ${data.streamID}\n\n`;
          console.log(message);
          res.write(message);
        }
    })    
  });

app.listen(process.env.HTTP_PORT!=null?process.env.HTTP_PORT:'9003', () => {
  console.log(`HTTP IS LIVE`)
})

module.exports = {
    http_server_event: http_server_event
}