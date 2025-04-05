const modelo = require('../../modelo');
const memoria = require('../../memoria');

beforeAll(() => {
  modelo.reconfig_repositorio(memoria);
});

test('deleta uma pergunta existente', async () => {
  const id = await modelo.cadastrar_pergunta("Será deletada");
  await modelo.deletar_pergunta(id);
  const pergunta = await modelo.get_pergunta(id);
  expect(pergunta).toBeUndefined();
});
