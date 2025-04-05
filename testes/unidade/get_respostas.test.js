const modelo = require('../../modelo');
const memoria = require('../../memoria');

beforeAll(() => {
  modelo.reconfig_repositorio(memoria);
});

test('get_respostas retorna todas as respostas da pergunta', async () => {
  const respostas = await modelo.get_respostas(3);

  expect(Array.isArray(respostas)).toBe(true);
  expect(respostas.length).toBe(2);
  expect(respostas[0].texto).toBe("Framework de testes.");
  expect(respostas[1].texto).toBe("Biblioteca para JS.");
});
