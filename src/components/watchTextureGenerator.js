import * as THREE from 'three';

/**
 * Photorealistic Luxury Dial Texture Generator — ALUNA A3016 Nepal
 * - Anthracite/deep charcoal guilloché sunburst dial with radial engraved lines
 * - Hour numerals seated comfortably inside the circle
 * - 12 o'clock: Moonphase complication subdial with silver rim, 60/40/20 markings & moon/stars disc
 * - 3 o'clock: Precision beveled date window displaying '9' flanked by 'AUTOMATIC CHRONOMETER'
 * - 6 o'clock: Open-Heart mechanical aperture revealing balance wheel with gold spokes & ruby jewel
 * - 9 o'clock: '01' sub-marker with 'A3016' insignia
 * - Perimeter: Fine railroad minute/second track with crisp tick marks
 */
export function createDialTexture(edition) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  const cx = 512;
  const cy = 512;
  const dialRadius = 470;

  // 1. BASE DIAL BACKGROUND (Anthracite / Charcoal / Edition Tone)
  let baseColor = edition.id === 'dlc' ? '#0D0F12' : (edition.id === 'rose' ? '#1A1412' : (edition.id === 'gold' ? '#161410' : '#14171D'));
  let centerGlow = edition.id === 'dlc' ? '#20242C' : (edition.id === 'rose' ? '#2A221D' : (edition.id === 'gold' ? '#242018' : '#2A303C'));

  const bgGrad = ctx.createRadialGradient(cx, cy, 30, cx, cy, dialRadius);
  bgGrad.addColorStop(0, centerGlow);
  bgGrad.addColorStop(0.65, baseColor);
  bgGrad.addColorStop(1, '#080A0D');
  ctx.fillStyle = bgGrad;
  ctx.beginPath();
  ctx.arc(cx, cy, dialRadius, 0, Math.PI * 2);
  ctx.fill();

  // 2. RADIAL SUNBURST GUILLOCHÉ RAYS (Fine engraved dark/light grooves)
  ctx.save();
  ctx.translate(cx, cy);
  const numRays = 720;
  for (let i = 0; i < numRays; i++) {
    const angle = (i * (360 / numRays) * Math.PI) / 180;
    const isDark = (i % 2 === 0);
    ctx.strokeStyle = isDark ? 'rgba(0, 0, 0, 0.35)' : 'rgba(255, 255, 255, 0.06)';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.cos(angle) * dialRadius, Math.sin(angle) * dialRadius);
    ctx.stroke();
  }
  ctx.restore();

  // Subtle concentric micro-grooves (vinyl/lathe finish)
  ctx.save();
  ctx.translate(cx, cy);
  for (let r = 70; r < dialRadius; r += 14) {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.025)';
    ctx.lineWidth = 0.75;
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();

  // 3. RAILROAD MINUTE & SECOND TRACK (Outer Edge)
  ctx.save();
  ctx.translate(cx, cy);

  // Outer and Inner Hairline rings
  const outerTrackR = dialRadius - 16;
  const innerTrackR = dialRadius - 38;

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
  ctx.lineWidth = 1.2;
  ctx.beginPath();
  ctx.arc(0, 0, outerTrackR, 0, Math.PI * 2);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
  ctx.beginPath();
  ctx.arc(0, 0, innerTrackR, 0, Math.PI * 2);
  ctx.stroke();

  // 60 Tick Marks & 1/5th Second Sub-ticks
  for (let i = 0; i < 300; i++) {
    const angle = (i * 1.2 * Math.PI) / 180;
    const isHour = i % 25 === 0;
    const isMinute = i % 5 === 0;

    ctx.rotate(angle);

    if (isHour) {
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 3.0;
      ctx.beginPath();
      ctx.moveTo(0, -innerTrackR + 2);
      ctx.lineTo(0, -outerTrackR);
      ctx.stroke();
    } else if (isMinute) {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(0, -innerTrackR + 6);
      ctx.lineTo(0, -outerTrackR);
      ctx.stroke();
    } else {
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.25)';
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(0, -innerTrackR + 10);
      ctx.lineTo(0, -outerTrackR);
      ctx.stroke();
    }

    ctx.rotate(-angle);
  }
  ctx.restore();

  // 4. ARABIC NUMERALS INSIDE THE CIRCLE (12, 1, 2, 4, 5, 7, 8, 10, 11)
  // Seated comfortably at numeralRadius = 310px (plenty of margin from outer edge!)
  const numeralRadius = 308;

  ctx.save();
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '600 48px "Inter", "Syne", -apple-system, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.9)';
  ctx.shadowBlur = 8;
  ctx.shadowOffsetY = 2;

  // Numerals inside the circle (leaving room for complications at 12, 3, 6, 9)
  const hourMap = [
    { h: 1, angleDeg: 30 },
    { h: 2, angleDeg: 60 },
    { h: 4, angleDeg: 120 },
    { h: 5, angleDeg: 150 },
    { h: 7, angleDeg: 210 },
    { h: 8, angleDeg: 240 },
    { h: 10, angleDeg: 300 },
    { h: 11, angleDeg: 330 },
    { h: 12, angleDeg: 0, overrideR: numeralRadius + 15 }
  ];

  hourMap.forEach(item => {
    const r = item.overrideR || numeralRadius;
    const rad = ((item.angleDeg - 90) * Math.PI) / 180;
    const x = cx + Math.cos(rad) * r;
    const y = cy + Math.sin(rad) * r;
    ctx.fillText(item.h.toString(), x, y);
  });
  ctx.restore();

  // 5. COMPLICATION 1: MOONPHASE SUBDIAL AT 12 O'CLOCK
  const moonX = cx;
  const moonY = cy - 145;
  const moonR = 82;

  ctx.save();
  // Subdial background ring
  const subGrad = ctx.createRadialGradient(moonX, moonY, 10, moonX, moonY, moonR);
  subGrad.addColorStop(0, '#101318');
  subGrad.addColorStop(0.85, '#181C24');
  subGrad.addColorStop(1, '#2E3544');
  ctx.fillStyle = subGrad;
  ctx.beginPath();
  ctx.arc(moonX, moonY, moonR, 0, Math.PI * 2);
  ctx.fill();

  // Metallic perimeter bezel for subdial
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Concentric subdial minute scale (60, 40, 20)
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.font = '500 13px "Space Mono", monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('60', moonX, moonY - moonR + 14);
  ctx.fillText('20', moonX + moonR - 16, moonY + 8);
  ctx.fillText('40', moonX - moonR + 16, moonY + 8);

  // Subdial tick marks
  ctx.save();
  ctx.translate(moonX, moonY);
  for (let deg = 0; deg < 360; deg += 12) {
    const rad = (deg * Math.PI) / 180;
    ctx.rotate(rad);
    ctx.strokeStyle = (deg % 60 === 0) ? '#FFFFFF' : 'rgba(255, 255, 255, 0.35)';
    ctx.lineWidth = (deg % 60 === 0) ? 1.5 : 0.8;
    ctx.beginPath();
    ctx.moveTo(0, -moonR + 2);
    ctx.lineTo(0, -moonR + 7);
    ctx.stroke();
    ctx.rotate(-rad);
  }
  ctx.restore();

  // Dark midnight blue Moon Disc
  ctx.fillStyle = '#060B18';
  ctx.beginPath();
  ctx.arc(moonX, moonY + 12, 42, 0, Math.PI * 2);
  ctx.fill();

  // Golden Crescent Moon & Stars
  ctx.fillStyle = '#E2C275';
  ctx.shadowColor = 'rgba(226, 194, 117, 0.6)';
  ctx.shadowBlur = 6;
  ctx.beginPath();
  ctx.arc(moonX - 4, moonY + 8, 14, 0, Math.PI * 2);
  ctx.fill();

  // Moon shadow crater overlay
  ctx.fillStyle = '#060B18';
  ctx.shadowBlur = 0;
  ctx.beginPath();
  ctx.arc(moonX + 3, moonY + 5, 12, 0, Math.PI * 2);
  ctx.fill();

  // Fine twinkling stars
  ctx.fillStyle = '#FFFFFF';
  [[moonX + 16, moonY + 2], [moonX + 22, moonY + 18], [moonX - 20, moonY + 14], [moonX + 5, moonY + 24]].forEach(([sx, sy]) => {
    ctx.beginPath();
    ctx.arc(sx, sy, 1.2, 0, Math.PI * 2);
    ctx.fill();
  });

  // Dual-arch Moonphase Aperture Mask
  ctx.fillStyle = '#181C24';
  ctx.beginPath();
  ctx.arc(moonX - 24, moonY + 32, 24, Math.PI * 1.2, Math.PI * 1.9);
  ctx.arc(moonX + 24, moonY + 32, 24, Math.PI * 1.1, Math.PI * 1.8);
  ctx.fill();
  ctx.restore();

  // 6. COMPLICATION 2: DATE WINDOW AT 3 O'CLOCK WITH TYPOGRAPHY
  const dateX = cx + 250;
  const dateY = cy;

  ctx.save();
  // Beveled outer metallic frame
  ctx.fillStyle = '#C5CCD6';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.7)';
  ctx.shadowBlur = 8;
  ctx.fillRect(dateX - 32, dateY - 24, 64, 48);

  // Inset aperture
  ctx.shadowBlur = 0;
  ctx.fillStyle = '#0E1117';
  ctx.fillRect(dateX - 28, dateY - 20, 56, 40);

  // Crisp White Date Numeral '9'
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 26px "Space Mono", monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('9', dateX, dateY + 2);

  // Accompanying typography to the left of date window
  ctx.fillStyle = '#E2E8F0';
  ctx.font = '600 13px "Space Mono", monospace';
  ctx.textAlign = 'right';
  ctx.shadowColor = 'rgba(0,0,0,0.8)';
  ctx.shadowBlur = 4;
  ctx.fillText('AUTOMATIC', dateX - 44, dateY - 6);
  ctx.font = '500 11px "Space Mono", monospace';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.fillText('CHRONOGRAPH', dateX - 44, dateY + 10);
  ctx.restore();

  // 7. COMPLICATION 3: OPEN-HEART MECHANICAL BALANCE WHEEL AT 6 O'CLOCK
  const openHeartX = cx;
  const openHeartY = cy + 155;
  const openHeartR = 76;

  ctx.save();
  // Recessed cavity shadow
  const cavityGrad = ctx.createRadialGradient(openHeartX, openHeartY, 15, openHeartX, openHeartY, openHeartR);
  cavityGrad.addColorStop(0, '#05070A');
  cavityGrad.addColorStop(0.7, '#11141A');
  cavityGrad.addColorStop(1, '#05070A');
  ctx.fillStyle = cavityGrad;
  ctx.beginPath();
  ctx.arc(openHeartX, openHeartY, openHeartR, 0, Math.PI * 2);
  ctx.fill();

  // Beveled metallic aperture ring
  ctx.strokeStyle = '#D4AF37'; // Gold bezel ring
  ctx.lineWidth = 2.5;
  ctx.stroke();

  // Golden Balance Wheel Rim & 3 Curved Spokes
  ctx.strokeStyle = '#F3D270';
  ctx.lineWidth = 3.2;
  ctx.shadowColor = 'rgba(243, 210, 112, 0.4)';
  ctx.shadowBlur = 6;
  ctx.beginPath();
  ctx.arc(openHeartX, openHeartY, openHeartR - 14, 0, Math.PI * 2);
  ctx.stroke();

  // 3 Curved Balance Spokes
  for (let s = 0; s < 3; s++) {
    const spokeAngle = (s * 120 * Math.PI) / 180;
    ctx.beginPath();
    ctx.moveTo(openHeartX, openHeartY);
    ctx.quadraticCurveTo(
      openHeartX + Math.cos(spokeAngle + 0.3) * (openHeartR * 0.5),
      openHeartY + Math.sin(spokeAngle + 0.3) * (openHeartR * 0.5),
      openHeartX + Math.cos(spokeAngle) * (openHeartR - 14),
      openHeartY + Math.sin(spokeAngle) * (openHeartR - 14)
    );
    ctx.stroke();
  }

  // Spiral Hairspring (thin blue-treated spring steel)
  ctx.shadowBlur = 0;
  ctx.strokeStyle = '#38BDF8';
  ctx.lineWidth = 1;
  ctx.beginPath();
  for (let theta = 0; theta < Math.PI * 7; theta += 0.15) {
    const r = 4 + theta * 2.2;
    const x = openHeartX + Math.cos(theta) * r;
    const y = openHeartY + Math.sin(theta) * r;
    if (theta === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  }
  ctx.stroke();

  // Balance Cock Bridge (silver brushed bridge plate)
  ctx.fillStyle = '#8E99A8';
  ctx.beginPath();
  ctx.moveTo(openHeartX - 42, openHeartY + 10);
  ctx.lineTo(openHeartX + 42, openHeartY + 10);
  ctx.lineTo(openHeartX + 32, openHeartY + 28);
  ctx.lineTo(openHeartX - 32, openHeartY + 28);
  ctx.closePath();
  ctx.fill();

  // Escapement Rubies (Synthetic Corundum Jewels)
  ctx.fillStyle = '#E11D48'; // Ruby red
  ctx.shadowColor = 'rgba(225, 29, 72, 0.8)';
  ctx.shadowBlur = 8;
  ctx.beginPath();
  ctx.arc(openHeartX, openHeartY, 5.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(openHeartX + 18, openHeartY - 18, 3.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // 8. 9 O'CLOCK SUBDIAL & "ALUNA A3016" BRAND EMBLEM
  const nineX = cx - 250;
  const nineY = cy;

  ctx.save();
  // Small circular '01' sub-marker
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(nineX, nineY, 18, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 14px "Space Mono", monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('01', nineX, nineY);

  // "A3016" Model Title to the right of the 01 marker
  ctx.fillStyle = '#FFFFFF';
  ctx.font = '800 24px "Inter", "Syne", sans-serif';
  ctx.textAlign = 'left';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
  ctx.shadowBlur = 6;
  ctx.fillText('A3016', nineX + 30, nineY - 4);

  ctx.font = '600 11px "Space Mono", monospace';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
  ctx.fillText('ALUNA • NEPAL', nineX + 30, nineY + 14);
  ctx.restore();

  // ALUNA Brand Inscription above Moonphase at 12 o'clock
  ctx.save();
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'italic 700 26px "Cormorant Garamond", Georgia, serif';
  ctx.textAlign = 'center';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.85)';
  ctx.shadowBlur = 8;
  ctx.fillText('ALUNA', moonX, moonY - moonR - 16);
  ctx.restore();

  // 9. NEPAL MADE LABEL AT BOTTOM
  ctx.save();
  ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
  ctx.font = '600 11px "Space Mono", monospace';
  ctx.textAlign = 'center';
  ctx.fillText('NEPAL   MADE', cx, cy + dialRadius - 52);
  ctx.restore();

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 16;
  texture.needsUpdate = true;
  return texture;
}

/**
 * Flat Plain Caseback Texture
 * Requirement: Flat and plane with NO design, just engrave "ALUNA" in italic font and "A3016"
 */
export function createFlatCasebackTexture(edition) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  const cx = 512;
  const cy = 512;
  const radius = 480;

  // 1. Clean satin-brushed surgical steel base
  let baseColor = edition?.id === 'dlc' ? '#12151B' : (edition?.id === 'rose' ? '#453830' : (edition?.id === 'gold' ? '#4A422D' : '#8E98A6'));
  let lightColor = edition?.id === 'dlc' ? '#252B35' : (edition?.id === 'rose' ? '#7A6456' : (edition?.id === 'gold' ? '#8C7C58' : '#C4CDD8'));
  let darkColor = edition?.id === 'dlc' ? '#090B0E' : (edition?.id === 'rose' ? '#2A201A' : (edition?.id === 'gold' ? '#2E2718' : '#606976'));

  // Subtle radial gradient across flat disc
  const grad = ctx.createRadialGradient(cx - 100, cy - 100, 50, cx, cy, radius);
  grad.addColorStop(0, lightColor);
  grad.addColorStop(0.5, baseColor);
  grad.addColorStop(1, darkColor);
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.fill();

  // 2. Micro-fine circular satin-brushing grain
  ctx.save();
  ctx.translate(cx, cy);
  for (let r = 40; r < radius; r += 2) {
    const alpha = 0.05 + Math.random() * 0.10;
    const isBright = Math.random() > 0.45;
    ctx.strokeStyle = isBright ? `rgba(255, 255, 255, ${alpha})` : `rgba(0, 0, 0, ${alpha * 1.5})`;
    ctx.lineWidth = 1.0;
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();

  // Outer bevel ring groove
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.35)';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(cx, cy, radius - 25, 0, Math.PI * 2);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(cx, cy, radius - 23, 0, Math.PI * 2);
  ctx.stroke();

  // 3. Laser-Engraved "ALUNA" in Italic Font (Center)
  ctx.save();
  // Engraving drop-shadow (inward recessed groove)
  ctx.shadowColor = 'rgba(0, 0, 0, 0.75)';
  ctx.shadowBlur = 4;
  ctx.shadowOffsetX = 1;
  ctx.shadowOffsetY = 2;

  // Dark engraved groove fill
  ctx.fillStyle = edition?.id === 'dlc' ? '#07090C' : '#333A44';
  ctx.font = 'italic 700 78px "Cormorant Garamond", "Playfair Display", Georgia, serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('ALUNA', cx, cy - 26);

  // Subtle engraved bevel highlight
  ctx.shadowColor = 'transparent';
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)';
  ctx.lineWidth = 1;
  ctx.strokeText('ALUNA', cx - 0.5, cy - 27);
  ctx.restore();

  // 4. Laser-Engraved "A3016" Underneath
  ctx.save();
  ctx.shadowColor = 'rgba(0, 0, 0, 0.65)';
  ctx.shadowBlur = 3;
  ctx.shadowOffsetX = 1;
  ctx.shadowOffsetY = 1.5;

  ctx.fillStyle = edition?.id === 'dlc' ? '#07090C' : '#333A44';
  ctx.font = '600 32px "Space Mono", monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('A3016', cx, cy + 42);

  // Clean micro specification along bottom arc
  ctx.font = '500 13px "Space Mono", monospace';
  ctx.fillStyle = edition?.id === 'dlc' ? 'rgba(255,255,255,0.4)' : 'rgba(0,0,0,0.55)';
  ctx.shadowBlur = 0;
  ctx.fillText('ALL STAINLESS STEEL  •  NEPAL AUTOMATIC  •  100M WATER RESISTANT', cx, cy + radius - 70);
  ctx.restore();

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 16;
  texture.needsUpdate = true;
  return texture;
}

