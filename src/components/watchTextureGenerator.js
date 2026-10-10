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
  const dialRadius = 512;

  // 1. DYNAMIC HAUTE-HORLOGERIE COLOR PALETTE
  let edgeColor, baseColor, centerGlow, rayHighlight, textColor, trackColor, giltAccent;

  if (edition?.id === 'steel') {
    edgeColor = '#030D1E';
    baseColor = '#0C234E';
    centerGlow = '#1D4ED8';
    rayHighlight = 'rgba(147, 197, 253, 0.15)';
    textColor = '#FFFFFF';
    trackColor = 'rgba(255, 255, 255, 0.45)';
    giltAccent = '#38BDF8';
  } else if (edition?.id === 'dlc') {
    edgeColor = '#020205';
    baseColor = '#090814';
    centerGlow = '#2E1065';
    rayHighlight = 'rgba(192, 132, 252, 0.14)';
    textColor = '#E2E8F0';
    trackColor = 'rgba(34, 211, 238, 0.45)';
    giltAccent = '#C084FC';
  } else if (edition?.id === 'rose') {
    edgeColor = '#D4C4B0';
    baseColor = '#F2E9DE';
    centerGlow = '#FFFDF9';
    rayHighlight = 'rgba(180, 101, 74, 0.08)';
    textColor = '#2E1A12';
    trackColor = 'rgba(58, 32, 22, 0.60)';
    giltAccent = '#B4654A';
  } else if (edition?.id === 'titanium') {
    edgeColor = '#01180A';
    baseColor = '#05381A';
    centerGlow = '#059669';
    rayHighlight = 'rgba(245, 158, 11, 0.16)';
    textColor = '#F8FAFC';
    trackColor = 'rgba(245, 158, 11, 0.65)';
    giltAccent = '#F59E0B';
  } else {
    edgeColor = '#04060A';
    baseColor = edition?.dialColor || '#14171D';
    centerGlow = '#2A303C';
    rayHighlight = 'rgba(255, 255, 255, 0.08)';
    textColor = '#FFFFFF';
    trackColor = 'rgba(255, 255, 255, 0.4)';
    giltAccent = '#38BDF8';
  }

  // Solid background fill across entire canvas — prevents transparent margin sampling
  ctx.fillStyle = edgeColor;
  ctx.fillRect(0, 0, 1024, 1024);

  // Fumé Sunray Gradient
  const bgGrad = ctx.createRadialGradient(cx, cy, 25, cx, cy, dialRadius);
  bgGrad.addColorStop(0, centerGlow);
  bgGrad.addColorStop(0.35, baseColor);
  bgGrad.addColorStop(0.85, edgeColor);
  bgGrad.addColorStop(1, '#000000');
  ctx.fillStyle = bgGrad;
  ctx.beginPath();
  ctx.arc(cx, cy, dialRadius, 0, Math.PI * 2);
  ctx.fill();

  // 2. AUDEMARS PIGUET SIGNATURE "GRANDE TAPISSERIE" WAFFLE GUILLOCHÉ
  // High-precision raised micro-pyramid squares with specular highlights and bevel shadows
  const tapSize = 15;
  const tapStep = 18;
  const tapLimit = dialRadius - 62;

  ctx.save();
  for (let gx = -tapLimit; gx <= tapLimit; gx += tapStep) {
    for (let gy = -tapLimit; gy <= tapLimit; gy += tapStep) {
      const dist = Math.sqrt(gx * gx + gy * gy);
      if (dist > tapLimit) continue;
      // Skip subdial windows so complications stay ultra-clean
      if (Math.abs(gx) < 85 && Math.abs(gy - 155) < 78) continue; // 6 o'clock tourbillon
      if (Math.abs(gx) < 88 && Math.abs(gy + 145) < 85) continue; // 12 o'clock celestial
      if (gx < -160 && Math.abs(gy) < 38) continue; // 9 o'clock subdial

      const px = cx + gx;
      const py = cy + gy;

      // Base tapisserie square with subtle fill
      ctx.fillStyle = (edition?.id === 'rose') ? 'rgba(180, 140, 110, 0.18)' : 'rgba(255, 255, 255, 0.04)';
      ctx.fillRect(px, py, tapSize, tapSize);

      // Top & Left beveled specular edge (light source from top-left)
      ctx.strokeStyle = (edition?.id === 'rose') ? 'rgba(255, 255, 255, 0.40)' : 'rgba(255, 255, 255, 0.12)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(px, py + tapSize);
      ctx.lineTo(px, py);
      ctx.lineTo(px + tapSize, py);
      ctx.stroke();

      // Bottom & Right beveled shadow edge
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.45)';
      ctx.beginPath();
      ctx.moveTo(px + tapSize, py);
      ctx.lineTo(px + tapSize, py + tapSize);
      ctx.lineTo(px, py + tapSize);
      ctx.stroke();
    }
  }
  ctx.restore();

  // 2B. JACOB & CO ASTRONOMIA CELESTIAL STARDUST DUSTING
  // Glittering micro-glints across the aventurine dial background
  ctx.save();
  for (let s = 0; s < 110; s++) {
    const sAngle = (s * 137.5 * Math.PI) / 180; // Golden ratio spiral distribution
    const sDist = 60 + ((s * 3.8) % (dialRadius - 130));
    const sx = cx + Math.cos(sAngle) * sDist;
    const sy = cy + Math.sin(sAngle) * sDist;
    const sSize = (s % 3 === 0) ? 1.4 : 0.8;
    const isGold = (s % 2 === 0);
    ctx.fillStyle = isGold ? 'rgba(253, 224, 71, 0.85)' : 'rgba(255, 255, 255, 0.90)';
    ctx.shadowColor = isGold ? '#FBBF24' : '#FFFFFF';
    ctx.shadowBlur = (s % 5 === 0) ? 4 : 0;
    ctx.beginPath();
    ctx.arc(sx, sy, sSize, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();

  // 2C. RADIAL SUNBURST GUILLOCHÉ RAYS
  ctx.save();
  ctx.translate(cx, cy);
  const numRays = 480;
  for (let i = 0; i < numRays; i++) {
    const angle = (i * (360 / numRays) * Math.PI) / 180;
    const isDark = (i % 2 === 0);
    ctx.strokeStyle = isDark ? 'rgba(0, 0, 0, 0.28)' : rayHighlight;
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(Math.cos(angle) * dialRadius, Math.sin(angle) * dialRadius);
    ctx.stroke();
  }
  ctx.restore();

  // Subtle concentric micro-grooves
  ctx.save();
  ctx.translate(cx, cy);
  for (let r = 70; r < dialRadius; r += 16) {
    ctx.strokeStyle = (edition?.id === 'rose') ? 'rgba(180, 101, 74, 0.035)' : 'rgba(255, 255, 255, 0.025)';
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
  const outerTrackR = dialRadius - 32;
  const innerTrackR = dialRadius - 56;

  ctx.strokeStyle = trackColor;
  ctx.lineWidth = 1.4;
  ctx.beginPath();
  ctx.arc(0, 0, outerTrackR, 0, Math.PI * 2);
  ctx.stroke();

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
      ctx.strokeStyle = textColor;
      ctx.lineWidth = 3.0;
      ctx.beginPath();
      ctx.moveTo(0, -innerTrackR + 2);
      ctx.lineTo(0, -outerTrackR);
      ctx.stroke();
    } else if (isMinute) {
      ctx.strokeStyle = trackColor;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(0, -innerTrackR + 6);
      ctx.lineTo(0, -outerTrackR);
      ctx.stroke();
    } else {
      ctx.strokeStyle = (edition?.id === 'rose') ? 'rgba(58, 32, 22, 0.20)' : 'rgba(255, 255, 255, 0.20)';
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(0, -innerTrackR + 10);
      ctx.lineTo(0, -outerTrackR);
      ctx.stroke();
    }

    ctx.rotate(-angle);
  }
  ctx.restore();

  // 4. ARABIC NUMERALS INSIDE THE CIRCLE
  const numeralRadius = 308;

  ctx.save();
  ctx.fillStyle = textColor;
  ctx.font = '600 48px "Inter", "Syne", -apple-system, sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.shadowColor = (edition?.id === 'rose') ? 'rgba(0, 0, 0, 0.15)' : 'rgba(0, 0, 0, 0.9)';
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
  ctx.strokeStyle = (edition?.id === 'rose') ? 'rgba(46, 26, 18, 0.4)' : 'rgba(255, 255, 255, 0.4)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(nineX, nineY, 18, 0, Math.PI * 2);
  ctx.stroke();

  ctx.fillStyle = textColor;
  ctx.font = 'bold 14px "Space Mono", monospace';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('01', nineX, nineY);

  // "A3016" Model Title to the right of the 01 marker
  ctx.fillStyle = textColor;
  ctx.font = '800 24px "Inter", "Syne", sans-serif';
  ctx.textAlign = 'left';
  ctx.shadowColor = (edition?.id === 'rose') ? 'rgba(0, 0, 0, 0.15)' : 'rgba(0, 0, 0, 0.8)';
  ctx.shadowBlur = 6;
  ctx.fillText('A3016', nineX + 30, nineY - 4);

  ctx.font = '600 11px "Space Mono", monospace';
  ctx.fillStyle = (edition?.id === 'rose') ? 'rgba(46, 26, 18, 0.7)' : 'rgba(255, 255, 255, 0.7)';
  ctx.fillText('ALUNA • NEPAL', nineX + 30, nineY + 14);
  ctx.restore();

  // ALUNA Brand Inscription above Moonphase at 12 o'clock
  ctx.save();
  ctx.fillStyle = textColor;
  ctx.font = 'italic 700 28px "Cormorant Garamond", Georgia, serif';
  ctx.textAlign = 'center';
  ctx.shadowColor = (edition?.id === 'rose') ? 'rgba(0, 0, 0, 0.15)' : 'rgba(0, 0, 0, 0.85)';
  ctx.shadowBlur = 8;
  ctx.fillText('ALUNA', moonX, moonY - moonR - 16);
  ctx.restore();

  // 9. NEPAL MADE LABEL AT BOTTOM
  ctx.save();
  ctx.fillStyle = (edition?.id === 'rose') ? 'rgba(46, 26, 18, 0.6)' : 'rgba(255, 255, 255, 0.6)';
  ctx.font = '600 11px "Space Mono", monospace';
  ctx.textAlign = 'center';
  ctx.fillText('NEPAL   MADE', cx, cy + dialRadius - 40);
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
  const radius = 512;

  // 1. Clean satin-brushed surgical steel base
  let baseColor = edition?.id === 'dlc' ? '#12151B' : (edition?.id === 'rose' ? '#453830' : (edition?.id === 'gold' ? '#4A422D' : '#8E98A6'));
  let lightColor = edition?.id === 'dlc' ? '#252B35' : (edition?.id === 'rose' ? '#7A6456' : (edition?.id === 'gold' ? '#8C7C58' : '#C4CDD8'));
  let darkColor = edition?.id === 'dlc' ? '#090B0E' : (edition?.id === 'rose' ? '#2A201A' : (edition?.id === 'gold' ? '#2E2718' : '#606976'));

  // Solid background fill across entire canvas — prevents transparent margin sampling and edge flicker
  ctx.fillStyle = darkColor;
  ctx.fillRect(0, 0, 1024, 1024);

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
 * Celestial Constellation Bezel Texture — Dark Damascus Steel with Laser-Engraved Star Maps
 * - Dark slate / charcoal titanium & Damascus steel grain
 * - Laser-engraved star constellations (Ursa Major, Orion, Cassiopeia, Cygnus, Pegasus)
 * - Delicate connecting lines, astronomical degree arcs, coordinate ticks, and planetary gear glyphs
 */
export function createBezelTexture(edition) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  const cx = 512;
  const cy = 512;
  const outerR = 512;
  const innerR = 410;

  // Dark slate/damascus base
  const baseColor = edition?.bezelColor || '#1E2026';
  ctx.fillStyle = baseColor;
  ctx.fillRect(0, 0, 1024, 1024);

  // Subtle circular satin & damascus gradient
  const grad = ctx.createRadialGradient(cx, cy, innerR, cx, cy, outerR);
  grad.addColorStop(0, '#15171C');
  grad.addColorStop(0.3, '#22252C');
  grad.addColorStop(0.7, '#191B21');
  grad.addColorStop(1, '#0F1014');
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(cx, cy, outerR, 0, Math.PI * 2);
  ctx.arc(cx, cy, innerR, 0, Math.PI * 2, true);
  ctx.fill();

  // Micro Damascus steel swirling rings & satin brushing
  ctx.save();
  ctx.translate(cx, cy);
  for (let r = innerR + 2; r < outerR - 2; r += 1.8) {
    const alpha = 0.04 + Math.random() * 0.08;
    const isBright = Math.random() > 0.45;
    ctx.strokeStyle = isBright ? `rgba(200, 215, 235, ${alpha * 1.4})` : `rgba(0, 0, 0, ${alpha * 1.8})`;
    ctx.lineWidth = 1.0;
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.restore();

  // Engraved Constellations around the Bezel
  // Constellation star groups distributed around the circular bezel ring (radius ~ 455 - 475)
  const constellationGroups = [
    // 1. Ursa Major / Big Dipper (top right, 25° - 65°)
    {
      name: 'URSA MAJOR',
      nameAngle: 45,
      stars: [
        { a: 28, r: 442 }, { a: 34, r: 462 }, { a: 42, r: 472 },
        { a: 50, r: 454 }, { a: 56, r: 476 }, { a: 64, r: 468 }, { a: 60, r: 446 }
      ],
      connections: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 3]]
    },
    // 2. Orion (right-center, 80° - 120°)
    {
      name: 'ORION',
      nameAngle: 102,
      stars: [
        { a: 82, r: 476 }, { a: 86, r: 438 }, { a: 98, r: 456 },
        { a: 102, r: 458 }, { a: 106, r: 460 }, { a: 116, r: 478 }, { a: 120, r: 440 }
      ],
      connections: [[0, 2], [1, 2], [2, 3], [3, 4], [4, 5], [4, 6], [0, 1], [5, 6]]
    },
    // 3. Cassiopeia (bottom right, 140° - 175°)
    {
      name: 'CASSIOPEIA',
      nameAngle: 158,
      stars: [
        { a: 142, r: 446 }, { a: 150, r: 472 }, { a: 158, r: 450 },
        { a: 166, r: 478 }, { a: 174, r: 458 }
      ],
      connections: [[0, 1], [1, 2], [2, 3], [3, 4]]
    },
    // 4. Cygnus / Northern Cross (bottom, 195° - 235°)
    {
      name: 'CYGNUS',
      nameAngle: 215,
      stars: [
        { a: 198, r: 458 }, { a: 214, r: 460 }, { a: 232, r: 462 },
        { a: 212, r: 436 }, { a: 216, r: 482 }
      ],
      connections: [[0, 1], [1, 2], [3, 1], [1, 4]]
    },
    // 5. Pegasus (bottom left, 250° - 290°)
    {
      name: 'PEGASUS',
      nameAngle: 270,
      stars: [
        { a: 254, r: 444 }, { a: 258, r: 478 }, { a: 284, r: 480 },
        { a: 282, r: 442 }, { a: 294, r: 460 }
      ],
      connections: [[0, 1], [1, 2], [2, 3], [3, 0], [2, 4]]
    },
    // 6. Taurus & Pleiades (top left, 310° - 350°)
    {
      name: 'TAURUS',
      nameAngle: 330,
      stars: [
        { a: 312, r: 475 }, { a: 322, r: 452 }, { a: 332, r: 446 },
        { a: 340, r: 464 }, { a: 348, r: 480 }, { a: 326, r: 470 }
      ],
      connections: [[0, 1], [1, 2], [2, 3], [3, 4], [1, 5], [5, 3]]
    }
  ];

  ctx.save();
  // Draw connecting constellation lines
  constellationGroups.forEach(group => {
    ctx.strokeStyle = 'rgba(215, 228, 245, 0.55)';
    ctx.lineWidth = 1.2;
    group.connections.forEach(([s1, s2]) => {
      const p1 = group.stars[s1];
      const p2 = group.stars[s2];
      const rad1 = (p1.a * Math.PI) / 180;
      const rad2 = (p2.a * Math.PI) / 180;
      const x1 = cx + Math.cos(rad1) * p1.r;
      const y1 = cy + Math.sin(rad1) * p1.r;
      const x2 = cx + Math.cos(rad2) * p2.r;
      const y2 = cy + Math.sin(rad2) * p2.r;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
    });

    // Draw radiant stars
    group.stars.forEach(st => {
      const sRad = (st.a * Math.PI) / 180;
      const sx = cx + Math.cos(sRad) * st.r;
      const sy = cy + Math.sin(sRad) * st.r;

      // Glow halo
      ctx.fillStyle = 'rgba(255, 255, 255, 0.4)';
      ctx.beginPath();
      ctx.arc(sx, sy, 5.0, 0, Math.PI * 2);
      ctx.fill();

      // Bright white star core
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(sx, sy, 2.5, 0, Math.PI * 2);
      ctx.fill();

      // Subtle star 4-point sparkle cross
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.75)';
      ctx.lineWidth = 0.8;
      ctx.beginPath();
      ctx.moveTo(sx - 4.5, sy);
      ctx.lineTo(sx + 4.5, sy);
      ctx.moveTo(sx, sy - 4.5);
      ctx.lineTo(sx, sy + 4.5);
      ctx.stroke();
    });

    // Miniature engraved constellation name along curve
    const nRad = (group.nameAngle * Math.PI) / 180;
    const nx = cx + Math.cos(nRad) * 424;
    const ny = cy + Math.sin(nRad) * 424;
    ctx.save();
    ctx.translate(nx, ny);
    ctx.rotate(nRad + Math.PI / 2);
    ctx.fillStyle = 'rgba(220, 230, 245, 0.65)';
    ctx.font = '600 9px "Space Mono", monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(group.name, 0, 0);
    ctx.restore();
  });
  ctx.restore();

  // Astronomical Coordinate Ticks and Degree Arcs around outer rim
  ctx.save();
  ctx.translate(cx, cy);
  for (let deg = 0; deg < 360; deg += 3) {
    const rad = (deg * Math.PI) / 180;
    const isMajor = deg % 30 === 0;
    const isMedium = deg % 15 === 0;

    const tickR1 = outerR - 4;
    const tickR2 = isMajor ? outerR - 16 : (isMedium ? outerR - 11 : outerR - 7);

    ctx.strokeStyle = isMajor ? 'rgba(255, 255, 255, 0.75)' : 'rgba(200, 215, 235, 0.35)';
    ctx.lineWidth = isMajor ? 1.5 : 0.9;
    ctx.beginPath();
    ctx.moveTo(Math.cos(rad) * tickR1, Math.sin(rad) * tickR1);
    ctx.lineTo(Math.cos(rad) * tickR2, Math.sin(rad) * tickR2);
    ctx.stroke();

    if (isMajor) {
      // Degree inscription (0°, 30°, 60°...)
      const textR = outerR - 24;
      const tx = Math.cos(rad) * textR;
      const ty = Math.sin(rad) * textR;
      ctx.save();
      ctx.translate(tx, ty);
      ctx.rotate(rad + Math.PI / 2);
      ctx.fillStyle = 'rgba(240, 245, 255, 0.65)';
      ctx.font = '500 8px "Space Mono", monospace';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(`${deg}°`, 0, 0);
      ctx.restore();
    }
  }

  // Planetary Gear & Astrolabe Glyphs at 4 cardinal points (0°, 90°, 180°, 270°)
  [0, Math.PI / 2, Math.PI, Math.PI * 1.5].forEach(ang => {
    const gx = Math.cos(ang) * 458;
    const gy = Math.sin(ang) * 458;
    ctx.save();
    ctx.translate(gx, gy);
    ctx.rotate(ang);

    // Miniature astrolabe gear wheel
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.65)';
    ctx.lineWidth = 1.0;
    ctx.beginPath();
    ctx.arc(0, 0, 8, 0, Math.PI * 2);
    ctx.stroke();

    for (let t = 0; t < 8; t++) {
      const ta = (t * Math.PI) / 4;
      ctx.beginPath();
      ctx.moveTo(Math.cos(ta) * 8, Math.sin(ta) * 8);
      ctx.lineTo(Math.cos(ta) * 11, Math.sin(ta) * 11);
      ctx.stroke();
    }
    ctx.restore();
  });
  // Exposed 12 Gold-Toned Flat-Head Screws around Bezel (Countersunk with micro slots)
  for (let sc = 0; sc < 12; sc++) {
    const sDeg = sc * 30 + 15;
    const sRad = (sDeg * Math.PI) / 180;
    const sR = 468;
    const sx = cx + Math.cos(sRad) * sR;
    const sy = cy + Math.sin(sRad) * sR;

    // Recessed dark socket
    ctx.fillStyle = '#090B0E';
    ctx.beginPath();
    ctx.arc(sx, sy, 11, 0, Math.PI * 2);
    ctx.fill();

    // Gold chamfered collar
    const goldGrad = ctx.createRadialGradient(sx - 2, sy - 2, 1, sx, sy, 9);
    goldGrad.addColorStop(0, '#FEF08A');
    goldGrad.addColorStop(0.5, '#F59E0B');
    goldGrad.addColorStop(1, '#92400E');
    ctx.fillStyle = goldGrad;
    ctx.beginPath();
    ctx.arc(sx, sy, 8.5, 0, Math.PI * 2);
    ctx.fill();

    // Screw slot
    ctx.save();
    ctx.translate(sx, sy);
    ctx.rotate(sRad + ((sc * 7) % 5) * 0.4);
    ctx.fillStyle = '#1A0C02';
    ctx.fillRect(-6.5, -1.4, 13, 2.8);
    ctx.restore();
  }
  ctx.restore();

  // Subtle bevel rim border
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.55)';
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.arc(cx, cy, outerR - 1, 0, Math.PI * 2);
  ctx.stroke();

  ctx.strokeStyle = 'rgba(0, 0, 0, 0.6)';
  ctx.lineWidth = 2.0;
  ctx.beginPath();
  ctx.arc(cx, cy, innerR + 1, 0, Math.PI * 2);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 16;
  texture.needsUpdate = true;
  return texture;
}

