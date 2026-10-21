// =========================================================================
// ⚙️ CONFIGURAÇÕES DE FÍSICA E FORÇA DO JOGO
// =========================================================================
const GAME_CONFIG = {
  // 1. Gravidade do projétil (Valores menores = parábola mais alta e lenta)
  GRAVITY: 0.09, // 0.12 pad   .15

  // 2. Velocidade de carregamento da barra de força (Menor = carrega mais devagar)
  CHARGING_SPEED: 0.35,

  // 3. Multiplicador de Alcance/Distância máxima (Ajuste para dar mais/menos alcance aos 100%)
  POWER_SCALE: 0.135, //0.12 pad

  // 4. Fator de desaceleração do projétil na tela (Sub-passos por frame - menor = mais lento e suave)
  PROJECTILE_SUBSTEPS: 0.75, // 0.6 pad

  // 5. Raio do buraco da explosão (Cratera)
  CRATER_RADIUS: 20, // 28 pad

  // 6. Configurações do Vento
  WIND_MAX: 9, // Intensidade máxima do vento (-9 a +9)
  WIND_MIN_TURNS: 20, // Duração mínima em turnos
  WIND_MAX_TURNS: 50, // Duração máxima em turnos

  // 7. Limite de passos de movimento do mobile
  MAX_MOVEMENT_STEPS: 10, // Quantidade de passos disponíveis por turno

  // 8. Distância percorrida em cada passo (em pixels)
  MOVEMENT_STEP_SIZE: 6,

  // 9. Intervalo entre os passos ao segurar a tecla (em milissegundos)
  MOVEMENT_INTERVAL: 120,

  // 10. Configurações de movimento em slopes
  MAX_SLOPE_ANGLE: 30, // Ângulo máximo (em graus) que o mobile pode subir
  ALLOW_SLOPE_MOVEMENT: true, // Se o mobile pode se mover em slopes
  SLOPE_MOVEMENT_PENALTY: 2, // Passos extras necessários para subir slopes

  // 11. Configurações de salto (CTRL)
  JUMP_DISTANCE: 40, // Distância lateral total do salto em pixels
  JUMP_HEIGHT: 50, // Altura máxima da parábola em pixels
  JUMP_DURATION: 600, // Duração total do salto em milissegundos
  JUMP_STEP_COST: 3, // Custo em passos para dar um salto
};
