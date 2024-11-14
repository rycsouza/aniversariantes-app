const axios = require("axios");
const Env = require("dotenv").config().parsed;
const URL_COMUNICACAO_API = Env.URL_COMUNICACAO_API;
const today = require("../getCurrentDayAndMonth")();
const FormData = require("form-data");
const fs = require("fs");

const sendNotification = async ({ name, phone, picture, groupName }) => {
  try {
    const formData = new FormData();

    formData.append("today", `${today.currentDay}/${today.currentMonth}`);
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("groupName", groupName);
    formData.append("comunicacaoTag", "birthday-message");

    // Se houver uma imagem, adicioná-la ao FormData
    // if (picture) {
    //   if (!picture.includes("http")) picture = fs.createReadStream(picture);
    //   formData.append("picture", picture);
    // }

    //Enviar notificação/mensagem contendo a imagem (se houver), nome, e telefone.
    const response = await axios.post(
      `${URL_COMUNICACAO_API}/whatsapp/sendGroupMessage`,
      formData,
      {
        headers: {
          ...formData.getHeaders(),
        },
      }
    );

    if (response.status !== 200)
      throw new Error("Error sending notification! Check the message log.");

    return {
      success: true,
      message: "Notification sent successfully!",
    };
  } catch (error) {
    throw error;
  }
};

module.exports = sendNotification;
