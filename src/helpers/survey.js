const orgnizeSurveyData = (data, favoriteColor, favoriteFruit, gender) => {
  let arr = [];
  for (let i = 0; i < data.length; i+=1) {
    let item = data[i];

    let favoriteColorCondi = false;
    let favoriteFruitCondi = false;
    let genderCondi = false;

    // empty
    if(favoriteColor === '') {
      // item is possible, next condi
      favoriteColorCondi = true;
    } else {
      if(item.favoriteColor === favoriteColor) {
        // item is possible, next condi
        favoriteColorCondi = true;
      } else {
        // item is impossible, this item not included
        continue;
      }
    }

    // empty
    if(favoriteFruit === '') {
      // item is possible
      favoriteFruitCondi = true;
    } else {
      if(item.favoriteFruit === favoriteFruit) {
        // item is possible
        favoriteFruitCondi = true;
      } else {
        // item is impossible, this item not included
        continue;
      }
    }

    // empty
    if(gender === '') {
      // item is possible
      genderCondi = true;
    } else {
      if(item.gender === gender) {
        // item is possible
        genderCondi = true;
      } else {
        // item is impossible, this item not included
        continue;
      }
    }

    if (
      favoriteColorCondi === true &&
      favoriteFruitCondi === true &&
      genderCondi === true
    ) {
      arr.push(item);
    } else {
      continue;
    }
  }

  return arr;
};

export default orgnizeSurveyData;
