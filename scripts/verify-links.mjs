#!/usr/bin/env node

/**
 * Script de vérification des liens invariants
 * Vérifie que tous les liens de paiement et WhatsApp sont corrects
 */

import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const CHARIOW_URL = 'https://motivasefo.mychariow.shop/vaincre-la-peur/checkout';
const WHATSAPP_BASE = 'https://wa.me/22946347988';

const errors = [];
const warnings = [];

// Fonction récursive pour trouver tous les fichiers
function findFiles(dir, pattern) {
  const results = [];
  const items = readdirSync(dir);
  
  for (const item of items) {
    const fullPath = join(dir, item);
    const stat = statSync(fullPath);
    
    if (stat.isDirectory() && item !== 'node_modules' && item !== '.next') {
      results.push(...findFiles(fullPath, pattern));
    } else if (stat.isFile() && (item.endsWith('.ts') || item.endsWith('.tsx'))) {
      results.push(fullPath);
    }
  }
  
  return results;
}

// Trouver tous les fichiers TypeScript/TSX
const files = findFiles('src', /\.(ts|tsx)$/);

for (const file of files) {
  const content = readFileSync(file, 'utf-8');
  const lines = content.split('\n');

  lines.forEach((line, idx) => {
    // Vérifier les liens checkout Chariow
    if (line.includes('checkout') && line.includes('http')) {
      if (!line.includes(CHARIOW_URL)) {
        errors.push(`${file}:${idx + 1} - Lien checkout non-conforme détecté`);
      }
    }

    // Vérifier les liens WhatsApp
    if (line.includes('wa.me') || line.includes('whatsapp')) {
      if (line.includes('http') && !line.includes(WHATSAPP_BASE)) {
        errors.push(`${file}:${idx + 1} - Lien WhatsApp non-conforme détecté`);
      }
    }

    // Vérifier les ancres
    if (line.includes('href="#')) {
      const anchorMatch = line.match(/href="#([^"]+)"/);
      if (anchorMatch) {
        const anchor = anchorMatch[1];
        const validAnchors = ['top', 'probleme', 'histoire', 'methode', 'preuves', 'contenu', 'apercu', 'faq', 'offre', 'projection'];
        if (!validAnchors.includes(anchor)) {
          warnings.push(`${file}:${idx + 1} - Ancre potentiellement non-standard: #${anchor}`);
        }
      }
    }
  });
}

// Rapport
console.log('\n=== VÉRIFICATION DES LIENS INVARIANTS ===\n');

if (errors.length === 0) {
  console.log('✅ Tous les liens Chariow et WhatsApp sont conformes');
} else {
  console.error('❌ ERREURS DÉTECTÉES:\n');
  errors.forEach(err => console.error(`  ${err}`));
  process.exit(1);
}

if (warnings.length > 0) {
  console.warn('\n⚠️  AVERTISSEMENTS:\n');
  warnings.forEach(warn => console.warn(`  ${warn}`));
}

// Vérification dans content.ts
const contentFile = readFileSync('src/lib/content.ts', 'utf-8');
if (!contentFile.includes(CHARIOW_URL)) {
  console.error('\n❌ ERREUR: checkoutUrl manquant dans content.ts');
  process.exit(1);
}
if (!contentFile.includes(WHATSAPP_BASE)) {
  console.error('\n❌ ERREUR: whatsapp base URL manquant dans content.ts');
  process.exit(1);
}

console.log('\n✅ Vérification terminée avec succès\n');
console.log(`📊 Statistiques:
  - Fichiers vérifiés: ${files.length}
  - Erreurs: ${errors.length}
  - Avertissements: ${warnings.length}
`);