/**
 * Lapis Lazuli Subdial Texture (at 9:30 o'clock position)
 * - Deep royal lapis stone with ultramarine clouds and golden pyrite flecks
 * - Polished golden Roman numerals: I, II, III, IV, V, VI, VII, VIII, IX, X, XI, XII
 * - Concentric gold railway minute track
 */
export function createLapisSubdialTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  const cx = 512, cy = 512, R = 496;

  // Rich, vibrant royal Lapis Lazuli stone gradient (deep saturated ultramarine & royal blue)
  const grad = ctx.createRadialGradient(cx - 80, cy - 80, 50, cx, cy, R);
  grad.addColorStop(0, '#1E4AD8');    // Saturated royal ultramarine highlight
  grad.addColorStop(0.35, '#1236A8'); // Deep vibrant lapis lazuli body
  grad.addColorStop(0.70, '#0A2072'); // Rich deep midnight royal blue
  grad.addColorStop(1, '#051142');    // Outer perimeter depth
  ctx.fillStyle = grad;
  ctx.beginPath();
  ctx.arc(cx, cy, R, 0, Math.PI * 2);
  ctx.fill();

  // Natural mineral veining & swirling ultramarine clouds
  ctx.save();
  for (let i = 0; i < 75; i++) {
    const vx = cx + (Math.random() - 0.5) * R * 1.5;
    const vy = cy + (Math.random() - 0.5) * R * 1.5;
    const vr = 40 + Math.random() * 110;
    const vGrad = ctx.createRadialGradient(vx, vy, 0, vx, vy, vr);
    vGrad.addColorStop(0, Math.random() > 0.4 ? 'rgba(50, 110, 245, 0.28)' : 'rgba(8, 20, 65, 0.40)');
    vGrad.addColorStop(0.7, 'rgba(15, 45, 130, 0.15)');
    vGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = vGrad;
    ctx.beginPath();
    ctx.arc(vx, vy, vr, 0, Math.PI * 2);
    ctx.fill();
  }

  // Golden Pyrite flecks (genuine fool's gold dusted star patterns)
  for (let p = 0; p < 220; p++) {
    const pa = Math.random() * Math.PI * 2;
    const pr = Math.random() * (R - 35);
    const px = cx + Math.cos(pa) * pr;
    const py = cy + Math.sin(pa) * pr;
    const pSize = 1.0 + Math.random() * 3.5;

    ctx.fillStyle = Math.random() > 0.35 ? '#F59E0B' : (Math.random() > 0.5 ? '#FEF08A' : '#FDE047');
    ctx.beginPath();
    ctx.arc(px, py, pSize, 0, Math.PI * 2);
    ctx.fill();
  }

  // Delicate gold constellation lines connecting star clusters
  const constellations = [
    [[190, 230], [250, 270], [320, 240], [390, 290], [340, 360]],
    [[630, 270], [690, 320], [750, 300], [790, 370]],
    [[230, 670], [290, 710], [350, 680], [410, 750]]
  ];
  ctx.strokeStyle = 'rgba(254, 240, 138, 0.55)';
  ctx.lineWidth = 1.4;
  constellations.forEach(pts => {
    ctx.beginPath();
    pts.forEach(([x, y], idx) => {
      if (idx === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    });
    ctx.stroke();

    pts.forEach(([x, y]) => {
      ctx.fillStyle = '#FEF08A';
      ctx.beginPath();
      ctx.arc(x, y, 3.2, 0, Math.PI * 2);
      ctx.fill();
    });
  });
  ctx.restore();

  // Concentric Gold Railway Track for Minutes/Hours
  ctx.save();
  ctx.strokeStyle = '#D4AF37';
  ctx.lineWidth = 3.5;
  ctx.beginPath();
  ctx.arc(cx, cy, R - 22, 0, Math.PI * 2);
  ctx.arc(cx, cy, R - 46, 0, Math.PI * 2);
  ctx.stroke();

  // Railway ticks
  ctx.translate(cx, cy);
  for (let m = 0; m < 60; m++) {
    const ma = (m * Math.PI * 2) / 60;
    const isFive = m % 5 === 0;
    ctx.strokeStyle = isFive ? '#F59E0B' : 'rgba(212, 175, 55, 0.75)';
    ctx.lineWidth = isFive ? 3.5 : 1.8;
    ctx.beginPath();
    ctx.moveTo(Math.cos(ma) * (R - 46), Math.sin(ma) * (R - 46));
    ctx.lineTo(Math.cos(ma) * (R - 22), Math.sin(ma) * (R - 22));
    ctx.stroke();
  }

  // Complex Engine-Turned Guilloché Rosette in Center
  const rosettePetals = 16;
  const rosetteR = 100;
  ctx.save();
  for (let p = 0; p < rosettePetals; p++) {
    const pa = (p * Math.PI * 2) / rosettePetals;
    ctx.save();
    ctx.rotate(pa);
    ctx.strokeStyle = 'rgba(254, 240, 138, 0.75)';
    ctx.lineWidth = 2.0;
    ctx.beginPath();
    ctx.ellipse(0, rosetteR * 0.45, 16, rosetteR * 0.45, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.restore();
  }
  // Delicate rosette hub ring
  ctx.strokeStyle = '#FEF08A';
  ctx.lineWidth = 3.0;
  ctx.beginPath();
  ctx.arc(0, 0, 38, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  // Applied Polished Metallic Gold Roman Numerals (XII at top, I to XI clockwise)
  const romanNumerals = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
  ctx.font = 'bold 54px "Cinzel", "Times New Roman", "Georgia", serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  romanNumerals.forEach((rom, idx) => {
    const angle = (idx * 30 * Math.PI) / 180;
    const nr = R - 100;
    const nx = Math.cos(angle - Math.PI / 2) * nr;
    const ny = Math.sin(angle - Math.PI / 2) * nr;

    // Deep drop-shadow for 3D applied metal relief
    ctx.fillStyle = 'rgba(0, 0, 0, 0.95)';
    ctx.fillText(rom, nx + 3.0, ny + 3.5);

    // Brilliant metallic gold fill
    ctx.fillStyle = '#FFE066';
    ctx.fillText(rom, nx, ny);

    // Subtle bright gold top edge highlight
    ctx.fillStyle = '#FFF8DB';
    ctx.fillText(rom, nx - 0.5, ny - 0.8);
  });

  // Center axle gold ring
  ctx.strokeStyle = '#D4AF37';
  ctx.lineWidth = 4.5;
  ctx.beginPath();
  ctx.arc(0, 0, 48, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 16;
  texture.needsUpdate = true;
  return texture;
}

/**
 * Minute Chapter Ring Texture (at 12 o'clock center-top)
 * - Elevated champagne / rose gold metallic ring
 * - BOLD, CRISP PURE BLACK Arabic numerals: 60, 05, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55
 * - Circular brushed satin finish and railway tracks
 */
export function createMinuteRingTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  const cx = 512, cy = 512;
  const outerR = 500, innerR = 340;

  // Champagne rose-gold gradient
  const ringGrad = ctx.createRadialGradient(cx, cy, innerR, cx, cy, outerR);
  ringGrad.addColorStop(0, '#E8C5A8');
  ringGrad.addColorStop(0.5, '#F5DAC0');
  ringGrad.addColorStop(1, '#D8A783');
  ctx.fillStyle = ringGrad;
  ctx.beginPath();
  ctx.arc(cx, cy, outerR, 0, Math.PI * 2);
  ctx.arc(cx, cy, innerR, 0, Math.PI * 2, true);
  ctx.fill();

  // Circular satin-brushing
  ctx.save();
  ctx.translate(cx, cy);
  for (let r = innerR + 2; r < outerR - 2; r += 2.0) {
    const alpha = 0.05 + Math.random() * 0.09;
    ctx.strokeStyle = Math.random() > 0.5 ? `rgba(255, 255, 255, ${alpha})` : `rgba(70, 35, 15, ${alpha * 1.6})`;
    ctx.lineWidth = 1.0;
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Outer & Inner railway tracks in bold jet black
  ctx.strokeStyle = '#050201';
  ctx.lineWidth = 4.0;
  ctx.beginPath();
  ctx.arc(0, 0, outerR - 6, 0, Math.PI * 2);
  ctx.arc(0, 0, outerR - 36, 0, Math.PI * 2);
  ctx.arc(0, 0, innerR + 6, 0, Math.PI * 2);
  ctx.stroke();

  // Minute ticks
  for (let m = 0; m < 60; m++) {
    const rad = (m * Math.PI * 2) / 60;
    const isFive = m % 5 === 0;
    ctx.strokeStyle = '#050201';
    ctx.lineWidth = isFive ? 4.5 : 2.2;
    const r1 = outerR - 6;
    const r2 = isFive ? outerR - 36 : outerR - 22;
    ctx.beginPath();
    ctx.moveTo(Math.cos(rad) * r1, Math.sin(rad) * r1);
    ctx.lineTo(Math.cos(rad) * r2, Math.sin(rad) * r2);
    ctx.stroke();
  }

  // Arabic minute numerals in BOLD, PURE BLACK (60, 05, 10, ... 55)
  const minuteNumbers = ['60', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
  ctx.font = '900 58px "Space Mono", "Arial Black", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  minuteNumbers.forEach((num, idx) => {
    const angle = (idx * 30 * Math.PI) / 180;
    const nr = (outerR + innerR) / 2 - 8;
    const nx = Math.cos(angle - Math.PI / 2) * nr;
    const ny = Math.sin(angle - Math.PI / 2) * nr;

    ctx.save();
    ctx.translate(nx, ny);
    // Keep numbers oriented upright and legible
    let rot = angle;
    if (rot > Math.PI * 0.55 && rot < Math.PI * 1.45) {
      rot += Math.PI; // Flip bottom hemisphere numbers so they are never upside down
    }
    ctx.rotate(rot);

    // Bold, crisp pure black engraved print matching reference image
    ctx.fillStyle = '#050201';
    ctx.fillText(num, 0, 0);
    ctx.restore();
  });

  // Inner & outer bevel borders
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.85)';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(0, 0, outerR - 2, 0, Math.PI * 2);
  ctx.arc(0, 0, innerR + 2, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 16;
  texture.needsUpdate = true;
  return texture;
}

