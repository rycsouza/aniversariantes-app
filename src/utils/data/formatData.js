const getCurrentDayAndMonth = require("../getCurrentDayAndMonth");

const formatData = (rows) => {
  const firstRow = rows[0]; //Google Sheets retorna, no index 0, um array: ["Nome Completo", "Data de Nascimento", "Telefone", "Envie sua melhor foto"]

  const name = firstRow.indexOf("Nome Completo");
  const birthday = firstRow.indexOf("Data de Nascimento");
  const phone = firstRow.indexOf("Telefone");
  const picture = firstRow.indexOf("Envie sua melhor foto");
  const gender = firstRow.indexOf("Sexo");

  const { currentDay, currentMonth } = getCurrentDayAndMonth();

  return rows
    .slice(1)
    .map((array) => ({
      name: array[name],
      birthday: array[birthday],
      phone: array[phone],
      picture: array[picture],
      gender: array[gender],
    }))
    .filter((obj) => {
      const [day, month] = obj.birthday.split("/");

      return day == currentDay && month == currentMonth;
    });
};

module.exports = formatData;
