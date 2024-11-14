const {
  getData,
  formatData,
  generateBirthdayImage,
  sendNotification,
} = require("../utils/index.js");

class SheetsController {
  static async notifyBirthday(request, response) {
    try {
      const { groupName } = request.all();

      const data = await getData();
      if (!data?.length) return response.status(200).json([]);

      const formattedData = formatData(data);

      if (!formattedData?.length) return response.status(200).json([]);

      for (const organizedData of formattedData) {
        const image =
          (await generateBirthdayImage(organizedData)).path ??
          organizedData.picture;

        await sendNotification({
          name: organizedData.name,
          phone: organizedData.phone,
          picture: image,
          groupName,
        });
      }

      return response.status(200).json({
        success: true,
        message: "Action executed successfully!",
      });
    } catch (error) {
      console.error(
        "The process has been completed! An error occurred: ",
        error
      );
      throw error;
    }
  }
}

module.exports = SheetsController;