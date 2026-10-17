# Office Wars - Fase 3: Dois Jogadores e Turnos

Um jogo de guerra baseado em turnos implementado em JavaScript puro com HTML5 Canvas, onde dois jogadores competem em turnos para destruir o terreno do adversário e derrotá-lo.

## 🎮 Sobre o Jogo

Este é um jogo de estratégia em turnos onde dois tanques (Jogador 1 e Jogador 2) disparam projéteis contra o terreno do adversário. O objetivo é reduzir a vida do tanque inimigo a 0, levando em conta fatores como:

- Ângulo de tiro
- Força do projétil
- Vento (que varia a cada turno)
- Física de projétil (gravidade)

## 🛠️ Tecnologias Utilizadas

- **HTML5 Canvas** - Renderização gráfica
- **JavaScript (ES6+)** - Lógica do jogo
- **CSS** - Estilização da interface

## 🚀 Como Executar

1. Clone o repositório:

   ```bash
   git clone https://github.com/rafaelmpereira/office-wars.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd office-wars
   ```

3. Abra o arquivo `index.html` em qualquer navegador moderno:

   ```bash
   # No Linux/Mac
   open index.html

   # Ou arraste o arquivo para uma aba do navegador
   ```

> **Nota:** O jogo funciona apenas em arquivos locais (não requer servidor).

## 🎯 Controles

| Tecla                | Ação                                     |
| -------------------- | ---------------------------------------- |
| **Setas Cima/Baixo** | Ajusta o ângulo do canhão                |
| **ESPAÇO**           | Carrega a força do tiro (segure e solte) |

### Controles por Jogador

- **Jogador 1 (Vermelho)**: Ângulos de 0° a 90° (mirando para a direita)
- **Jogador 2 (Azul)**: Ângulos de 90° a 180° (mirando para a esquerda)

## 📊 Funcionalidades

- ✅ Sistema de vida (HP) para ambos os jogadores
- ✅ Turnos alternados
- ✅ Vento aleatório que afeta o projétil
- ✅ Dano baseado na distância da explosão
- ✅ Cráteres no terreno ao ser atingido
- ✅ Gravidade aplicada aos projéteis
- ✅ Barra de força visual durante a carga

## 🎯 Objetivo do Jogo

Derrote o tanque adversário reduzindo seu HP a 0. Cada turno, um jogador dispara um projétil que pode:

- Destruir o terreno
- Causar dano ao tanque inimigo (se próximo o suficiente)
- Ser afetado pelo vento atual

## 📁 Estrutura do Projeto

```
office-wars/
├── index.html          # Jogo principal
└── README.md           # Documentação
```

## 🔧 Como Funciona

1. **Terreno**: Gerado proceduralmente com ondas senoidais
2. **Física**: Projétil afetado por gravidade e vento
3. **Colisão**: Detecção de colisão com terreno e tanques
4. **Turnos**: Alternância automática após cada tiro

## 🎨 Personalização

O jogo pode ser facilmente modificado alterando:

- Velocidade do projétil
- Força da gravidade
- Raio de dano
- Velocidade de carregamento

## 📝 Licença

Este projeto é open-source e pode ser utilizado para fins educacionais e de entretenimento.

## 🤝 Créditos

Desenvolvido como parte de uma série de projetos de desenvolvimento de jogos com JavaScript puro.

---

**Divirta-se jogando!** 🎮
