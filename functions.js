// Valida o texto da tarefa (não-vazio e até 140 chars)
function isValidTask(text) {
  return typeof text === 'string' && text.trim().length > 0 && text.trim().length <= 140;
}
module.exports = { isValidTask };
