const express = require('express');
const router = express.Router();
const {promisify} = require("util");
const readdir = promisify(require("fs").readdir);

class apiRoute {
  constructor(client) {
    this.client = client;
  }


  route () {
    /* GET users listing. */
    router.get('/bilibili', async function(req, res, next) {
      res.set('Content-Type', 'application/json')

      const evtFiles = await readdir("./api/bilibili/");
      console.log(`Loading a total of ${evtFiles.length} bilibili picture.`);

      res.send(JSON.stringify({
        data : "bilibili/" + evtFiles[Math.floor(Math.random() * Math.floor(evtFiles.length))]
      }));
    });
  }

}

module.exports = new apiRoute();
