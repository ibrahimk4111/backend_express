require('dotenv').config()
const app = require('./app')
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`server is successfully running at http://localhost:${PORT}`);
});
