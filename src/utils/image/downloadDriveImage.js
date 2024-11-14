const fs = require("fs");
const { drive } = require("../../config/google");

const downloadDriveImage = async ({ name, image_id }) => {
  try {
    const response = await drive.files.get(
      {
        fileId: image_id,
        alt: "media",
      },
      {
        responseType: "stream",
      }
    );

    if (!response.headers["content-type"]?.startsWith("image/"))
      return {
        success: false,
      };

    if (!fs.existsSync("./tmp")) {
      fs.mkdirSync("./tmp", { recursive: true });
    }

    new Promise((resolve, reject) => {
      const dest = fs.createWriteStream(
        `./tmp/${name.split(" ")[0].toLowerCase()}.jpg`
      );
      response.data
        .on("end", () => resolve())
        .on("error", (err) => reject(err))
        .pipe(dest);
    });

    return {
      success: true,
      path: `./tmp/${name.split(" ")[0].toLowerCase()}.jpg`,
    };
  } catch (error) {
    throw error;
  }
};

module.exports = downloadDriveImage;
