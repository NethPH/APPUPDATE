const express = require('express');
/*const axios = require('axios');
const path = require('path');
const crypto = require('crypto');
*/const bodyParser = require('body-parser');
const app = express();

app.use(express.json());
app.use(bodyParser.json());
//app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
res.send("Created by @HttpNeth");
});
        
app.get('/approved_clients', (req, res) => {
const hi = {
  "device_id_enable": true,
  "808EBE905CC6D71357B027D69CBFFAA9": 0
  };
  
  res.json(JSON.parse(JSON.stringify(hi)));
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
