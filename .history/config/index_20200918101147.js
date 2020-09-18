var pusher = new Pusher({
  appId: "1073102",
  key: "89571dc3bb0b3e616bcb",
  secret: "29e294b0a578732accfe",
  cluster: "ap2",
  encrypted: true,
});

module.exports = {
  PORT: proccess.env.PORT || 8080,
  POST: pusher,
};
