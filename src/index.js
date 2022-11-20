const app=require('./server');

app.listen(app.get("port"), () => {
  console.log(`Example app listening on http://localhost:${app.get("port")}`)
})