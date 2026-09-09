import * as THREE from 'three';

export function createBoxTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d');

  // Obsidian Matte Finish Base
  ctx.fillStyle = '#11131B';
  ctx.fillRect(0, 0, 1024, 1024);

  // Subtle leather / fine parchment grain
  for (let i = 0; i < 30000; i++) {
    const x = Math.random() * 1024;
    const y = Math.random() * 1024;
    const alpha = Math.random() * 0.05;
    ctx.fillStyle = Math.random() > 0.5 ? `rgba(255,255,255,${alpha})` : `rgba(0,0,0,${alpha * 1.5})`;
    ctx.fillRect(x, y, 2, 2);
  }

  // Antique Gold Filigree & Double Border Frame
  ctx.strokeStyle = '#D4AF37';
  ctx.lineWidth = 6;
  ctx.strokeRect(36, 36, 952, 952);

  ctx.strokeStyle = 'rgba(212, 175, 55, 0.4)';
  ctx.lineWidth = 2;
  ctx.strokeRect(50, 50, 924, 924);

  // Corner Ornaments (Gilded Brass brackets)
  const drawCorner = (x, y, rx, ry) => {
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(rx, ry);
    ctx.strokeStyle = '#D4AF37';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(60, 0);
    ctx.lineTo(60, 20);
    ctx.lineTo(20, 20);
    ctx.lineTo(20, 60);
    ctx.lineTo(0, 60);
    ctx.closePath();
    ctx.stroke();
    ctx.fillStyle = 'rgba(212, 175, 55, 0.15)';
    ctx.fill();
    ctx.restore();
  };

  drawCorner(54, 54, 1, 1);
  drawCorner(970, 54, -1, 1);
  drawCorner(54, 970, 1, -1);
  drawCorner(970, 970, -1, -1);

  // Celestial Astrolabe / Constellation Circle
  ctx.strokeStyle = 'rgba(212, 175, 55, 0.35)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(512, 420, 180, 0, Math.PI * 2);
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(512, 420, 130, 0, Math.PI * 2);
  ctx.stroke();

  // Celestial rays
  for (let a = 0; a < Math.PI * 2; a += Math.PI / 8) {
    ctx.beginPath();
    ctx.moveTo(512 + Math.cos(a) * 130, 420 + Math.sin(a) * 130);
    ctx.lineTo(512 + Math.cos(a) * 180, 420 + Math.sin(a) * 180);
    ctx.stroke();
  }

  // Guild Logo / Title
  ctx.fillStyle = '#D4AF37';
  ctx.font = 'bold 56px "Cinzel", Georgia, serif';
  ctx.textAlign = 'center';
  ctx.letterSpacing = '8px';
  ctx.fillText('NOCTURNE', 512, 410);

  ctx.font = '600 20px "Montserrat", sans-serif';
  ctx.fillStyle = '#F8FAFC';
  ctx.letterSpacing = '10px';
  ctx.fillText('THE MIDNIGHT BOOK GUILD', 512, 450);

  // Wax Seal Emblem
  ctx.fillStyle = '#881337';
  ctx.beginPath();
  ctx.arc(512, 630, 48, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = '#D4AF37';
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = '#D4AF37';
  ctx.font = '32px serif';
  ctx.fillText('🗝️', 512, 642);

  // Latin Motto
  ctx.fillStyle = 'rgba(212, 175, 55, 0.75)';
  ctx.font = 'italic 20px "Cinzel", Georgia, serif';
  ctx.letterSpacing = '4px';
  ctx.fillText('• VERITAS IN TENEBRIS •', 512, 730);

  ctx.font = '14px "Montserrat", sans-serif';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
  ctx.letterSpacing = '6px';
  ctx.fillText('MONTHLY ARCHIVAL DISPATCH • EDITION IV', 512, 760);

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

export function createBookCoverTexture(book) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 768;
  const ctx = canvas.getContext('2d');

  // Deep clothbound background
  ctx.fillStyle = book.coverColor || '#180B26';
  ctx.fillRect(0, 0, 512, 768);

  // Fine cloth grain
  for (let i = 0; i < 25000; i++) {
    const x = Math.random() * 512;
    const y = Math.random() * 768;
    ctx.fillStyle = `rgba(255,255,255,${Math.random() * 0.04})`;
    ctx.fillRect(x, y, 1, 2);
  }

  // Spine edge crease shadow
  const hingeGrad = ctx.createLinearGradient(0, 0, 45, 0);
  hingeGrad.addColorStop(0, 'rgba(0,0,0,0.6)');
  hingeGrad.addColorStop(1, 'rgba(0,0,0,0)');
  ctx.fillStyle = hingeGrad;
  ctx.fillRect(0, 0, 45, 768);

  // Ornate Gold Foil Arch & Frame
  ctx.strokeStyle = book.accentColor || '#D4AF37';
  ctx.lineWidth = 6;
  ctx.strokeRect(28, 28, 456, 712);

  ctx.lineWidth = 1.5;
  ctx.strokeRect(38, 38, 436, 692);

  // Gothic Archway Frame
  ctx.beginPath();
  ctx.moveTo(60, 480);
  ctx.lineTo(60, 260);
  ctx.quadraticCurveTo(256, 120, 452, 260);
  ctx.lineTo(452, 480);
  ctx.stroke();

  // Edition Badge
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(60, 60, 392, 32);
  ctx.strokeStyle = book.accentColor || '#D4AF37';
  ctx.lineWidth = 1;
  ctx.strokeRect(60, 60, 392, 32);

  ctx.fillStyle = '#D4AF37';
  ctx.font = 'bold 13px "Cinzel", Georgia, serif';
  ctx.textAlign = 'center';
  ctx.letterSpacing = '4px';
  ctx.fillText('NOCTURNE GUILD EXCLUSIVE FOLIO', 256, 81);

  // Title in Regal Serif
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 46px "Cinzel", Georgia, serif';
  
  const words = book.title.split(' ');
  if (words.length > 2) {
    ctx.fillText(words.slice(0, 2).join(' '), 256, 320);
    ctx.fillText(words.slice(2).join(' '), 256, 375);
  } else {
    ctx.fillText(book.title, 256, 340);
  }

  // Author
  ctx.font = 'italic 26px "Cormorant Garamond", Georgia, serif';
  ctx.fillStyle = book.accentColor || '#D4AF37';
  ctx.fillText(`by ${book.author}`, 256, 435);

  // Center Emblem (Key & Celestial Crescent)
  ctx.fillStyle = book.accentColor || '#D4AF37';
  ctx.font = '36px serif';
  ctx.fillText('🗝️', 256, 520);

  // Genre / Foliated footer
  ctx.font = 'bold 16px "Montserrat", sans-serif';
  ctx.letterSpacing = '4px';
  ctx.fillStyle = 'rgba(255,255,255,0.85)';
  ctx.fillText(book.genre.toUpperCase(), 256, 630);

  ctx.font = 'italic 15px Georgia, serif';
  ctx.fillStyle = 'rgba(212, 175, 55, 0.7)';
  ctx.fillText('• Gilded Edges & Ribbon Mark •', 256, 665);

  const texture = new THREE.CanvasTexture(canvas);
  return texture;
}

