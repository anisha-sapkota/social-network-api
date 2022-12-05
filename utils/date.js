// function for formatting date object to DD/MM/YYYY
const formatDate = (date) => {
  const dateObject = new Date(date);
  const day = dateObject.getDate();
  const month = dateObject.getMonth();
  const year = dateObject.getFullYear();

  return `${day}/${month}/${year}`;
};

module.exports = { formatDate };
