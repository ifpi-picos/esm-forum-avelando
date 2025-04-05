const modelo = require('../../modelo');
const memoria = require('../../memoria');

beforeAll(() => {
  modelo.reconfig_repositorio(memoria);
});

test('deleta uma resposta existente', async () => {
  const id = await modelo.cadastrar_resposta(2, "Resposta temporária");
  await modelo.deletar_resposta(id);
  const respostas = await modelo.get_respostas(2);
  const encontrada = respostas.find(r => r.id_resposta === id);
  expect(encontrada).toBeUndefined();
});
