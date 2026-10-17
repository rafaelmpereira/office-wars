// =========================================================================
// ⚙️ CONFIGURAÇÕES DE FÍSICA E FORÇA DO JOGO
// =========================================================================
const GAME_CONFIG = {
  // 1. Gravidade do projétil (Valores menores = parábola mais alta e lenta)
  GRAVITY: 0.12,

  // 2. Velocidade de carregamento da barra de força (Menor = carrega mais devagar)
  CHARGING_SPEED: 0.4,

  // 3. Multiplicador de Alcance/Distância máxima (Ajuste para dar mais/menos alcance aos 100%)
  POWER_SCALE: 0.13,

  // 4. Fator de desaceleração do projétil na tela (Sub-passos por frame - menor = mais lento e suave)
  PROJECTILE_SUBSTEPS: 0.55,

  // 5. Raio do buraco da explosão (Cratera)
  CRATER_RADIUS: 24,
};
