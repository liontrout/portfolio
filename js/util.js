const debounce = (func, delay) => {
  let timeoutId;
  
  return (e) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(()=>func(e), delay);
  };
};

const assetUrl = {
  itfin: [
    'itfin01',
    'itfin02',
    'itfin03',
    'itfin04',
    'itfin05',
    'itfin06'
  ],
  ods: [
    'pension01',
    'pension02',
    'pension03',
    'pension04',
    'pension05',
    'pension06'
  ]
};