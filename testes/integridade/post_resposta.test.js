const modelo = require('../../modelo');
const bd = require('../../bd');

beforeAll(() => {
  modelo.reconfig_repositorio(bd);
});

test('cadastrar_resposta adiciona uma nova resposta', async () => {
  const texto = "Esta é uma resposta de teste.";
  const id_pergunta = 1;

  const id_resposta = await modelo.cadastrar_resposta(id_pergunta, texto);
  const respostas = await modelo.get_respostas(id_pergunta);

  expect(respostas.map(r => r.texto)).toContain(texto);
});