/**
 * Brushed Surgical Steel Bezel Texture
 * - Circular satin-brushed finish
 * - 6 recessed screw holes with slotted screw heads
 */
export function createBezelTexture(edition) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  const cx = 512;
  const cy = 512;
  const outerR = 500;
  const innerR = 410;

  // Base circular color matching the edition's bezelColor
  const baseColor = edition?.bezelColor || '#E2E8F0';
  ctx.fillStyle = baseColor;
  ctx.beginPath();
  ctx.arc(cx, cy, outerR, 0, Math.PI * 2);
  ctx.arc(cx, cy, innerR, 0, Math.PI * 2, true);
  ctx.fill();

  // Satin-brushed concentric grain
  ctx.save();
  ctx.translate(cx, cy);
  for (let r = innerR; r < outerR; r += 1.5) {
    const grainAlpha = 0.03 + Math.random() * 0.08;
    const isBright = Math.random() > 0.5;
    ctx.strokeStyle = isBright ? `rgba(255, 255, 255, ${grainAlpha * 1.5})` : `rgba(0, 0, 0, ${grainAlpha * 0.9})`;
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();

  // 6 Authentic Recessed Bezel Screws (at 1, 3, 5, 7, 9, 11 o'clock)
  const screwR = (innerR + outerR) / 2;
  for (let i = 0; i < 6; i++) {
    const angle = ((i * 60 + 30) * Math.PI) / 180;
    const sx = cx + Math.cos(angle) * screwR;
    const sy = cy + Math.sin(angle) * screwR;

    ctx.save();
    ctx.translate(sx, sy);

    // Recessed circular counter-bore shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
    ctx.beginPath();
    ctx.arc(0, 0, 18, 0, Math.PI * 2);
    ctx.fill();

    // Polished screw head bevel
    const screwGrad = ctx.createLinearGradient(-12, -12, 12, 12);
    screwGrad.addColorStop(0, '#FFFFFF');
    screwGrad.addColorStop(0.5, '#CBD5E1');
    screwGrad.addColorStop(1, '#64748B');
    ctx.fillStyle = screwGrad;
    ctx.beginPath();
    ctx.arc(0, 0, 15, 0, Math.PI * 2);
    ctx.fill();

    // Slotted screw head groove (subtly rotated along tangent)
    ctx.rotate(angle + Math.PI / 4);
    ctx.fillStyle = '#1A1E24';
    ctx.fillRect(-12, -2.5, 24, 5);

    ctx.restore();
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 16;
  texture.needsUpdate = true;
  return texture;
}

export function createMovementTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  // Rhodium-plated bridge with Perlage (circular graining)
  ctx.fillStyle = '#D6DCE5';
  ctx.fillRect(0, 0, 1024, 1024);

  // Perlage circles
  const step = 35;
  for (let y = 0; y < 1024; y += step) {
    for (let x = 0; x < 1024; x += step) {
      const grad = ctx.createRadialGradient(x, y, 4, x, y, step * 0.9);
      grad.addColorStop(0, 'rgba(255,255,255,0.4)');
      grad.addColorStop(0.7, 'rgba(180,190,205,0.5)');
      grad.addColorStop(1, 'rgba(120,130,145,0.1)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, step * 0.9, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Côtes de Genève (Geneva Stripes) on top plate
  ctx.save();
  ctx.rotate(Math.PI / 6);
  const stripeWidth = 50;
  for (let x = -500; x < 1500; x += stripeWidth) {
    const sGrad = ctx.createLinearGradient(x, 0, x + stripeWidth, 0);
    sGrad.addColorStop(0, 'rgba(255,255,255,0.15)');
    sGrad.addColorStop(0.5, 'rgba(0,0,0,0.08)');
    sGrad.addColorStop(1, 'rgba(255,255,255,0.12)');
    ctx.fillStyle = sGrad;
    ctx.fillRect(x, -500, stripeWidth, 2000);
  }
  ctx.restore();

  // Synthetic ruby jewel sink apertures
  const jewels = [
    [320, 280, 18], [720, 310, 16], [480, 520, 24],
    [360, 680, 15], [680, 690, 20], [540, 780, 14]
  ];

  jewels.forEach(([jx, jy, jr]) => {
    // Polished gold chaton frame
    ctx.fillStyle = '#D4AF37';
    ctx.beginPath();
    ctx.arc(jx, jy, jr + 6, 0, Math.PI * 2);
    ctx.fill();

    // Dark ruby jewel cavity
    const rubyGrad = ctx.createRadialGradient(jx, jy, 2, jx, jy, jr);
    rubyGrad.addColorStop(0, '#FF4D6D');
    rubyGrad.addColorStop(0.6, '#C9184A');
    rubyGrad.addColorStop(1, '#590D22');
    ctx.fillStyle = rubyGrad;
    ctx.beginPath();
    ctx.arc(jx, jy, jr, 0, Math.PI * 2);
    ctx.fill();

    // Specular jewel reflection highlight
    ctx.fillStyle = 'rgba(255,255,255,0.75)';
    ctx.beginPath();
    ctx.arc(jx - jr * 0.3, jy - jr * 0.3, jr * 0.25, 0, Math.PI * 2);
    ctx.fill();
  });

  // Blued horology screws (heat-treated cobalt blue)
  const screws = [
    [240, 420], [780, 440], [420, 360], [600, 380], [450, 720], [620, 740]
  ];

  screws.forEach(([sx, sy]) => {
    // Mirror blue head
    const screwGrad = ctx.createRadialGradient(sx, sy, 2, sx, sy, 14);
    screwGrad.addColorStop(0, '#38BDF8');
    screwGrad.addColorStop(0.7, '#1E40AF');
    screwGrad.addColorStop(1, '#0F172A');
    ctx.fillStyle = screwGrad;
    ctx.beginPath();
    ctx.arc(sx, sy, 14, 0, Math.PI * 2);
    ctx.fill();

    // Screw head slot
    ctx.fillStyle = '#05070B';
    ctx.fillRect(sx - 11, sy - 2, 22, 4);
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 16;
  texture.needsUpdate = true;
  return texture;
}

export function createRotorTexture() {
  // Semicircular rotor plate and text removed per request
  const canvas = document.createElement('canvas');
  canvas.width = 16;
  canvas.height = 16;
  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

function adjustBrightness(hex, percent) {
  if (!hex || hex[0] !== '#') return hex;
  const num = parseInt(hex.replace('#', ''), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.min(255, Math.max(0, (num >> 16) + amt));
  const G = Math.min(255, Math.max(0, ((num >> 8) & 0x00ff) + amt));
  const B = Math.min(255, Math.max(0, (num & 0x0000ff) + amt));
  return `#${((1 << 24) + (R << 16) + (G << 8) + B).toString(16).slice(1)}`;
}
