const downloadDriveImage = require("./downloadDriveImage");

const generateBirthdayImage = async (data) => {
  try {
    if (!data.picture) return false;

    const { path } = await downloadDriveImage({
      name: data.name,
      image_id: data.picture.split("id=")[1],
    });

    return {
      success: true,
      path,
    };
  } catch (error) {
    console.error("Image not created!");
    throw error;
  }
};

module.exports = generateBirthdayImage;
