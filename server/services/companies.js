const axios = require("axios");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const search = async (req, res, next) => {
  try {
    console.log(req.body.search);
    const { data } = await axios.post(
      "https://www.zaubacorp.com/custom-search",
      {
        search: req.body.search,
        filter: "company",
      }
    );
    let arr = data.toString().includes("id") ? data.toString().split('"') : [];
    let companies = [];
    arr.map((item, idx) => {
      if (item === " id=") {
        companies.push(arr[idx + 1]);
      }
    });
    companies.forEach((itm, idx) => {
      companies[idx] = {
        value: itm.toString().split("/"),
        label: itm.toString().split("/")[1].toString(),
      };
    });
    res.json({ status: 200, data: companies });
  } catch (e) {
    res.json({ status: 400, error: e });
  }
};
const addCompany = async (req, res, next) => {
  try {
    const company = await prisma.company.create({
      data: {
        cin: req.body.cin,
        name: req.body.name,
        user: {
          connect: {
            id: Number(req.body.userId),
          },
        },
        //userId: req.body.userId,
      },
    });

    res.json({ status: 200, data: company });
  } catch (e) {
    //console.log(e);
    if (e.code == "P2002") {
      res.json({ status: 400, error: "Already Added" });
      next();
    } else {
      res.json({ status: 500, error: e });
    }
  }
};

module.exports = {
  search,
  addCompany,
};
