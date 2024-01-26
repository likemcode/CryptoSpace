const { exec } = require('child_process');

// Liste des packages à vérifier
const packagesToCheck = [
  'antdp',
  '@ant-design/icons',
  'react-redux',
  '@reduxjs/toolkit',
  'axios',
  'chart.js',
  'html-react-parser',
  'millify',
  'moment',
  'react-chartjs-2'
];

// Fonction pour vérifier l'installation des packages
function checkPackages(packages) {
  packages.forEach(packageName => {
    exec(`npm list ${packageName}`, (err, stdout, stderr) => {
      if (err) {
        console.error(`Erreur lors de la vérification du package ${packageName} :`, err);
        return;
      }

      if (stderr) {
        console.error(`Erreur lors de l'exécution de la commande pour ${packageName} :`, stderr);
        return;
      }

      if (stdout.includes(packageName)) {
        console.log(`${packageName} est installé.`);
      } else {
        console.log(`${packageName} n'est pas installé.`);
      }
    });
  });
}

// Appel de la fonction pour vérifier les packages
checkPackages(packagesToCheck);
