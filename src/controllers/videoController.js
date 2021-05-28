export const trending = (req, res) => res.send("homepage videos");
export const search = (req, res) => res.send("search videos");
export const see = (req, res) => {
  console.log(req.params);
  return res.send("watch videos");
};
export const edit = (req, res) => {
  console.log(req.params);
  return res.send("edit videos");
};
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("del videos");
};
export const upload = (req, res) => res.send("upload videos");
