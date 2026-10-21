// =========================================================================
// 📦 REGISTRO CENTRAL DE MOBILES
// =========================================================================
//
// Este arquivo é a única fonte de verdade sobre os mobiles do Office Wars.
// Cada definição de mobile reúne:
//
//   • Identidade: id, nome, descrição e tecla de seleção.
//   • Atributos exclusivos: HP máximo, passos disponíveis, alcance do passo,
//     intervalo de movimento e custo/distância/altura/duração do salto.
//   • Design do mobile: design.draw(ctx, player).
//   • Design do projétil: projectile.draw(ctx, projectile), preparado para
//     evoluções futuras (explosivos, sprays, rajes, etc.).
//
// O index.html apenas consulta este registro, portanto adicionar um novo
// mobile não exige alterar a lógica principal do jogo.
//
// =========================================================================

// ---------- FATORIAS DOS ATRIBUTOS EXCLUSIVOS ----------

function createMovementDesign({
  stepSize = 6, // Distância percorrida em cada passo (pixels)
  interval = 120, // Intervalo entre passos ao segurar a tecla (ms)
} = {}) {
  return { stepSize, interval };
}

function createJumpDesign({
  cost = 3, // Passos consumidos pelo salto
  distance = 40, // Deslocamento lateral total (pixels)
  height = 50, // Altura máxima da parábola (pixels)
  duration = 600, // Duração total do salto (ms)
} = {}) {
  return { cost, distance, height, duration };
}

function createProjectileDesign({
  name = "Projétil padrão",
  color = "#0f172a",
  radius = 4,
  trailColor = "rgba(255, 255, 255, 0.5)",
  trailLength = 1.5,
  trailRadius = 2.5,
} = {}) {
  return {
    name,
    color,
    radius,
    trailColor,
    trailLength,
    trailRadius,
    draw(ctx, projectile) {
      // Corpo do projétil
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(projectile.x, projectile.y, radius, 0, Math.PI * 2);
      ctx.fill();

      // Rastro do projétil
      ctx.fillStyle = trailColor;
      ctx.beginPath();
      ctx.arc(
        projectile.x - projectile.vx * trailLength,
        projectile.y - projectile.vy * trailLength,
        trailRadius,
        0,
        Math.PI * 2
      );
      ctx.fill();
    },
  };
}

// ---------- DEFINIÇÃO DOS MOBILES ----------

