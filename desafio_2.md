Pesquisa Canal de Estudos 2:

📅 Módulo 2: Estado e Interatividade Básica

**Objetivo:** Entender como o React reage a mudanças de dados.

**🔍 Pesquisa (Teoria):**

- **Hooks Básicos:** Para que serve o useState?
    - Os Hooks são “auxiliares” para funções, servem para 3 fins: gerenciamento de estado, gerenciamento de vida do componente e criar lógicas reutilizaveis entre os componentes
    - O useState serve para podermos observar o estado do nosso componente e observar os eventos
- **Imutabilidade:** Por que não podemos fazer variavel = valor e devemos usar setVariavel?
    - A imutabilidade é importante pois evita que alterações em variáveis no nosso código afetem partes onde não tenhamos intenções de alterar, como um ID que pode acabar sendo apagado em certa parte do processo, mas não queremos que ele “suma”
- **Eventos no React:** Como funcionam onClick e onChange?
    - São eventos dependentes de ações do usuário ou condições.
    - O onClick é um evento que aguarda o clique o usuário em um botão, caixa e etc, e executa uma lógica de acordo com isso.
    - O onChange é um evento que realiza uma lógica de acordo quando o valor é alterado

Tarefa 2:

**💻 Tarefa Prática: "O Contador (com um twist)"**

- Criar um contador simples com botões de + e -.

**Regra de Negócio:** O contador não pode ficar negativo (travar no 0).

**Desafio TS:** Tipar o estado explicitamente, ex: const [count, setCount] = useState<number>(0);.