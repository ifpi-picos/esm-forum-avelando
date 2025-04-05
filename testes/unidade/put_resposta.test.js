const modelo = require('../../modelo');
const memoria = require('../../memoria');

beforeAll(() => {
  modelo.reconfig_repositorio(memoria);
});

test('atualiza o texto de uma resposta existente', async () => {
  const id = await modelo.cadastrar_resposta(1, "Texto antigo");
  await modelo.atualizar_resposta(id, "Texto novo");
  const respostas = await modelo.get_respostas(1);
  const encontrada = respostas.find(r => r.id_resposta === id);
  expect(encontrada.texto).toBe("Texto novo");
});