/**
 * 60-Second Chronometer & Flying Tourbillon Seconds Chapter Ring (6 o'clock position)
 * - Deep midnight / satin enamel finish with precision 60-second railway track
 * - Arabic second numerals (60, 05, 10, ... 55) and star markers
 */
export function createSecondsRingTexture(edition) {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  const cx = 512, cy = 512;
  const outerR = 500, innerR = 345;

  // Background ring gradient
  const ringGrad = ctx.createRadialGradient(cx, cy, innerR, cx, cy, outerR);
  if (edition?.id === 'rose') {
    ringGrad.addColorStop(0, '#E8C5A8');
    ringGrad.addColorStop(0.5, '#F5DAC0');
    ringGrad.addColorStop(1, '#D8A783');
  } else if (edition?.id === 'dlc') {
    ringGrad.addColorStop(0, '#090B12');
    ringGrad.addColorStop(0.5, '#141824');
    ringGrad.addColorStop(1, '#05070B');
  } else {
    // Celestial Alchemist deep midnight ultramarine enamel
    ringGrad.addColorStop(0, '#0A1E44');
    ringGrad.addColorStop(0.5, '#0E2858');
    ringGrad.addColorStop(1, '#05112B');
  }
  ctx.fillStyle = ringGrad;
  ctx.beginPath();
  ctx.arc(cx, cy, outerR, 0, Math.PI * 2);
  ctx.arc(cx, cy, innerR, 0, Math.PI * 2, true);
  ctx.fill();

  // Circular satin brushing
  ctx.save();
  ctx.translate(cx, cy);
  for (let r = innerR + 2; r < outerR - 2; r += 2.0) {
    const alpha = 0.04 + Math.random() * 0.08;
    ctx.strokeStyle = Math.random() > 0.5 ? `rgba(255, 255, 255, ${alpha})` : `rgba(0, 0, 0, ${alpha * 1.5})`;
    ctx.lineWidth = 1.0;
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Dual Railway track borders
  const trackColor = (edition?.id === 'rose') ? '#050201' : '#F8FAFC';
  const trackGold = '#F59E0B';
  ctx.strokeStyle = trackColor;
  ctx.lineWidth = 3.5;
  ctx.beginPath();
  ctx.arc(0, 0, outerR - 8, 0, Math.PI * 2);
  ctx.arc(0, 0, outerR - 38, 0, Math.PI * 2);
  ctx.arc(0, 0, innerR + 8, 0, Math.PI * 2);
  ctx.stroke();

  // 60-Second Ticks
  for (let s = 0; s < 60; s++) {
    const rad = (s * Math.PI * 2) / 60;
    const isFive = s % 5 === 0;
    const isMajor = s % 15 === 0;

    ctx.strokeStyle = isMajor ? trackGold : (isFive ? trackColor : ((edition?.id === 'rose') ? 'rgba(5,2,1,0.65)' : 'rgba(255,255,255,0.65)'));
    ctx.lineWidth = isMajor ? 5.0 : (isFive ? 3.5 : 1.8);
    const r1 = outerR - 8;
    const r2 = isFive ? outerR - 38 : outerR - 24;

    ctx.beginPath();
    ctx.moveTo(Math.cos(rad) * r1, Math.sin(rad) * r1);
    ctx.lineTo(Math.cos(rad) * r2, Math.sin(rad) * r2);
    ctx.stroke();
  }

  // Arabic Second Numerals (60, 05, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55)
  const secondNumbers = ['60', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
  ctx.font = '900 52px "Space Mono", "Arial Black", sans-serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  secondNumbers.forEach((num, idx) => {
    const angle = (idx * 30 * Math.PI) / 180;
    const nr = (outerR + innerR) / 2 - 8;
    const nx = Math.cos(angle - Math.PI / 2) * nr;
    const ny = Math.sin(angle - Math.PI / 2) * nr;

    ctx.save();
    ctx.translate(nx, ny);
    let rot = angle;
    if (rot > Math.PI * 0.55 && rot < Math.PI * 1.45) {
      rot += Math.PI;
    }
    ctx.rotate(rot);

    ctx.fillStyle = (num === '60' || num === '30') ? trackGold : trackColor;
    ctx.fillText(num, 0, 0);
    ctx.restore();
  });

  // Small stars at 15, 30, 45, 60
  [0, Math.PI / 2, Math.PI, Math.PI * 1.5].forEach(ang => {
    const starR = innerR + 24;
    const sx = Math.cos(ang - Math.PI / 2) * starR;
    const sy = Math.sin(ang - Math.PI / 2) * starR;
    ctx.fillStyle = '#F59E0B';
    ctx.beginPath();
    ctx.arc(sx, sy, 3.5, 0, Math.PI * 2);
    ctx.fill();
  });

  // Inner & outer bevel borders
  ctx.strokeStyle = trackGold;
  ctx.lineWidth = 2.0;
  ctx.beginPath();
  ctx.arc(0, 0, outerR - 4, 0, Math.PI * 2);
  ctx.arc(0, 0, innerR + 4, 0, Math.PI * 2);
  ctx.stroke();

  ctx.restore();

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 16;
  texture.needsUpdate = true;
  return texture;
}

