const modelo = require('../../modelo');
const bd = require('../../bd');

beforeAll(() => {
  modelo.reconfig_repositorio(bd);
});

test('get_pergunta retorna a pergunta correta do BD', async () => {
  const texto = "Pergunta para teste de integração";
  const id = await modelo.cadastrar_pergunta(texto);
  const pergunta = await modelo.get_pergunta(id);

  expect(pergunta).toBeDefined();
  expect(pergunta.id_pergunta).toBe(id);
  expect(pergunta.texto).toBe(texto);
});