export function createBookSpineTexture(book) {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 768;
  const ctx = canvas.getContext('2d');

  // Spine base color
  ctx.fillStyle = book.coverColor || '#180B26';
  ctx.fillRect(0, 0, 128, 768);

  // Spine curved 3D lighting gradient
  const grad = ctx.createLinearGradient(0, 0, 128, 0);
  grad.addColorStop(0, 'rgba(0,0,0,0.6)');
  grad.addColorStop(0.3, 'rgba(255,255,255,0.12)');
  grad.addColorStop(0.7, 'rgba(0,0,0,0.15)');
  grad.addColorStop(1, 'rgba(0,0,0,0.7)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 128, 768);

  // Raised Ribs with Gold Foil lines
  const ribY = [60, 180, 580, 700];
  ribY.forEach(y => {
    ctx.fillStyle = book.accentColor || '#D4AF37';
    ctx.fillRect(10, y, 108, 4);
    ctx.fillRect(10, y + 6, 108, 1.5);
  });

  // Emblem at top
  ctx.fillStyle = book.accentColor || '#D4AF37';
  ctx.font = '28px serif';
  ctx.textAlign = 'center';
  ctx.fillText('🗝️', 64, 130);

  // Title vertical
  ctx.save();
  ctx.translate(64, 380);
  ctx.rotate(-Math.PI / 2);
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 32px "Cinzel", Georgia, serif';
  ctx.letterSpacing = '2px';
  ctx.textAlign = 'center';
  ctx.fillText(book.title, 0, 10);
  ctx.restore();

  // Author vertical near bottom
  ctx.save();
  ctx.translate(64, 640);
  ctx.rotate(-Math.PI / 2);
  ctx.fillStyle = book.accentColor || '#D4AF37';
  ctx.font = 'bold 18px "Montserrat", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(book.author, 0, 6);
  ctx.restore();

  return new THREE.CanvasTexture(canvas);
}

export function createPagesTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 128;
  canvas.height = 512;
  const ctx = canvas.getContext('2d');

  // Gilded Gold Edges
  const goldGrad = ctx.createLinearGradient(0, 0, 128, 0);
  goldGrad.addColorStop(0, '#785517');
  goldGrad.addColorStop(0.5, '#F59E0B');
  goldGrad.addColorStop(0.8, '#FEF08A');
  goldGrad.addColorStop(1, '#92400E');
  ctx.fillStyle = goldGrad;
  ctx.fillRect(0, 0, 128, 512);

  // Fine paper striations
  ctx.strokeStyle = 'rgba(0, 0, 0, 0.2)';
  ctx.lineWidth = 1;
  for (let y = 0; y < 512; y += 3) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(128, y);
    ctx.stroke();
  }

  return new THREE.CanvasTexture(canvas);
}
