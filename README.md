<h1 align="center" style="font-weight: bold;">Subterranean Maze 🧩</h1>

<div align="center">

[![MIT license](https://img.shields.io/badge/License-MIT-green.svg)](https://lbesson.mit-license.org/)
![Maintainer](https://img.shields.io/badge/maintainer-yes-green)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

</div>

<p align="center">
 <a href="#descrição">Descrição</a> • 
 <a href="#tecnologias-utilizadas">Tecnologias utilizadas</a> • 
 <a href="#uso">Uso</a> •
 <a href="#contribuição">Contribuição</a> •
 <a href="#contribuidores">Contribuidores</a> •
 <a href="#licença">Licença</a> 
</p>

## Descrição

SubterraneanMaze é uma implementação em JavaScript que resolve labirintos representados por matrizes. Usando o algoritmo de Busca em Largura (BFS), encontra o caminho mais curto entre os pontos de início ('S') e fim ('E'). Caminhos livres são representados por "" e bloqueados por "#". O caminho percorrido é retornado como uma lista de coordenadas.

## Tecnologias utilizadas:

- Node.js
- JavaScript

## Uso

A aplicação resolve labirintos predefinidos. Basta carregar o código e ele automaticamente gera a solução para os labirintos incluídos.

### Clonando repositório:

    git clone https://github.com/davivaldez/SubterraneanMaze.git

### Alterando diretório:

    cd SubterraneanMaze/

### Executando os testes:

    node tests/tests.js

### Exemplo de uso:

```javascript
import { SubterraneanMaze } from "../src/SubterraneanMaze.js";

const maze = new SubterraneanMaze([
  ["#", "", "", "", "", "#", ""],
  ["", "S", "", "", "#", "", ""],
  ["", "", "#", "", "", "#", ""],
  ["", "#", "", "", "", "#", "E"],
  ["", "", "", "", "", "", ""],
]);

maze.createGraph();
maze.showRoute();
```

## Contribuição

Contribuições são bem-vindas! Siga as etapas abaixo para contribuir com o projeto:

1. Faça um **Fork** no repositório.
2. Crie uma **branch** para suas mudanças.
3. Faça um **commit** das suas alterações.
4. Envie suas mudanças com um **push**.
5. Abra um **Pull Request**.

Obrigado por contribuir!

## Contribuidores

Atualmente, este projeto é mantido por um único contribuidor:

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/davivaldez">
        <img src="https://avatars.githubusercontent.com/u/131072655?v=4" width="100px;" alt="Davi Valdez Profile Picture"/><br>
        <p>
          <b>Davi Valdez</b>
        </p>
      </a>
    </td>
  </tr>
</table>

Embora eu seja o único contribuidor até o momento, este projeto é aberto para contribuições da comunidade. Se você estiver interessado em contribuir, siga as instruções na seção de [Contribuição](#contribuição). Obrigado pelo seu interesse!

## Licença

Este projeto está licenciado sob a [MIT licensed](./LICENSE).