/**
 * Astronomical Celestial Sun & Moonphase Texture (at 2:30 o'clock position)
 * - Deep starry midnight disc
 * - Blazing golden radiant sun with curved flame rays
 * - Realistic silver-pearl cratered moon
 */
export function createSunMoonTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  const cx = 256, cy = 256, R = 248;

  // Midnight cosmic starfield
  const skyGrad = ctx.createRadialGradient(cx, cy, 20, cx, cy, R);
  skyGrad.addColorStop(0, '#0E1726');
  skyGrad.addColorStop(0.6, '#080E1B');
  skyGrad.addColorStop(1, '#020612');
  ctx.fillStyle = skyGrad;
  ctx.beginPath();
  ctx.arc(cx, cy, R, 0, Math.PI * 2);
  ctx.fill();

  // Twinkling stars
  for (let s = 0; s < 60; s++) {
    const sa = Math.random() * Math.PI * 2;
    const sr = Math.random() * (R - 20);
    const sx = cx + Math.cos(sa) * sr;
    const sy = cy + Math.sin(sa) * sr;
    ctx.fillStyle = Math.random() > 0.4 ? '#FFFFFF' : '#93C5FD';
    ctx.beginPath();
    ctx.arc(sx, sy, 0.8 + Math.random() * 1.5, 0, Math.PI * 2);
    ctx.fill();
  }

  // 1. Radiant Golden Sun (upper hemisphere, ~10 to 2 o'clock)
  const sunX = cx - 55;
  const sunY = cy - 40;
  const sunR = 52;

  // Sun flare glow
  const sunGlow = ctx.createRadialGradient(sunX, sunY, sunR * 0.4, sunX, sunY, sunR * 1.6);
  sunGlow.addColorStop(0, 'rgba(251, 191, 36, 0.6)');
  sunGlow.addColorStop(0.6, 'rgba(245, 158, 11, 0.2)');
  sunGlow.addColorStop(1, 'transparent');
  ctx.fillStyle = sunGlow;
  ctx.beginPath();
  ctx.arc(sunX, sunY, sunR * 1.6, 0, Math.PI * 2);
  ctx.fill();

  // Curved undulating flame rays
  ctx.save();
  ctx.translate(sunX, sunY);
  for (let r = 0; r < 16; r++) {
    const ra = (r * Math.PI * 2) / 16;
    ctx.rotate(ra);
    ctx.fillStyle = (r % 2 === 0) ? '#F59E0B' : '#FBBF24';
    ctx.beginPath();
    ctx.moveTo(-5, -sunR + 2);
    ctx.quadraticCurveTo(0, -sunR - 28, 0, -sunR - 36);
    ctx.quadraticCurveTo(5, -sunR - 28, 5, -sunR + 2);
    ctx.closePath();
    ctx.fill();
    ctx.rotate(-ra);
  }

  // Golden Sun face disc
  const sunGrad = ctx.createRadialGradient(0, 0, 10, 0, 0, sunR);
  sunGrad.addColorStop(0, '#FEF08A');
  sunGrad.addColorStop(0.5, '#F59E0B');
  sunGrad.addColorStop(1, '#D97706');
  ctx.fillStyle = sunGrad;
  ctx.beginPath();
  ctx.arc(0, 0, sunR, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  // 2. Photorealistic Cratered Moon (lower hemisphere, ~4 to 8 o'clock)
  const moonX = cx + 65;
  const moonY = cy + 45;
  const moonR = 64;

  const moonGrad = ctx.createRadialGradient(moonX - 18, moonY - 18, 10, moonX, moonY, moonR);
  moonGrad.addColorStop(0, '#FFFFFF');
  moonGrad.addColorStop(0.4, '#E2E8F0');
  moonGrad.addColorStop(0.8, '#94A3B8');
  moonGrad.addColorStop(1, '#475569');
  ctx.fillStyle = moonGrad;
  ctx.beginPath();
  ctx.arc(moonX, moonY, moonR, 0, Math.PI * 2);
  ctx.fill();

  // Lunar Maria & Crater shadows
  ctx.save();
  const craters = [
    { x: moonX - 16, y: moonY - 14, r: 16 },
    { x: moonX + 18, y: moonY - 10, r: 22 },
    { x: moonX - 8, y: moonY + 22, r: 18 },
    { x: moonX + 24, y: moonY + 18, r: 14 },
    { x: moonX - 28, y: moonY + 8, r: 10 }
  ];
  craters.forEach(c => {
    const cGrad = ctx.createRadialGradient(c.x, c.y, c.r * 0.2, c.x, c.y, c.r);
    cGrad.addColorStop(0, 'rgba(51, 65, 85, 0.45)');
    cGrad.addColorStop(0.7, 'rgba(71, 85, 105, 0.25)');
    cGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = cGrad;
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fill();
  });
  ctx.restore();

  // Perimeter bevel ring
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.65)';
  ctx.lineWidth = 2.0;
  ctx.beginPath();
  ctx.arc(cx, cy, R - 2, 0, Math.PI * 2);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 16;
  texture.needsUpdate = true;
  return texture;
}

