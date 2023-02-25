const sharp = require("sharp");
const fs = require("fs");

const makePng = async (background) => {
  return (testPng = await sharp({
    create: {
      width: 480,
      height: 720,
      channels: 4,
      background: background,
    },
  })
    .png()
    .toBuffer());
};

const makeJpeg = async (background) => {
  return (testPng = await sharp({
    create: {
      width: 480,
      height: 720,
      channels: 4,
      background: background,
    },
  })
    .jpeg()
    .toBuffer());
};

const makeHeic = async (background) => {
  return (testPng = await sharp({
    create: {
      width: 480,
      height: 720,
      channels: 4,
      background: background,
    },
  })
    .heif()
    .toBuffer());
};

const start = async function () {
  const png = await makePng({ r: 255, g: 0, b: 0, alpha: 0.5 });
  fs.writeFile("./testimages/480720.png", png, function (err) {
    console.log(err);
  });

  const jpeg = await makeJpeg({ r: 255, g: 0, b: 0, alpha: 0.5 });
  fs.writeFile("./testimages/480720.jpeg", jpeg, function (err) {
    console.log(err);
  });
  const heic = await makeHeic({ r: 255, g: 0, b: 0, alpha: 0.5 });
  fs.writeFile("./testimages/480720.heic", heic, function (err) {
    console.log(err);
  });
};

start();
