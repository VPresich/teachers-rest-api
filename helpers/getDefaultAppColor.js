const getDefaultAppColor = app => {
  let color = 'yellow';

  switch (app) {
    case 'teachers':
      color = 'yellow';
      break;
    case 'nannies':
      color = 'red';
      break;
    case 'psychologists':
      color = 'green';
      break;
    default:
      color = 'yellow';
  }

  return color;
};

export default getDefaultAppColor;