/**
 * Antique Bronze Lug Engraving Texture
 * - Warm brushed bronze with dark etched constellation star maps and gears
 */
export function createBronzeLugEngravingTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Antique bronze base
  ctx.fillStyle = '#B87C58';
  ctx.fillRect(0, 0, 512, 512);

  // Brushed grain
  for (let y = 0; y < 512; y += 2) {
    const alpha = 0.03 + Math.random() * 0.08;
    ctx.strokeStyle = Math.random() > 0.5 ? `rgba(255, 230, 200, ${alpha})` : `rgba(60, 30, 15, ${alpha * 1.5})`;
    ctx.lineWidth = 1.0;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(512, y);
    ctx.stroke();
  }

  // Constellation engravings
  ctx.strokeStyle = 'rgba(50, 25, 10, 0.75)';
  ctx.lineWidth = 1.4;
  for (let i = 0; i < 8; i++) {
    const sx1 = 40 + i * 55;
    const sy1 = 80 + Math.sin(i * 1.2) * 60;
    const sx2 = sx1 + 45;
    const sy2 = sy1 + (i % 2 === 0 ? 35 : -35);

    ctx.beginPath();
    ctx.moveTo(sx1, sy1);
    ctx.lineTo(sx2, sy2);
    ctx.stroke();

    // Recessed star dots
    ctx.fillStyle = 'rgba(30, 15, 5, 0.85)';
    ctx.beginPath();
    ctx.arc(sx1, sy1, 3.0, 0, Math.PI * 2);
    ctx.arc(sx2, sy2, 3.0, 0, Math.PI * 2);
    ctx.fill();
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

  // Deep dark anthracite / blackened titanium bridge
  ctx.fillStyle = '#0F1217';
  ctx.fillRect(0, 0, 1024, 1024);

  // Perlage circular graining on anthracite mainplate
  const step = 38;
  for (let y = 0; y < 1024; y += step) {
    for (let x = 0; x < 1024; x += step) {
      const grad = ctx.createRadialGradient(x, y, 4, x, y, step * 0.92);
      grad.addColorStop(0, 'rgba(255,255,255,0.12)');
      grad.addColorStop(0.7, 'rgba(45,55,70,0.4)');
      grad.addColorStop(1, 'rgba(10,12,18,0.1)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(x, y, step * 0.92, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Côtes de Genève (Geneva Stripes) on anthracite top plate
  ctx.save();
  ctx.rotate(Math.PI / 5);
  const stripeWidth = 52;
  for (let x = -600; x < 1600; x += stripeWidth) {
    const sGrad = ctx.createLinearGradient(x, 0, x + stripeWidth, 0);
    sGrad.addColorStop(0, 'rgba(255,255,255,0.06)');
    sGrad.addColorStop(0.5, 'rgba(0,0,0,0.18)');
    sGrad.addColorStop(1, 'rgba(255,255,255,0.04)');
    ctx.fillStyle = sGrad;
    ctx.fillRect(x, -600, stripeWidth, 2400);
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

/**
 * Generates an ultra-luxurious organic leather grain texture
 * with micro-pebbled calfskin pores, alligator/croco cell embossing,
 * and soft longitudinal satin sheen highlights.
 */
/**
 * Generates an ultra-luxurious organic leather color map
 * featuring true Voronoi cellular alligator/calfskin scale tiles,
 * aniline dye depth in interstitial valleys, and burnished edge paint.
 */
export function createLeatherTexture(edition) {
  const canvas = document.createElement('canvas');
  const width = 512, height = 512;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  const baseHex = edition?.strapColor || '#121A2B';
  const numHex = parseInt(baseHex.replace('#', ''), 16);
  const baseR = (numHex >> 16) & 255;
  const baseG = (numHex >> 8) & 255;
  const baseB = numHex & 255;

  // Voronoi cell seeds for natural scale lattice
  const numCellsX = 14, numCellsY = 28;
  const stepX = width / numCellsX, stepY = height / numCellsY;
  const grid = Array.from({ length: numCellsY }, () => Array(numCellsX).fill(null));

  for (let cy = 0; cy < numCellsY; cy++) {
    for (let cx = 0; cx < numCellsX; cx++) {
      const px = (cx + 0.5 + (Math.random() - 0.5) * 0.72) * stepX;
      const py = (cy + 0.5 + (Math.random() - 0.5) * 0.72) * stepY;
      grid[cy][cx] = { x: px, y: py };
    }
  }

  const imgData = ctx.createImageData(width, height);
  const data = imgData.data;

  for (let y = 0; y < height; y++) {
    const gy = Math.floor(y / stepY);
    for (let x = 0; x < width; x++) {
      const gx = Math.floor(x / stepX);
      let d1 = 999999, d2 = 999999;

      for (let dy = -1; dy <= 1; dy++) {
        const ny = (gy + dy + numCellsY) % numCellsY;
        for (let dx = -1; dx <= 1; dx++) {
          const nx = (gx + dx + numCellsX) % numCellsX;
          const pt = grid[ny][nx];
          const distSq = (x - pt.x) * (x - pt.x) + (y - pt.y) * (y - pt.y);
          if (distSq < d1) { d2 = d1; d1 = distSq; }
          else if (distSq < d2) { d2 = distSq; }
        }
      }

      const diff = Math.sqrt(d2) - Math.sqrt(d1); // Small near valleys, large in cell center
      const cellFactor = Math.min(1.0, Math.max(0.0, diff / 8.5));

      // Organic micro-pore noise
      const pore = (Math.random() - 0.5) * 14;

      // Aniline dye modulation: valleys are 40% darker, centers are rich & warm
      const shade = 0.60 + 0.40 * cellFactor;

      // Edge burnishing (darker lacquer edge paint on left/right borders)
      const edgeDist = Math.min(x, width - 1 - x);
      const edgeFactor = Math.min(1.0, Math.max(0.45, edgeDist / 38));

      const finalR = Math.min(255, Math.max(0, Math.round((baseR * shade + pore) * edgeFactor)));
      const finalG = Math.min(255, Math.max(0, Math.round((baseG * shade + pore) * edgeFactor)));
      const finalB = Math.min(255, Math.max(0, Math.round((baseB * shade + pore) * edgeFactor)));

      const idx = (y * width + x) * 4;
      data[idx] = finalR;
      data[idx + 1] = finalG;
      data[idx + 2] = finalB;
      data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imgData, 0, 0);

  // Soft longitudinal satin sheen highlight down center
  const sheenGrad = ctx.createLinearGradient(0, 0, width, 0);
  sheenGrad.addColorStop(0, 'rgba(0, 0, 0, 0.35)');
  sheenGrad.addColorStop(0.18, 'rgba(255, 255, 255, 0.0)');
  sheenGrad.addColorStop(0.5, 'rgba(255, 255, 255, 0.10)');
  sheenGrad.addColorStop(0.82, 'rgba(255, 255, 255, 0.0)');
  sheenGrad.addColorStop(1, 'rgba(0, 0, 0, 0.35)');
  ctx.fillStyle = sheenGrad;
  ctx.fillRect(0, 0, width, height);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 4);
  texture.anisotropy = 16;
  texture.needsUpdate = true;
  return texture;
}

/**
 * Generates high-contrast procedural Bump Map for physical micro-relief
 * giving tactile 3D depth to leather scales, pores, and crevices.
 */
export function createLeatherBumpMap() {
  const canvas = document.createElement('canvas');
  const width = 512, height = 512;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  const numCellsX = 14, numCellsY = 28;
  const stepX = width / numCellsX, stepY = height / numCellsY;
  const grid = Array.from({ length: numCellsY }, () => Array(numCellsX).fill(null));

  for (let cy = 0; cy < numCellsY; cy++) {
    for (let cx = 0; cx < numCellsX; cx++) {
      const px = (cx + 0.5 + (Math.random() - 0.5) * 0.72) * stepX;
      const py = (cy + 0.5 + (Math.random() - 0.5) * 0.72) * stepY;
      grid[cy][cx] = { x: px, y: py };
    }
  }

  const imgData = ctx.createImageData(width, height);
  const data = imgData.data;

  for (let y = 0; y < height; y++) {
    const gy = Math.floor(y / stepY);
    for (let x = 0; x < width; x++) {
      const gx = Math.floor(x / stepX);
      let d1 = 999999, d2 = 999999;

      for (let dy = -1; dy <= 1; dy++) {
        const ny = (gy + dy + numCellsY) % numCellsY;
        for (let dx = -1; dx <= 1; dx++) {
          const nx = (gx + dx + numCellsX) % numCellsX;
          const pt = grid[ny][nx];
          const distSq = (x - pt.x) * (x - pt.x) + (y - pt.y) * (y - pt.y);
          if (distSq < d1) { d2 = d1; d1 = distSq; }
          else if (distSq < d2) { d2 = distSq; }
        }
      }

      const diff = Math.sqrt(d2) - Math.sqrt(d1);
      // Scale center is elevated, valley is recessed
      const bumpHeight = Math.min(255, Math.max(0, Math.round(diff * 26)));
      const pore = (Math.random() - 0.5) * 16;
      const finalBump = Math.min(255, Math.max(0, Math.round(bumpHeight + pore)));

      const idx = (y * width + x) * 4;
      data[idx] = finalBump;
      data[idx + 1] = finalBump;
      data[idx + 2] = finalBump;
      data[idx + 3] = 255;
    }
  }

  ctx.putImageData(imgData, 0, 0);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 4);
  texture.anisotropy = 16;
  texture.needsUpdate = true;
  return texture;
}

/**
 * Generates PBR Roughness Map: polished scale domes have lower roughness (0.42),
 * while interstitial crevice valleys have higher roughness (0.85).
 */
export function createLeatherRoughnessMap() {
  const canvas = document.createElement('canvas');
  const width = 256, height = 256;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#999999'; // Base roughness ~0.60
  ctx.fillRect(0, 0, width, height);

  // Center sheen band has smoother finish
  const sheenGrad = ctx.createLinearGradient(0, 0, width, 0);
  sheenGrad.addColorStop(0, '#CCCCCC'); // Matte edges
  sheenGrad.addColorStop(0.2, '#999999');
  sheenGrad.addColorStop(0.5, '#666666'); // Satin polished center
  sheenGrad.addColorStop(0.8, '#999999');
  sheenGrad.addColorStop(1, '#CCCCCC');
  ctx.fillStyle = sheenGrad;
  ctx.fillRect(0, 0, width, height);

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 4);
  texture.needsUpdate = true;
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

/**
 * Swiss Manufacture plaque texture placed along the tourbillon bridge:
 * "MANUFACTURE EN SUISSE - GENEVE"
 */
export function createSwissPlaqueTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 160;
  const ctx = canvas.getContext('2d');

  // Brushed rose-gold / bronze metallic plaque background
  const grad = ctx.createLinearGradient(0, 0, 1024, 0);
  grad.addColorStop(0, '#B87C58');
  grad.addColorStop(0.2, '#E2BA96');
  grad.addColorStop(0.5, '#F5DAC0');
  grad.addColorStop(0.8, '#E2BA96');
  grad.addColorStop(1, '#B87C58');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 1024, 160);

  // Fine horizontal satin brush marks
  for (let y = 0; y < 160; y += 2) {
    const alpha = 0.05 + Math.random() * 0.12;
    ctx.strokeStyle = Math.random() > 0.5 ? `rgba(255, 255, 255, ${alpha})` : `rgba(40, 20, 10, ${alpha * 1.5})`;
    ctx.lineWidth = 1.0;
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(1024, y);
    ctx.stroke();
  }

  // Double chamfered outer frame
  ctx.strokeStyle = '#3E1F10';
  ctx.lineWidth = 3.5;
  ctx.strokeRect(6, 6, 1012, 148);

  ctx.strokeStyle = 'rgba(255, 255, 255, 0.75)';
  ctx.lineWidth = 2.0;
  ctx.strokeRect(12, 12, 1000, 136);

  // Micro blued steel mounting screws at ends
  [40, 984].forEach(sx => {
    ctx.fillStyle = '#0F172A';
    ctx.beginPath();
    ctx.arc(sx, 80, 14, 0, Math.PI * 2);
    ctx.fill();

    const screwGrad = ctx.createRadialGradient(sx, 80, 2, sx, 80, 12);
    screwGrad.addColorStop(0, '#38BDF8');
    screwGrad.addColorStop(0.7, '#1E40AF');
    screwGrad.addColorStop(1, '#0F172A');
    ctx.fillStyle = screwGrad;
    ctx.beginPath();
    ctx.arc(sx, 80, 12, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#05070B';
    ctx.fillRect(sx - 9, 78, 18, 3.5);
  });

  // Deep engraved text: "MANUFACTURE EN SUISSE - GENEVE"
  ctx.font = '700 42px "Cinzel", "Cormorant Garamond", "Trajan Pro", serif';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  // Drop shadow engrave groove
  ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
  ctx.fillText('MANUFACTURE EN SUISSE - GENEVE', 512, 82);

  // Dark burnt enamel letter fill
  ctx.fillStyle = '#1E0D06';
  ctx.fillText('MANUFACTURE EN SUISSE - GENEVE', 512, 80);

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 16;
  texture.needsUpdate = true;
  return texture;
}

/**
 * Power reserve indicator texture at lower-right:
 * Applied scales marked exactly "HIGH" and "LOW" with graduated ticks
 */
export function createPowerReserveTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  const cx = 256, cy = 256, R = 230;

  // Dark anthracite slate subdial with concentric sunray brushing
  const bgGrad = ctx.createRadialGradient(cx, cy, 20, cx, cy, R);
  bgGrad.addColorStop(0, '#1E232E');
  bgGrad.addColorStop(0.7, '#141822');
  bgGrad.addColorStop(1, '#0C0E14');
  ctx.fillStyle = bgGrad;
  ctx.beginPath();
  ctx.arc(cx, cy, R, 0, Math.PI * 2);
  ctx.fill();

  // Subtle concentric micro-grooves (snailed finish)
  for (let r = 30; r < R - 8; r += 3) {
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
    ctx.lineWidth = 1.0;
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Rose-gold outer retention bezel
  ctx.strokeStyle = '#E2BA96';
  ctx.lineWidth = 4.0;
  ctx.stroke();

  // Power reserve gauge arc (from ~140° to ~320°)
  const startAngle = 140 * Math.PI / 180;
  const endAngle = 320 * Math.PI / 180;
  const arcR = 175;

  ctx.strokeStyle = 'rgba(226, 186, 150, 0.35)';
  ctx.lineWidth = 5.0;
  ctx.beginPath();
  ctx.arc(cx, cy, arcR, startAngle, endAngle);
  ctx.stroke();

  // Calibrated ticks
  const totalTicks = 24;
  for (let t = 0; t <= totalTicks; t++) {
    const fraction = t / totalTicks;
    const ang = startAngle + fraction * (endAngle - startAngle);
    const isMajor = t % 6 === 0;

    // Color gradient: red near LOW (start), white/gold up to HIGH (end)
    if (fraction < 0.25) {
      ctx.strokeStyle = '#EF4444'; // Red reserve warning
    } else if (fraction > 0.75) {
      ctx.strokeStyle = '#F59E0B'; // Full reserve amber/gold
    } else {
      ctx.strokeStyle = '#E2BA96'; // Rose gold
    }

    ctx.lineWidth = isMajor ? 3.5 : 1.8;
    const rIn = arcR - (isMajor ? 24 : 14);
    const rOut = arcR + 4;

    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(ang) * rIn, cy + Math.sin(ang) * rIn);
    ctx.lineTo(cx + Math.cos(ang) * rOut, cy + Math.sin(ang) * rOut);
    ctx.stroke();
  }

  // Applied text: "LOW" at start and "HIGH" at end
  ctx.font = '800 28px "Space Mono", monospace';
  ctx.textBaseline = 'middle';

  // LOW (red warning)
  const lowX = cx + Math.cos(startAngle) * (arcR - 58);
  const lowY = cy + Math.sin(startAngle) * (arcR - 58);
  ctx.fillStyle = '#EF4444';
  ctx.textAlign = 'center';
  ctx.fillText('LOW', lowX, lowY);

  // HIGH (gold)
  const highX = cx + Math.cos(endAngle) * (arcR - 62);
  const highY = cy + Math.sin(endAngle) * (arcR - 62);
  ctx.fillStyle = '#F59E0B';
  ctx.textAlign = 'center';
  ctx.fillText('HIGH', highX, highY);

  // Subtitle in center: "RESERVE"
  ctx.fillStyle = 'rgba(226, 186, 150, 0.75)';
  ctx.font = '600 16px "Space Mono", monospace';
  ctx.textAlign = 'center';
  ctx.fillText('RESERVE', cx, cy + 42);

  // Center chaton ring
  ctx.strokeStyle = '#E2BA96';
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(cx, cy, 28, 0, Math.PI * 2);
  ctx.stroke();

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 16;
  texture.needsUpdate = true;
  return texture;
}

/**
 * Fixed crescent opening mask for the Moon Phase Subdial:
 * Displays a fixed curved crescent cutout displaying the rotating sun/moon disc beneath
 */
export function createMoonPhaseMaskTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');
  const cx = 256, cy = 256, R = 248;

  // Clear background
  ctx.clearRect(0, 0, 512, 512);

  // Outer decorative plate (fills the top semicircle and leaves a bottom curved opening)
  ctx.fillStyle = '#10141D';
  ctx.beginPath();
  ctx.arc(cx, cy, R, 0, Math.PI * 2);
  ctx.fill();

  // Create curved crescent opening window (transparent cutout)
  ctx.globalCompositeOperation = 'destination-out';
  ctx.beginPath();
  // Dual-lobe traditional horological crescent aperture
  ctx.arc(cx, cy - 20, 160, 0.15 * Math.PI, 0.85 * Math.PI, false);
  ctx.arc(cx - 75, cy + 50, 85, 0, Math.PI * 2, true);
  ctx.arc(cx + 75, cy + 50, 85, 0, Math.PI * 2, true);
  ctx.fill();

  ctx.globalCompositeOperation = 'source-over';

  // Rose-gold beveled border around the aperture
  ctx.strokeStyle = '#E2BA96';
  ctx.lineWidth = 4.0;
  ctx.beginPath();
  ctx.arc(cx, cy, R - 2, 0, Math.PI * 2);
  ctx.stroke();

  // Decorative gold stars and astrolabe degree marks on mask
  ctx.fillStyle = '#F59E0B';
  [[120, 80], [392, 80], [200, 50], [312, 50], [256, 40]].forEach(([sx, sy]) => {
    ctx.beginPath();
    ctx.arc(sx, sy, 2.5, 0, Math.PI * 2);
    ctx.fill();
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 16;
  texture.needsUpdate = true;
  return texture;
}

/**
 * High-complication skeletonized base plate texture:
 * Sandblasted frosted dark anthracite/titanium, micro-glints,
 * skeletal cutouts exposing brass gear trains, blued screws, and ruby bearings.
 */
export function createSkeletonMovementPlateTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  const cx = 512, cy = 512;

  // Deep dark frosted anthracite / titanium movement baseplate
  const baseGrad = ctx.createRadialGradient(cx, cy, 60, cx, cy, 512);
  baseGrad.addColorStop(0, '#2D323C');    // Frosted slate anthracite highlight
  baseGrad.addColorStop(0.4, '#1F232B');  // Satin dark titanium body
  baseGrad.addColorStop(0.75, '#15181F'); // Deep charcoal shadow
  baseGrad.addColorStop(1, '#0C0E13');    // Perimeter deep dark edge
  ctx.fillStyle = baseGrad;
  ctx.fillRect(0, 0, 1024, 1024);

  // Micro-granular sandblasted frosted noise (metallic micro-sparkle)
  const imgData = ctx.getImageData(0, 0, 1024, 1024);
  const data = imgData.data;
  for (let i = 0; i < data.length; i += 4) {
    const noise = (Math.random() - 0.5) * 24;
    data[i] = Math.min(255, Math.max(0, data[i] + noise));
    data[i + 1] = Math.min(255, Math.max(0, data[i + 1] + noise + 1));
    data[i + 2] = Math.min(255, Math.max(0, data[i + 2] + noise + 2));
  }
  ctx.putImageData(imgData, 0, 0);

  // High-Horology Circular Perlage (overlapping circular pearling across the dark mainplate)
  ctx.save();
  const perlageStep = 24;
  for (let py = 16; py < 1008; py += perlageStep) {
    const rowOffset = (Math.floor(py / perlageStep) % 2) * (perlageStep * 0.5);
    for (let px = 16 + rowOffset; px < 1008; px += perlageStep) {
      const pGrad = ctx.createRadialGradient(px - 3, py - 3, 2, px, py, 20);
      pGrad.addColorStop(0, 'rgba(255, 255, 255, 0.12)');
      pGrad.addColorStop(0.45, 'rgba(140, 155, 175, 0.08)');
      pGrad.addColorStop(0.85, 'rgba(10, 15, 25, 0.25)');
      pGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = pGrad;
      ctx.beginPath();
      ctx.arc(px, py, 20, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  ctx.restore();

  // Recessed movement aperture wells with chamfered polished bevels
  const recesses = [
    { x: 340, y: 350, r: 120 },
    { x: 680, y: 380, r: 130 },
    { x: 512, y: 730, r: 190 },
    { x: 512, y: 460, r: 90 }
  ];
  recesses.forEach(rec => {
    ctx.save();
    // Dark recess depth
    const rGrad = ctx.createRadialGradient(rec.x, rec.y, rec.r * 0.5, rec.x, rec.y, rec.r);
    rGrad.addColorStop(0, 'rgba(35, 30, 25, 0.55)');
    rGrad.addColorStop(0.9, 'rgba(15, 12, 10, 0.75)');
    rGrad.addColorStop(1, 'rgba(5, 4, 3, 0.90)');
    ctx.fillStyle = rGrad;
    ctx.beginPath();
    ctx.arc(rec.x, rec.y, rec.r, 0, Math.PI * 2);
    ctx.fill();

    // Polished angled anglage bevel border
    ctx.strokeStyle = 'rgba(255, 250, 235, 0.85)';
    ctx.lineWidth = 3.0;
    ctx.stroke();
    ctx.restore();
  });

  // Exposed golden brass gear trains and wheels visible beneath cutouts
  const gears = [
    { x: 340, y: 350, r: 95, teeth: 36 },
    { x: 670, y: 380, r: 105, teeth: 40 },
    { x: 512, y: 460, r: 75, teeth: 28 },
    { x: 420, y: 640, r: 85, teeth: 32 },
    { x: 610, y: 660, r: 90, teeth: 34 }
  ];

  gears.forEach(g => {
    ctx.save();
    ctx.translate(g.x, g.y);

    // Brass gear wheel
    const gearGrad = ctx.createRadialGradient(0, 0, 10, 0, 0, g.r);
    gearGrad.addColorStop(0, '#FFF099');
    gearGrad.addColorStop(0.7, '#D4AF37');
    gearGrad.addColorStop(1, '#8A6218');
    ctx.fillStyle = gearGrad;
    ctx.beginPath();
    ctx.arc(0, 0, g.r, 0, Math.PI * 2);
    ctx.fill();

    // Fine gear teeth
    ctx.fillStyle = '#E5C04A';
    for (let t = 0; t < g.teeth; t++) {
      const ta = (t * Math.PI * 2) / g.teeth;
      ctx.rotate(ta);
      ctx.fillRect(-3, -g.r - 8, 6, 10);
      ctx.rotate(-ta);
    }

    // Skeletonized wheel spokes (5-arm wheel)
    ctx.globalCompositeOperation = 'destination-out';
    for (let sp = 0; sp < 5; sp++) {
      const spa = (sp * Math.PI * 2) / 5;
      ctx.beginPath();
      ctx.arc(Math.cos(spa) * (g.r * 0.55), Math.sin(spa) * (g.r * 0.55), g.r * 0.26, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalCompositeOperation = 'source-over';

    // Center pinion & jewel
    ctx.fillStyle = '#F59E0B';
    ctx.beginPath();
    ctx.arc(0, 0, 15, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  });

  // Polished 18K gold chatons with glowing pigeon-blood ruby jewel bearings
  const rubies = [
    [340, 350, 18], [670, 380, 20], [512, 460, 16],
    [380, 520, 15], [640, 530, 17], [420, 640, 16],
    [610, 660, 18], [512, 270, 15], [260, 480, 14],
    [760, 480, 14]
  ];

  rubies.forEach(([rx, ry, rr]) => {
    // Gold chaton collar
    ctx.fillStyle = '#E6BE44';
    ctx.beginPath();
    ctx.arc(rx, ry, rr + 7, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#996515';
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Ruby cabochon
    const rubyGrad = ctx.createRadialGradient(rx - rr * 0.3, ry - rr * 0.3, 2, rx, ry, rr);
    rubyGrad.addColorStop(0, '#FF4D6D');
    rubyGrad.addColorStop(0.5, '#E11D48');
    rubyGrad.addColorStop(0.9, '#881337');
    rubyGrad.addColorStop(1, '#4C0519');
    ctx.fillStyle = rubyGrad;
    ctx.beginPath();
    ctx.arc(rx, ry, rr, 0, Math.PI * 2);
    ctx.fill();

    // Specular reflection glint
    ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
    ctx.beginPath();
    ctx.arc(rx - rr * 0.35, ry - rr * 0.35, rr * 0.3, 0, Math.PI * 2);
    ctx.fill();
  });

  // Flame-blued steel horology screws with mirror bevels and dark slots
  const screws = [
    [240, 320], [780, 320], [450, 260], [580, 260],
    [220, 600], [800, 600], [330, 780], [690, 780],
    [480, 560], [540, 560]
  ];

  screws.forEach(([sx, sy]) => {
    const screwGrad = ctx.createRadialGradient(sx, sy, 2, sx, sy, 14);
    screwGrad.addColorStop(0, '#38BDF8');
    screwGrad.addColorStop(0.6, '#1D4ED8');
    screwGrad.addColorStop(1, '#0F172A');
    ctx.fillStyle = screwGrad;
    ctx.beginPath();
    ctx.arc(sx, sy, 14, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = '#60A5FA';
    ctx.lineWidth = 1.4;
    ctx.stroke();

    // Screwdriver slot
    ctx.fillStyle = '#020617';
    ctx.fillRect(sx - 11, sy - 2.5, 22, 5);
  });

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 16;
  texture.needsUpdate = true;
  return texture;
}

/**
 * Photorealistic Haute-Horlogerie Astronomical Starmap Movement Plate:
 * Deep midnight cosmic navy/anthracite, golden constellations (Ursa Major, Orion, Cassiopeia, Cygnus),
 * astrolabe altazimuth coordinate rings, Keplerian planetary orbital paths, and celestial perlage.
 */
export function createAstronomicalMovementTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');
  const cx = 512, cy = 512;

  // 1. Rich Deep Royal Celestial Midnight Gradient
  const bgGrad = ctx.createRadialGradient(cx, cy, 20, cx, cy, 512);
  bgGrad.addColorStop(0, '#122B56');     // Luminous deep royal sapphire center
  bgGrad.addColorStop(0.35, '#0B1C3B');  // Deep celestial midnight blue
  bgGrad.addColorStop(0.70, '#061024');  // Atmospheric cosmic dark blue
  bgGrad.addColorStop(1, '#02050D');     // Outer space rim
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 1024, 1024);

  // 2. Luminous Cosmic Nebulae (Stellar nursery dust clouds in cyan & violet)
  const nebula1 = ctx.createRadialGradient(320, 300, 30, 320, 300, 280);
  nebula1.addColorStop(0, 'rgba(56, 189, 248, 0.32)');
  nebula1.addColorStop(0.5, 'rgba(30, 64, 175, 0.16)');
  nebula1.addColorStop(1, 'transparent');
  ctx.fillStyle = nebula1;
  ctx.fillRect(0, 0, 1024, 1024);

  const nebula2 = ctx.createRadialGradient(700, 720, 40, 700, 720, 300);
  nebula2.addColorStop(0, 'rgba(168, 85, 247, 0.28)');
  nebula2.addColorStop(0.6, 'rgba(126, 34, 206, 0.12)');
  nebula2.addColorStop(1, 'transparent');
  ctx.fillStyle = nebula2;
  ctx.fillRect(0, 0, 1024, 1024);

  const nebula3 = ctx.createRadialGradient(512, 180, 20, 512, 180, 220);
  nebula3.addColorStop(0, 'rgba(236, 72, 153, 0.20)');
  nebula3.addColorStop(0.7, 'rgba(244, 114, 182, 0.05)');
  nebula3.addColorStop(1, 'transparent');
  ctx.fillStyle = nebula3;
  ctx.fillRect(0, 0, 1024, 1024);

  ctx.save();
  ctx.translate(cx, cy);

  // 3. Engine-Turned Guilloché Sunray Rays (72 fine radiant golden lines)
  for (let r = 0; r < 72; r++) {
    const ra = (r * Math.PI * 2) / 72;
    const isMajor = (r % 6 === 0);
    ctx.strokeStyle = isMajor ? 'rgba(245, 158, 11, 0.45)' : 'rgba(212, 175, 55, 0.18)';
    ctx.lineWidth = isMajor ? 1.6 : 0.8;
    ctx.beginPath();
    ctx.moveTo(Math.cos(ra) * 50, Math.sin(ra) * 50);
    ctx.lineTo(Math.cos(ra) * 500, Math.sin(ra) * 500);
    ctx.stroke();
  }

  // 4. Astrolabe Coordinate Rings & Concentric Altitude Circles
  const rings = [75, 140, 210, 280, 350, 420, 470, 495];
  rings.forEach((r, idx) => {
    ctx.strokeStyle = (idx % 2 === 0) ? 'rgba(245, 158, 11, 0.70)' : 'rgba(253, 224, 71, 0.45)';
    ctx.lineWidth = (idx === rings.length - 2 || idx === 2) ? 2.8 : 1.4;
    ctx.beginPath();
    ctx.arc(0, 0, r, 0, Math.PI * 2);
    ctx.stroke();

    // Degree tick marks along major altitude rings
    if (idx >= 3) {
      const ticks = (idx === rings.length - 2) ? 360 : 72;
      for (let t = 0; t < ticks; t++) {
        const ta = (t * Math.PI * 2) / ticks;
        const tickLen = (t % 10 === 0) ? 9 : (t % 5 === 0 ? 6 : 3.5);
        ctx.strokeStyle = (t % 10 === 0) ? 'rgba(245, 158, 11, 0.85)' : 'rgba(212, 175, 55, 0.45)';
        ctx.lineWidth = (t % 10 === 0) ? 1.5 : 0.8;
        ctx.beginPath();
        ctx.moveTo(Math.cos(ta) * (r - tickLen), Math.sin(ta) * (r - tickLen));
        ctx.lineTo(Math.cos(ta) * r, Math.sin(ta) * r);
        ctx.stroke();
      }
    }
  });

  // 5. Tilted Astrolabe Ecliptic Ring with Zodiac Signs
  ctx.save();
  ctx.rotate(-0.42);
  ctx.strokeStyle = 'rgba(251, 191, 36, 0.65)';
  ctx.lineWidth = 2.0;
  ctx.beginPath();
  ctx.ellipse(0, 0, 410, 270, 0, 0, Math.PI * 2);
  ctx.stroke();

  // Ecliptic inner dashed border
  ctx.strokeStyle = 'rgba(245, 158, 11, 0.40)';
  ctx.lineWidth = 1.0;
  ctx.setLineDash([8, 6]);
  ctx.beginPath();
  ctx.ellipse(0, 0, 395, 255, 0, 0, Math.PI * 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // Zodiac Constellation glyph markers along the ecliptic
  const zodiacSigns = ['♈ ARIES', '♉ TAURUS', '♊ GEMINI', '♋ CANCER', '♌ LEO', '♍ VIRGO', '♎ LIBRA', '♏ SCORPIO', '♐ SAGITTARIUS', '♑ CAPRICORN', '♒ AQUARIUS', '♓ PISCES'];
  ctx.font = 'bold 11px "Cinzel", Georgia, serif';
  ctx.fillStyle = 'rgba(253, 224, 71, 0.85)';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  zodiacSigns.forEach((z, i) => {
    const za = (i * Math.PI * 2) / 12;
    const zx = Math.cos(za) * 402;
    const zy = Math.sin(za) * 262;
    ctx.save();
    ctx.translate(zx, zy);
    ctx.rotate(za + Math.PI / 2);
    ctx.fillText(z, 0, 0);
    ctx.restore();
  });
  ctx.restore();

  // 6. Keplerian Planetary Orbits & Golden Planet Spheres
  const orbits = [
    { a: 190, b: 150, angle: 0.25, planetAngle: 1.2, color: '#F59E0B', size: 5.5, label: '☉ SOL' },
    { a: 260, b: 200, angle: -0.35, planetAngle: 3.8, color: '#E2E8F0', size: 4.0, label: '☿ MERCURY' },
    { a: 330, b: 250, angle: 0.55, planetAngle: 2.1, color: '#FDE047', size: 5.0, label: '♀ VENUS' },
    { a: 420, b: 320, angle: -0.15, planetAngle: 5.4, color: '#EF4444', size: 4.5, label: '♂ MARS' }
  ];

  orbits.forEach(orb => {
    ctx.save();
    ctx.rotate(orb.angle);
    ctx.strokeStyle = 'rgba(56, 189, 248, 0.40)';
    ctx.lineWidth = 1.2;
    ctx.setLineDash([6, 6]);
    ctx.beginPath();
    ctx.ellipse(0, 0, orb.a, orb.b, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Planet sphere
    const px = Math.cos(orb.planetAngle) * orb.a;
    const py = Math.sin(orb.planetAngle) * orb.b;
    const pGrad = ctx.createRadialGradient(px - 1, py - 1, 1, px, py, orb.size);
    pGrad.addColorStop(0, '#FFFFFF');
    pGrad.addColorStop(0.5, orb.color);
    pGrad.addColorStop(1, 'transparent');
    ctx.fillStyle = pGrad;
    ctx.beginPath();
    ctx.arc(px, py, orb.size, 0, Math.PI * 2);
    ctx.fill();

    // Planet orbital ring halo
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
    ctx.lineWidth = 0.8;
    ctx.beginPath();
    ctx.arc(px, py, orb.size + 2.5, 0, Math.PI * 2);
    ctx.stroke();

    ctx.restore();
  });

  // 7. Golden Constellations with Polished Starlines & Radiant Multi-Spike Stars
  const constellations = [
    // Ursa Major (Big Dipper) - Top Left
    {
      stars: [[-320, -380], [-270, -400], [-210, -360], [-150, -370], [-100, -310], [-90, -230], [-160, -220], [-150, -370]],
      lines: [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7]],
      name: 'URSA MAJOR'
    },
    // Cassiopeia ("W" Queen) - Top Right
    {
      stars: [[200, -410], [270, -430], [320, -380], [380, -410], [430, -380]],
      lines: [[0, 1], [1, 2], [2, 3], [3, 4]],
      name: 'CASSIOPEIA'
    },
    // Cygnus (Northern Cross) - Upper Center
    {
      stars: [[0, -360], [0, -280], [0, -200], [-70, -280], [70, -280]],
      lines: [[0, 1], [1, 2], [3, 1], [1, 4]],
      name: 'CYGNUS'
    },
    // Orion (The Hunter) - Bottom Left
    {
      stars: [[-380, 240], [-300, 290], [-250, 310], [-200, 330], [-140, 260], [-360, 410], [-170, 430]],
      lines: [[0, 1], [1, 2], [2, 3], [3, 4], [0, 5], [4, 6], [1, 5], [3, 6]],
      name: 'ORION'
    },
    // Pegasus & Andromeda - Bottom Right
    {
      stars: [[220, 260], [300, 290], [370, 350], [280, 380], [330, 210], [420, 260]],
      lines: [[0, 1], [1, 2], [2, 3], [3, 0], [1, 4], [4, 5]],
      name: 'PEGASUS'
    }
  ];

  constellations.forEach(c => {
    // Golden constellation stick lines
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.75)';
    ctx.lineWidth = 1.6;
    c.lines.forEach(([i, j]) => {
      ctx.beginPath();
      ctx.moveTo(c.stars[i][0], c.stars[i][1]);
      ctx.lineTo(c.stars[j][0], c.stars[j][1]);
      ctx.stroke();
    });

    // Glowing constellation stars
    c.stars.forEach(([sx, sy], idx) => {
      const mag = (idx % 2 === 0) ? 4.5 : 3.0;

      // Radiant gold aura
      const sGrad = ctx.createRadialGradient(sx, sy, 0.5, sx, sy, mag * 3.0);
      sGrad.addColorStop(0, '#FFFFFF');
      sGrad.addColorStop(0.35, '#FDE047');
      sGrad.addColorStop(0.70, 'rgba(245, 158, 11, 0.45)');
      sGrad.addColorStop(1, 'transparent');
      ctx.fillStyle = sGrad;
      ctx.beginPath();
      ctx.arc(sx, sy, mag * 3.0, 0, Math.PI * 2);
      ctx.fill();

      // Sharp 8-point bright diffraction spikes for bright stars
      ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
      const spikeLen = mag * 3.2;
      ctx.beginPath();
      ctx.moveTo(sx, sy - spikeLen);
      ctx.lineTo(sx + 1.2, sy);
      ctx.lineTo(sx, sy + spikeLen);
      ctx.lineTo(sx - 1.2, sy);
      ctx.closePath();
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(sx - spikeLen, sy);
      ctx.lineTo(sx, sy + 1.2);
      ctx.lineTo(sx + spikeLen, sy);
      ctx.lineTo(sx, sy - 1.2);
      ctx.closePath();
      ctx.fill();
    });
  });

  // 8. North Star (Polaris) - Royal Celestial Emblem at (0, -425)
  const px = 0, py = -425;
  const polarisGrad = ctx.createRadialGradient(px, py, 2, px, py, 26);
  polarisGrad.addColorStop(0, '#FFFFFF');
  polarisGrad.addColorStop(0.3, '#FDE047');
  polarisGrad.addColorStop(0.6, 'rgba(245, 158, 11, 0.5)');
  polarisGrad.addColorStop(1, 'transparent');
  ctx.fillStyle = polarisGrad;
  ctx.beginPath();
  ctx.arc(px, py, 26, 0, Math.PI * 2);
  ctx.fill();

  // Brilliant 8-point compass star for Polaris
  ctx.fillStyle = '#FFFFFF';
  [0, Math.PI / 4, Math.PI / 2, 3 * Math.PI / 4].forEach(rot => {
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(rot);
    const sl = (rot === 0 || rot === Math.PI / 2) ? 22 : 13;
    ctx.beginPath();
    ctx.moveTo(0, -sl);
    ctx.lineTo(2.0, 0);
    ctx.lineTo(0, sl);
    ctx.lineTo(-2.0, 0);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  });

  // 9. Dense Celestial Starfield (320 sparkling stars of varying magnitudes)
  for (let s = 0; s < 320; s++) {
    const sr = Math.random() * 480 + 15;
    const sa = Math.random() * Math.PI * 2;
    const sx = Math.cos(sa) * sr;
    const sy = Math.sin(sa) * sr;
    const sz = Math.random() * 2.0 + 0.6;
    ctx.fillStyle = (s % 4 === 0) ? '#FDE047' : ((s % 6 === 0) ? '#38BDF8' : '#FFFFFF');
    ctx.beginPath();
    ctx.arc(sx, sy, sz, 0, Math.PI * 2);
    ctx.fill();
  }

  // 10. Outer Rim Astronomical Calibre Inscription in Arch
  ctx.fillStyle = 'rgba(253, 224, 71, 0.85)';
  ctx.font = 'bold 13px "Cinzel", Georgia, serif';
  ctx.textAlign = 'center';
  ctx.letterSpacing = '3px';
  ctx.fillText('ASTRONOMIA CELESTIS • CALIBRE SQUELETTE A3016 • GENEVE', 0, -478);
  ctx.fillText('N 27° 42\' 14" • E 85° 18\' 30" • ORBIS CELESTIS', 0, 485);

  ctx.restore();

  const texture = new THREE.CanvasTexture(canvas);
  texture.anisotropy = 16;
  texture.needsUpdate = true;
  return texture;
}

