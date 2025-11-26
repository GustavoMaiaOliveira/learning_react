Pesquisa Canal de Estudos 1:

- **Diferença entre JS e TS:** Por que usar TypeScript? O que é tipagem estática vs dinâmica?
    - O TypeScript deve ser usado para ganhar segurança, pois valida os dados de entrada e saída.
    A tipagem estática é definida por quem está programando a aplicação, definindo a entrada ou saída como número, string, boolean e etc. Já a tipagem dinâmica funciona automáticamente quando o código é compilado, como uam checagem que define o tipo.
- **O que é o React:** Conceito de *Virtual DOM*, *SPA (Single Page Application)* e Componentização:
    - O virtual DOM, faz um modelo idêntico a árvore construída no DOM da página, porém, nele podemos alterar somente o necessário, por exemplo, caso iremos alterar o nome de usuário, não preciso que carregue novamente as politicas de privacidade nos roda pé do site, esse desempenho pode apresentar mais eficiencia em projetos de médio para grande porte.
    - O SPA trabalha fazendo essa parte de manter uma página e apenas alterar as informações nas mesmas, visando reutilizar tudo que for possível e manter sempre que possível também, o que for estático e traga mais performance
    - A componetização é a forma que o React usa para trabalhar como um grande quebra-cabeça, separando tudo em pequenas partes, e colocando todas lado a lado, de forma na qual cada uma possui seus atributos e estilos, dificultando que um componente acabe portando propriedades de outros
- **JSX/TSX:** O que é essa sintaxe que mistura HTML com JavaScript?
    - JSX (JavaScript XML) é uma sintaxe que nos permite escrever JavaScript com demarcações, usada nos códigos de React para construções web.
    - TSX (TypeScript XML) tem a mesma finalidade do JSX, porém, como é um superset de JavaScript, ele permite ter maior controle sobre o projeto, adicionando mais segurança, manutenibilidade e tipagem.

Tarefa 1:

**💻 Tarefa Prática: "O Olá Mundo Moderno"**

- Configurar um projeto novo usando **Vite** (é mais rápido e padrão atual de mercado, evite create-react-app).
- Comando: npm create vite@latest meu-app -- --template react-ts
- Limpar os arquivos padrões (CSS e logos) para ter uma tela branca.
- Criar um componente chamado <BoasVindas /> que recebe uma **prop** nome (string) e exibe na tela: "Olá, [nome], seja bem-vindo!".

**Desafio TS:** Criar a interface ou type para definir as props desse componente.