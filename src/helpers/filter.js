export const filterGenderColor = (data, gender, favoriteColor) => {
  let arr = [];
  for (let i = 0; i < data.length; i+=1) {
    let item = data[i];

    let favoriteColorCondi = false;
    let genderCondi = false;

    if (item.favoriteColor === favoriteColor) {
      // item is possible, next condi
      favoriteColorCondi = true;
    } else {
      // item is impossible, this item not included
      continue;
    }

    if (item.gender === gender) {
      // item is possible
      genderCondi = true;
    } else {
      // item is impossible, this item not included
      continue;
    }

    if (favoriteColorCondi && genderCondi) {
      arr.push(item);
    } else {
      continue;
    }
  }

  return arr.length;
};


export const filterGenderFruit = (data, gender, favoriteFruit) => {
  let arr = [];
  for (let i = 0; i < data.length; i+=1) {
    let item = data[i];

    let favoriteFruitCondi = false;
    let genderCondi = false;

    if (item.favoriteFruit === favoriteFruit) {
      // item is possible, next condi
      favoriteFruitCondi = true;
    } else {
      // item is impossible, this item not included
      continue;
    }

    if (item.gender === gender) {
      // item is possible
      genderCondi = true;
    } else {
      // item is impossible, this item not included
      continue;
    }

    if (favoriteFruitCondi && genderCondi) {
      arr.push(item);
    } else {
      continue;
    }
  }

  return arr.length;
};

