// server.ts
import express from 'express';
import axios from 'axios';
import fs from 'fs';

const app = express();
const PORT = 3000;

interface Item {
  id: string;
  // Add any other properties you expect here.
}

interface ItemsResponse {
  items: Item[];
}

let items: { [key: string]: Item } = {};

// Load items from items.json on server start
fs.readFile('./items.json', 'utf8', (err, data) => {
  if (!err && data) {
    items = JSON.parse(data);
  }
});

app.get('/getItem/:key', async (req, res) => {
  const { key } = req.params;

  if (!items[key]) {
    try {
      const response = await axios.get<ItemsResponse>('https://api.hypixel.net/v2/resources/skyblock/items');
      response.data.items.forEach((item) => {
        items[item.id] = item;
      });

      // Save the updated items to items.json
      fs.writeFileSync('./items.json', JSON.stringify(items, null, 2));

      if (items[key]) {
        res.json(items[key]);
      } else {
        res.status(404).send('Item not found');
      }
    } catch (error) {
      res.status(500).send('Internal Server Error');
    }
  } else {
    res.json(items[key]);
  }
});
