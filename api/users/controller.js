module.exports = {
  getAll: (req, res, next) => {
    res.status(200).send({
      message: 'GET ALL'
    })
  },

  getId: (req, res, next) => {
    res.status(200).send({
      user: req.params.user_id
    })
  },

  getIdWithPost: (req, res, next) => {
    res.status(200).send({
      user: req.params.user_id,
      post: req.params.post_id
    })
  },

  create: (req, res, next) => {
    res.status(201).send({
      body: req.body,
      params: req.params,
      query: req.query
    })
  },

  update: (req, res, next) => {
    res.status(200).send({
      message: 'PUT'
    })
  },

  delete: (req, res, next) => {
    res.status(200).send({
      message: 'DELETE'
    })
  }

}
