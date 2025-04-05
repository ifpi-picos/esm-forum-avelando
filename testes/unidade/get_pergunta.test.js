const modelo = require('../../modelo');
const memoria = require('../../memoria');

beforeAll(() => {
  modelo.reconfig_repositorio(memoria);
});

test('get_pergunta retorna a pergunta correta', async () => {
  const pergunta = await modelo.get_pergunta(2);

  expect(pergunta).toBeDefined();
  expect(pergunta.id_pergunta).toBe(2);
  expect(pergunta.texto).toBe('O que é Node.js?');
});
