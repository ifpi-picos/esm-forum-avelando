const modelo = require('../../modelo');
const bd = require('../../bd');

beforeAll(() => {
  modelo.reconfig_repositorio(bd);
});

test('get_respostas retorna todas as respostas da pergunta', async () => {
  const textoPergunta = "Teste de respostas múltiplas";
  const idPergunta = await modelo.cadastrar_pergunta(textoPergunta);

  await modelo.cadastrar_resposta(idPergunta, "Framework de testes.");
  await modelo.cadastrar_resposta(idPergunta, "Biblioteca para JS.");

  const respostas = await modelo.get_respostas(idPergunta);

  expect(Array.isArray(respostas)).toBe(true);
  expect(respostas.length).toBe(2);
  expect(respostas[0].texto).toBe("Framework de testes.");
  expect(respostas[1].texto).toBe("Biblioteca para JS.");
});
