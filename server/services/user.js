const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const getUserCompany = async (req, res, next) => {
  try {
    if (req.body.id) {
      const company = await prisma.user.findUnique({
        where: {
          id: Number(req.body.id),
        },
        include: {
          companies: true,
        },
      });
      res.json({ status: 200, data: company });
    } else {
      res.json({ status: 400, error: "Missing data" });
    }
  } catch (e) {
    console.log(e);

    res.json({ status: 500, error: e });
  }
};
const getAllUsers = async (req, res, next) => {
  try {
    const users = await prisma.user.findMany();

    res.json({ status: 200, data: users });
  } catch (e) {
    console.log(e);

    res.json({ status: 500, error: e });
  }
};
const addUser = async (req, res, next) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: req.body.name,
      },
    });
    res.json({ status: 200, data: user });
  } catch (e) {
    console.log(e);
    if ((e.code = "P2002")) {
      res.json({ status: 400, error: "Already Added" });
    }
    res.json({ status: 400, error: e });
  }
};
module.exports = {
  getUserCompany,
  getAllUsers,
  addUser,
};
