const getCurrentDayAndMonth = () => {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");

  return { currentDay: day, currentMonth: month };
};

module.exports = getCurrentDayAndMonth;
