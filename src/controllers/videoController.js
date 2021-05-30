export const trending = (req, res) => res.render("home", { pageTitle: "Home" });
export const search = (req, res) => res.render("search videos");
export const see = (req, res) => {
  console.log(req.params);
  return res.render("watch", { pageTitle: " Watch Video" });
};
export const edit = (req, res) => {
  console.log(req.params);
  return res.render("edit", { pageTitle: "Edit Video" });
};
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.render("delete");
};
export const upload = (req, res) => res.render("upload");
