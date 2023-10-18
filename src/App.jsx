const luana = {
  cliente: "Luana",
  idade: 27,
  compras: [
    { nome: "notebook", preco: "R$ 2500"},
    { nome: "Geladeira", preco: "R$ 3000"},
    { nome: "Cozinha planejada", preco: "R$ 5000"},
  ],
  ativa:true
}

const App = () => {
  const dados = luana;

  const total = dados.compras
    .map((item) => Number(item.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b, 0);

  return (
    <>
      <p>Nome: {dados.cliente} </p>
      <p>Idade: {dados.idade} </p>
      <p>
        Situação:{' '}
        <span style={{ color: dados.ativa ? 'green' : 'red' }}>
          {dados.ativa ? 'Ativa' : 'Inativa'}
        </span>
      </p>
      <p>Total: R$ {total}</p>
      {total > 10000 && <p>Você está gastando muito</p>}
    </>
  )
}

export default App
