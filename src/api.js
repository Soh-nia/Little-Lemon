function seededRandom(seed) {
  const m = Math.pow(2, 35) - 31;
  const a = 185852;
  let s = seed % m;

  return function () {
    return (s = (s * a) % m) / m;
  };
}

export const fetchAPI = (date) => {
  const dateString = date instanceof Date ? date.toISOString().split('T')[0] : date;

  const result = [];
  const random = seededRandom(new Date(dateString).getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }

  return result;
};

export const submitAPI = (formData) => {
  if (!true) {
    console.log(formData);
  }
  return true;
};
