const db = require("../../models");
const { Op } = require("sequelize");

module.exports = {
  getData: async function (req, res) {
    try {
      const data = await db.Buckets.findAll({});
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
      const data = await db.Buckets.findByPk(req.params.id);
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
      const data = await db.Buckets.findAll({
        where: {
          [Op.or]: [
            {
              item_nr: {
                [Op.substring]: req.params.term,
              },
            },
            {
                contents: {
                  [Op.substring]: req.params.term,
                },
              },
              {
                size: {
                  [Op.substring]: req.params.term,
                },
              },
              {
                stack: {
                  [Op.substring]: req.params.term,
                },
              },
              {
                level: {
                  [Op.substring]: req.params.term,
                },
              },
              {
                cnt: {
                  [Op.substring]: req.params.term,
                },
              },
              {
                lbs: {
                  [Op.substring]: req.params.term,
                },
              },
              {
                purch_dt: {
                  [Op.substring]: req.params.term,
                },
              },
              {
                notes: {
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
      const data = await db.Buckets.update(req.body, {
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
      const data = await db.Buckets.destroy({
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
      const data = await db.Buckets.create(req.body);
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
