function status(request, response) {
  response
    .status(200)
    .json({ chave: "Alunos do curso curso.dev são alunos acima da média!" });
}

export default status;
