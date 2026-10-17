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
  PROJECTILE_SUBSTEPS: 0.7, // 0.6 pad

  // 5. Raio do buraco da explosão (Cratera)
  CRATER_RADIUS: 20, // 28 pad

  // 6. Configurações do Vento
  WIND_MAX: 9, // Intensidade máxima do vento (-9 a +9)
  WIND_MIN_TURNS: 20, // Duração mínima em turnos
  WIND_MAX_TURNS: 50, // Duração máxima em turnos
};
