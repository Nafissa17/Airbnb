// Affiche une alerte lorsque l'utilisateur clique sur le bouton "Search"
document.querySelector('.search-bar button').addEventListener('click', function() {
    alert("La fonctionnalité de recherche est en cours de développement !");
  });
  
  // Ajoute un effet de survol sur les cartes de logements
  const listings = document.querySelectorAll('.listing-card');
  
  listings.forEach(function(card) {
    card.addEventListener('mouseover', function() {
      card.style.transform = "scale(1.05)";
      card.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.2)";
    });
    
    card.addEventListener('mouseout', function() {
      card.style.transform = "scale(1)";
      card.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
    });
  });
  
  // Message de bienvenue quand la page est complètement chargée
  window.addEventListener('load', function() {
    console.log("Page chargée avec succès !");
  });
  


  