const modelo = require('../../modelo');
const bd = require('../../bd');

beforeAll(() => {
  modelo.reconfig_repositorio(bd);
});

test('atualiza o texto de uma pergunta existente', async () => {
  const id = await modelo.cadastrar_pergunta("Texto antigo");
  await modelo.atualizar_pergunta(id, "Texto novo");
  const pergunta = await modelo.get_pergunta(id);
  expect(pergunta.texto).toBe("Texto novo");
});