const MOBILE_DEFINITIONS = [
  {
    id: "photocopier",
    hotkey: "1",
    name: "Fotocopiadora",
    description: "Máquina de escritório clássica, branca e quadrada.",
    maxHp: 100,
    maxSteps: 10,
    width: 26,
    height: 16,
    movement: createMovementDesign(),
    jump: createJumpDesign(),
    projectile: createProjectileDesign({ name: "Tinta" }),
    selector: {
      border: "border-slate-700",
      badge: "bg-slate-800 text-slate-300",
      name: "text-slate-100",
    },
    design: {
      draw(ctx, p) {
        // --- 1. FOTOCOPIADORA (Branca com borda cinza e bandeja angulada atrás) ---

        // A. Bandeja de Papel Traseira (Angulada na parte de trás)
        ctx.save();
        ctx.fillStyle = "#cbd5e1"; // Borda/suporte da bandeja
        ctx.strokeStyle = "#64748b";
        ctx.lineWidth = 1.5;

        // Desenha a bandeja inclinada para trás
        ctx.beginPath();
        ctx.moveTo(p.x - 12, p.y - 12);
        ctx.lineTo(p.x - 21, p.y - 22); // Inclinação para trás e para cima
        ctx.lineTo(p.x - 17, p.y - 24);
        ctx.lineTo(p.x - 8, p.y - 14);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Folha de papel branca saindo da bandeja da frente
        // --- E. Bandeja Frontal de Saída (Inclinada para baixo com papel) ---
        ctx.save();

        // 1. Suporte da Bandeja (Cinza)
        ctx.fillStyle = "#94a3b8";
        ctx.strokeStyle = "#64748b";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p.x + 12, p.y - 12); // Ponto de fixação no corpo da máquina
        ctx.lineTo(p.x + 22, p.y - 4); // Ponta externa descendo para a direita
        ctx.lineTo(p.x + 21, p.y - 1); // Espessura inferior da bandeja
        ctx.lineTo(p.x + 12, p.y - 8); // Fechamento na base
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // 2. Folha de Papel saindo na bandeja (Inclinada junto com o ângulo dela)
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.moveTo(p.x + 6, p.y - 13); // Sai de dentro do corpo
        ctx.lineTo(p.x + 24, p.y - 5); // Desliza para fora na bandeja
        ctx.lineTo(p.x + 23, p.y - 7); // Espessura da folha
        ctx.lineTo(p.x + 6, p.y - 15); // Base interna da folha
        ctx.closePath();
        ctx.fill();

        ctx.restore();

        // Folha de papel branca saindo da bandeja
        ctx.fillStyle = "#ffffff";
        ctx.beginPath();
        ctx.moveTo(p.x - 11, p.y - 13);
        ctx.lineTo(p.x - 19, p.y - 22);
        ctx.lineTo(p.x - 16, p.y - 23);
        ctx.lineTo(p.x - 9, p.y - 14);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        // B. Corpo Principal da Máquina (Branco com borda cinza marcante)
        ctx.fillStyle = "#f8fafc"; // Corpo branco escritório
        ctx.beginPath();
        ctx.roundRect(p.x - 13, p.y - 18, 26, 18, 3);
        ctx.fill();

        // Borda cinza marcante ao redor do corpo
        ctx.strokeStyle = "#64748b"; // Cinza médio/escuro de alto destaque
        ctx.lineWidth = 2;
        ctx.stroke();

        // C. Tampa Superior do Scanner (Cinza escura)
        ctx.fillStyle = "#334155";
        ctx.fillRect(p.x - 12, p.y - 21, 24, 3);
        ctx.strokeStyle = "#1e293b";
        ctx.lineWidth = 1;
        ctx.strokeRect(p.x - 12, p.y - 21, 24, 3);

        // D. Painel de Controle Frontal e Bandeja de Saída
        ctx.fillStyle = "#0284c7"; // Visorzinho azul digital
        ctx.fillRect(p.x + 3, p.y - 15, 6, 4);

        ctx.fillStyle = "#94a3b8"; // Saída de papel inferior
        ctx.fillRect(p.x - 6, p.y - 6, 12, 3);
      },
    },
  },
  {
    id: "tank",
    hotkey: "2",
    name: "Tanque Camuflado",
    description: "Padrão militar verde oliva tradicional de artilharia.",
    maxHp: 100,
    maxSteps: 10,
    width: 26,
    height: 16,
    movement: createMovementDesign(),
    jump: createJumpDesign(),
    projectile: createProjectileDesign({ name: "Obus" }),
    selector: {
      border: "border-green-500/50 ring-1 ring-green-500/30",
      badge: "bg-green-500/20 text-green-400",
      name: "text-green-400",
    },
    isDefault: true,
    design: {
      draw(ctx, p) {
        // --- 2. TANQUE MILITAR CAMUFLADO (Default) ---
        ctx.fillStyle = p.color;
        ctx.beginPath();
        ctx.roundRect(p.x - p.width / 2, p.y - p.height, p.width, p.height, 4);
        ctx.fill();

        // Esteiras / Base escura
        ctx.fillStyle = "rgba(0,0,0,0.35)";
        ctx.fillRect(p.x - p.width / 2, p.y - 4, p.width, 4);

        // Manchas de Camuflagem
        ctx.fillStyle = "#365314"; // Verde escuro militar
        ctx.beginPath();
        ctx.arc(p.x - 5, p.y - 8, 4, 0, Math.PI * 2);
        ctx.arc(p.x + 6, p.y - 10, 3, 0, Math.PI * 2);
        ctx.fill();
      },
    },
  },
  {
    id: "cone",
    hotkey: "3",
    name: "Cone Laranja",
    description: "Cone de sinalização ágil com antena receptora.",
    maxHp: 100,
    maxSteps: 10,
    width: 26,
    height: 16,
    movement: createMovementDesign(),
    jump: createJumpDesign(),
    projectile: createProjectileDesign({ name: "Sinalizador" }),
    selector: {
      border: "border-orange-500/50",
      badge: "bg-orange-500/20 text-orange-400",
      name: "text-orange-400",
    },
    design: {
      draw(ctx, p) {
        // --- 3. CONE LARANJA (Sinalização) ---
        ctx.fillStyle = "#0f172a"; // Base preta
        ctx.fillRect(p.x - 14, p.y - 3, 28, 3);

        // Corpo do cone (Triângulo laranja)
        ctx.fillStyle = "#f97316";
        ctx.beginPath();
        ctx.moveTo(p.x, p.y - 23);
        ctx.lineTo(p.x - 12, p.y - 3);
        ctx.lineTo(p.x + 12, p.y - 3);
        ctx.closePath();
        ctx.fill();

        // Faixa branca reflexiva central
        ctx.fillStyle = "#f8fafc";
        ctx.beginPath();
        ctx.moveTo(p.x, p.y - 14);
        ctx.lineTo(p.x - 7, p.y - 7);
        ctx.lineTo(p.x + 7, p.y - 7);
        ctx.closePath();
        ctx.fill();
      },
    },
  },
];

