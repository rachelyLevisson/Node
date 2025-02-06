import renderApi from '@api/render-api';

renderApi.auth('rnd_xmrXh9GTY3ECKGeztnqj2WLwOVy9');
renderApi.listServices({includePreviews: 'true', limit: '20'})
  .then(({ data }) => console.log(data))
  .catch(err => console.error(err));

  