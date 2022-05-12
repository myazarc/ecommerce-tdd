import app from "./app";
import { appDataSource } from "./common/context/db.context";

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  console.log(`App listening on port ${port}`);
  await appDataSource.initialize();
});
