const getFrontendRedirect = app => {
  let frontEndURL = `${process.env.FRONTEND_BASE_URL}`;
  if (frontEndURL === 'http://localhost:5173/') return frontEndURL;
  switch (app) {
    case 'nannies':
      frontEndURL = 'https://nanny-services-umber.vercel.app/';
      break;
    case 'psychologists':
      frontEndURL = 'https://psychologists-services-virid.vercel.app/';
      break;
    case 'dataanalysis':
      frontEndURL = 'https://dataanalysis-seven.vercel.app/';
      break;
  }

  return frontEndURL;
};

export default getFrontendRedirect;
