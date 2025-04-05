const modelo = require('../../modelo');
const bd = require('../../bd');

beforeAll(() => {
  modelo.reconfig_repositorio(bd);
});

test('cadastrar_pergunta adiciona uma nova pergunta', async () => {
  const texto = "Nova pergunta de teste";
  const id = await modelo.cadastrar_pergunta(texto);

  const pergunta = await modelo.get_pergunta(id);
  expect(pergunta.texto).toBe(texto);
});
