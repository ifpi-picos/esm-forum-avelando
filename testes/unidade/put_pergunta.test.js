const modelo = require('../../modelo');
const memoria = require('../../memoria');

beforeAll(() => {
  modelo.reconfig_repositorio(memoria);
});

test('atualiza o texto de uma pergunta existente', async () => {
  const id = await modelo.cadastrar_pergunta("Texto antigo");
  await modelo.atualizar_pergunta(id, "Texto novo");
  const pergunta = await modelo.get_pergunta(id);
  expect(pergunta.texto).toBe("Texto novo");
});
