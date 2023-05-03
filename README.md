# Projeto ABP

BookSpot, o melhor sistema para gerenciamento de reservas.

## Integrantes

**Adriano Reus Savi**

**Gustavo Thomé**

**Luigi Milanez**

**Miguel Cimolin**
## Descrição Geral
Sistema para gerenciamento de reservas de hotelarias.

## Objetivo do Projeto

Acredite se quiser, ainda existem empresas de hotelaria que não abraçaram as facilidades que a tecnologia pode oferecer. O principal intuito do BookSpot é deixar a gestão de reservas mais eficaz. 

Assim como consta as imagens em anexo, são 4 principais funcionalidades *(4 telas, sem contar o Login)*:
- Cadastro de Reservas -> Formulário para registro.
- Check-In -> Função de realizar Check-In de uma reserva ativa.
- Check-Out -> Função de realizar Check-Out de uma reserva ativa.
- Alteração -> Função de edição para manipulação de dados já cadastrados.

## Público-alvo
Empresas de hotelaria que estão cansadas de se estressar com o Controle de Reservas. O sistema busca facilitar tudo isso, tornando todo o estresse em flores.

## Tecnologias/Ferramentas
Iremos utilizar React com Vite.js.

## Características/Comentários

A princípio, este é um sistema para ser utilizado **_apenas_** por um Admin, ou seja, o atendente/administrador do hotel deve ter acesso a ele. Tendo isso em vista, partiremos para as funcionalidades.
Após realizar login, o Admin terá acesso a todas as funcionalidades: Cadastro de Reservas, Check-In, Check-Out e Alteração. Uma tela diferente para cada função. *Contando com o Login, totalizamos 5 telas.*

- O Cadastro de Reservas se consiste em um formulário, onde o hóspede precisará informar dados pessoais para concluir o registro: nome, CPF, telefone, sexo....

- O Check-In deve ser feito em reservas ativas. Por exemplo: O cliente acaba de chegar no hotel e realiza o Check-In.

- O Check-Out deve ser feito em reservas ativas que já passaram por Check-In. Por exemplo: O cliente está indo embora pois acabaram suas férias, portanto irá realizar o Check-Out.

- A funcionalidade de Alteração será utilizada para quando ocorrerem equívocos, por exemplo dados incorretos. Ou caso haja a necessidade de alteração de algum dos dados fornecidos no cadastro.

- As funcionalidades de Check-In, Check-Out e Alteração terão propriedades de Filtragem, afinal trabalham com alto fluxo de informações.

- Todas as informações serão salvas em um Banco de Dados, para garantir a segurança dos dados. 

## Preview

![fetchdemo](https://user-images.githubusercontent.com/89088603/235821825-3a43157d-0440-4d1d-9895-fb8e5c3ae1bb.png)
![fetchdemo](https://user-images.githubusercontent.com/89088603/235821822-cebedd75-6d28-453f-a47a-5992922ef181.png)
