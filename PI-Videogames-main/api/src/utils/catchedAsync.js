export const catchedAsync = (fn) => (req, res, next) => {
  fn(req, res).catch((err) => next(err));
};
