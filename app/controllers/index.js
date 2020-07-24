module.exports = function(router) {
  router.get("/", async function(req,res) {
    const glob = require("glob");
    const mp3s = glob.sync("static/audio/**/*.mp3", {});
    return res.render("index", { mp3s: JSON.stringify(mp3s) });
  });
};
