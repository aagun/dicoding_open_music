const PlaylistHandler = require("./handler");
const routes = require("./routes");

module.exports = {
  name: "playlists",
  version: "1.0.0",
  register: (
    server,
    { playlistsService, playlistSongsService, songsService, activitiesService, validator }
  ) => {
    const playlistHandler = new PlaylistHandler(
      playlistsService,
      playlistSongsService,
      songsService,
      activitiesService,
      validator
    );
    server.route(routes(playlistHandler));
  },
};