// ---------- GERENCIADOR DE MOBILES ----------

const MobileManager = {
  definitions: MOBILE_DEFINITIONS,
  defaultMobileId: "tank",

  /** Retorna a ficha completa de um mobile pelo id. */
  get(id) {
    const found = this.definitions.find((mobile) => mobile.id === id);
    if (found) return found;

    const fallback = this.definitions.find(
      (mobile) => mobile.id === this.defaultMobileId
    );
    return fallback || this.definitions[0];
  },

  /** Retorna o mobile associado à tecla digitada (ou o default em Enter/Espaço). */
  getByHotkey(code) {
    if (code === "Enter" || code === "NumpadEnter" || code === "Space") {
      return this.get(this.defaultMobileId);
    }

    const match = /(\d)$/.exec(code || "");
    if (!match) return null;

    return (
      this.definitions.find((mobile) => mobile.hotkey === match[1]) || null
    );
  },

  /** Cria um jogador já com os atributos do mobile escolhido. */
  createPlayer({ id, mobileId, x, y, angle, color }) {
    const mobile = this.get(mobileId);

    return {
      id,
      mobileId: mobile.id,
      x,
      y,
      angle,
      color,
      width: mobile.width,
      height: mobile.height,
      hp: mobile.maxHp,
      maxHp: mobile.maxHp,
      steps: mobile.maxSteps,
      maxSteps: mobile.maxSteps,
      power: 0,
      lastPower: null,
      lastAngle: null,
      isCharging: false,
      lastMoveTime: 0,
      jump: null,
    };
  },

  /** Restaura os passos disponíveis do jogador conforme o seu mobile. */
  resetSteps(player) {
    const mobile = this.get(player.mobileId);
    player.steps = mobile.maxSteps;
  },

  /** Desenha o corpo do mobile conforme o design registrado. */
  draw(ctx, player) {
    const mobile = this.get(player.mobileId);
    mobile.design.draw(ctx, player);
  },

  /** Desenha o projétil usando o design de projétil do mobile que atirou. */
  drawProjectile(ctx, projectile) {
    const mobile = this.get(projectile.mobileId);
    mobile.projectile.draw(ctx, projectile);
  },

  /** Monta os cards do modal de seleção a partir do registro de mobiles. */
  renderSelectionCards(container, hintElement) {
    if (!container) return;

    container.innerHTML = this.definitions
      .map((mobile) => {
        const defaultBadge = mobile.isDefault ? " (Default)" : "";
        return `
          <div class="bg-slate-900/90 p-4 rounded-xl border ${mobile.selector.border} flex flex-col items-center gap-2 shadow-md">
            <span class="text-xs font-black ${mobile.selector.badge} px-2.5 py-1 rounded-full">
              Tecla [${mobile.hotkey}]${defaultBadge}
            </span>
            <div class="text-base font-extrabold ${mobile.selector.name}">
              ${mobile.name}
            </div>
            <p class="text-xs text-slate-400 leading-relaxed">
              ${mobile.description}
            </p>
          </div>
        `;
      })
      .join("");

    if (hintElement) {
      const keys = this.definitions
        .map(
          (mobile) => `<strong class="text-amber-400">${mobile.hotkey}</strong>`
        )
        .join(", ");
      hintElement.innerHTML = `Pressione ${keys} no teclado para confirmar.`;
    }
  },
};
