const db = require("../../models");
const { Op } = require("sequelize");

module.exports = {
  getData: async function (req, res) {
    try {
      const data = await db.Books.findAll({});
      if (data.length) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "not found" });
      }
    } catch (err) {
        console.log(err);
      res.status(500).json(err);
    }
  },
  getDataById: async function (req, res) {
    try {
      const data = await db.Books.findByPk(req.params.id);
      if (data.length) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "not found" });
      }
    } catch (err) {
        console.log(err);
      res.status(500).json(err);
    }
  },
  getDataByTerm: async function (req, res) {
    try {
      const data = await db.Books.findAll({
        where: {
          [Op.or]: [
            {
              location: {
                [Op.substring]: req.params.term,
              },
            },
            {
                cabinet: {
                  [Op.substring]: req.params.term,
                },
              },
              {
                shelf: {
                  [Op.substring]: req.params.term,
                },
              },
              {
                title: {
                  [Op.substring]: req.params.term,
                },
              },
              {
                author: {
                  [Op.substring]: req.params.term,
                },
              },
              {
                pub_year: {
                  [Op.substring]: req.params.term,
                },
              },
              {
                pages: {
                  [Op.substring]: req.params.term,
                },
              },
              {
                category: {
                  [Op.substring]: req.params.term,
                },
              },
              {
                keep: {
                  [Op.substring]: req.params.term,
                },
              },
              {
                orig_own: {
                  [Op.substring]: req.params.term,
                },
              },
              {
                gifted: {
                  [Op.substring]: req.params.term,
                },
              },
              {
                note: {
                  [Op.substring]: req.params.term,
                },
              },
          ],
        },
      });
      if (data.length) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "not found" });
      }
    } catch (err) {
        console.log(err);
      res.status(500).json(err);
    }
  },
  updateData: async function (req, res) {
    try {
      const data = await db.Books.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (data.length) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "not updated" });
      }
    } catch (err) {
        console.log(err);
      res.status(500).json(err);
    }
  },
  deleteData: async function (req, res) {
    try {
      const data = await db.Books.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (data.length) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "not deleted" });
      }
    } catch (err) {
        console.log(err);
      res.status(500).json(err);
    }
  },
  addData: async function (req, res) {
    try {
      const data = await db.Books.create(req.body);
      if (data._options.isNewRecord) {
        res.status(200).json(data);
      } else {
        res.status(404).json({ message: "not created" });
      }
    } catch (err) {
        console.log(err);
      res.status(500).json(err);
    }
  },
};
