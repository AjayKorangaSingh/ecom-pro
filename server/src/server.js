const app = require('.');
const { connect } = require('./config/db');

const PORT = "4000";

app.listen(PORT,async () => {
  await connect()
  console.log(`server is listening at port${PORT}`);
});
