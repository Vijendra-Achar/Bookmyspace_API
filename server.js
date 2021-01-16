const app = require('./app');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Bookmyspace API Server running on http://127.0.0.1/${port}`);
});
