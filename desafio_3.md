📅 Módulo 3: Lógica e Formulários (A Calculadora)
Objetivo: Manipular inputs do usuário e lógica um pouco mais complexa.
🔍 Pesquisa (Teoria):
- [ ] Controlled Components: Como capturar o valor de um input em tempo real?
    Os componentes controlados usam os hooks como onState ou eventos como onChange para validar alterações em tempo real (inputs, textarea, select e etc), podendo direcionar ações e lógicas baseado no retorno dos observadores. Mas além disso, os componentes controlados nos trazem mais algumas vantagens, como gestão de estado previsível que garantem que os dados do formulário estejam sempre sincrozinados com o estado do react, validação dos dados mais ágil antes de mudar o estado e fazer o envio do formulário.
- [ ] Renderização Condicional: Usar operador ternário (? :) ou && para mostrar/esconder elementos.
A renderezação condicial, trabalha com condicionais onde podemos escolher o que é renderizado ou não na tela, de acordo com situações setadas na prórpia condicional, e combinando isso com os operadores ternários, conseguimos uma sintaxe mais limpa e mais direta, por exemplo:

Podemos evitar de escrever:
if (Componente1) {
    return <li className="item">{name} Tudo certo!</li>
}
    <li className="item">{name} Tudo errado!</li>

Podemos resumir isso com:

return(
    <li className="item">
    {Component1 ? name + "Tudo certo!" : name "Tudo errado!"}
    </li>
)

Temos o operador ternário && que faz uma validação, se caso nosso valor direito for verdadeiro, irá exibir o esquerdo, mas caso qualquer um deles seja falso, toda a expressão se torna falsa, e o false no react é considerado "vazio", tomando o comportamento de null ou undefined, não renderizando os mesmos. 

Amboras seguirão a ideia de: "Se existe o Component1, renderize {name} Tudo errado!, caso contrário, renderize {name} Tudo errado!.

Podemos usar a lógica acima para diversas opções, até mesmo para escolher renderizar com diferentes tags HTML a mesma informação

Podemos também atribuir condicionalmente um JSX à uma variável depois de iniciar fornecendo o tipo de conteúdo que iremos querer que seja exibido

Modelos de operadores ternários:
? - "caso x seja x, faça isso..."
: - "...caso contrário, faça isso..."
&& - "se ambos estão corretos..."

💻 Tarefa Prática: "Calculadora Simples"
- Criar dois inputs de texto (para os números) e 4 botões (+, -, * ,  /).
- Ao clicar no botão, mostrar o resultado abaixo.

*Desafio TS:
Garantir que os inputs aceitem apenas números (converter string para number).
Criar um type Operacao = 'soma' | 'subtracao' | 'multiplicacao' | 'divisao'; para controlar a função de cálculo.