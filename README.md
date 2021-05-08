# Revisão - Introdução JS

## String 
* Por que algumas vezes usamos aspas duplas e outras vezes usamos aspas simples nas strings? Qual a diferença? E quanto ao uso da crase? 

String é uma cadeia de caracteres
E se eu quero escrever textos em javascript eu preciso usar uma das três formas abaixo.  Elas não possuem diferenças, só ter atenção pois você não pode em uma única string começar com uma e terminar com outra. 

Os templates literals podemos usar quando queremos interpolar uma string com uma expressão de javascript. 

* Aspas simples ' ' 
* Aspas duplas " " 
* Template literals ``

Até onde eu aprendi é preferência da pessoa desenvolvedora ou acordo do time.

## Estrutura de repetição
* Não entendi a diferença entre For, While e Do While.

*Loop, laço, iteração ou estrutura de repetição.
A gente faz diariamente atividades com repetição, por exemplo num exercicío físico. Digamos que nosso personal nos mandou fazer uma série de 10 pulos de corda. A gente pode criar uma função pulaCorda() e quando ela for chamada, dentro dela irá executar 10 vezes o console.log com a string pulei a corda e o valor da repetição digitado manualmente. 
Agora se o professor mudar a série para 100 vezes, vai ficar chato digitar 100 consoles, certo? 
É aí que as estruturas de repetição podem nos ajudar, temos um ponto de partida e um ponto de chegada para nosso sistema, vamos começar do pulo 1 e vamos até o pulo 100 e queremos mostrar isso no console. Podemos fazer isso com for, while e também com o do...while.Então quando usar cada um? Vamos debugar para visualizar a diferença!*

* clica no besouro
* pede pra abrir o terminal de debug
* define a variavel no watch
* marca o breakpoint
* e vai apertando f10 

*while faz o teste lógico no início e sendo verdadeiro ele executa o bloco de código*

*do...while primeiro executa o bloco e depois faz o teste lógico*

*for é a estrutura de repetição com variavél de controle, a gente usa quando sabe exatamente qual são os nossos pontos de partida e de chegada.* 


## class x function 

* Por que quando se usa classes com javascript, é preciso usar o this para definir propriedades?

*Antes de 2016 as classes eram escritas como funções e quando a gente queria declarar as propriedades usavamos var, após 2015 com o es6 usamos a palavra reservada this para internamente da classe associar um valor.*


* Qual a função do constructor nas classes?

*As classes em JavaScript têm um método constructor que permite definir campos quando o objeto é instanciado com uma class, ou seja, é esse método que faz a contrução do objeto quando a gente cria uma intância dessa classe usando a palavra reservada new. Cada classe pode ter apenas um constructor. Se houver mais de um, SyntaxError será lançado. O constructor também pode chamar o método super para chamar o constructor de outra classe se a classe estender uma classe mãe. Configurando assim a herança na POO.*

* Quais seriam as situações que seria mais lógico usar classe ao invés de uma função?

*O mais importante a lembrar: as classes são apenas funções JavaScript normais e antes eram declaradas sem o uso da class sintaxe. Que somente foi adicionado ao ES6(2015) para tornar mais fácil declarar e herdar objetos complexos.*

*A principal diferença entre a sintaxe class e function é que function sofre hoisting, enquanto class não. Isso significa que um objeto nunca pode ser instanciado executando uma classe que foi declarada posteriormente. Enquanto é possível executar uma funçao antes e declarar depois. Pois o interpretador do javascript eleva a função para o topo da página.*

*Agora para decidir quando usar class ou function, é muito importante lembrar dos conceitos da programação orientada a objeto. Por exemplo quando nós encapsulamos a lógica em uma class, o código fica muito mais limpo e de fácil entendimento em vez de criarmos várias funções.*

* Não consegui entender classes no JS.

*Classes são como formas/moldes que definem os métodos e as propriedades para instanciarmos um objeto. Dentro dela não definimos nenhum dado ou informação é apenas a forma de como nosso objeto irá se parecer. Já objetos são as versões instanciadas dessas classes, essencialmente uma versão especifica dessa classe com os valores para as propriedades. Por exemplo se criarmos uma class Parede que recebe a propriedade cor, ela não diz qual cor será pintada essa parede, apenas diz que quando for criado um objeto nova parede ela irá receber um valor para cor.*

