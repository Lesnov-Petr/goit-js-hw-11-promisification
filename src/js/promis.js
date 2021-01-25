const promis = new Promise((resolve, reject) => {
  const success = Math.random() > 0.5;
  success ? resolve('Успех') : reject('Ошибка');
  //   setTimeout(() => {
  //     if (success) {
  //       resolve('Успех');
  //     }
  //     reject('Ошибка');
  //   }, 1000);
});

let data;

console.log(data);

promis
  .then(result => console.log('data в нутри промиса', (data = result)))
  .catch(erro => console.log(erro));

console.log(data);
