$(document).ready(function() {
    var carouselContainer = $('.container');
    var cards = carouselContainer.find('.card');
    var cardWidth = cards.outerWidth() * 3;
    var cardMarginRight = parseInt(cards.css('margin-right'));
    var cardsCount = cards.length;
    var currentIndex = 0;
    var visibleCards = 3; // Quantidade de cards visíveis inicialmente

    // Configuração inicial
    cards.slice(0, visibleCards).removeClass('hidden'); // Mostra os primeiros 'visibleCards' cards removendo a classe 'hidden'
    carouselContainer.width((cardWidth + cardMarginRight) * visibleCards); // Define a largura do container para acomodar 'visibleCards' cards

    // Função para exibir o próximo conjunto de cards com transição suave de desaparecer e aparecer
    function showNextCards() {
        var nextIndex = (currentIndex + visibleCards) % cardsCount;
        var currentCard = cards.slice(currentIndex, currentIndex + visibleCards);
        var nextCard = cards.slice(nextIndex, nextIndex + visibleCards);

        currentCard.fadeOut(0, function() {
            currentCard.hide();
        });

        nextCard.fadeIn(0);

        currentIndex = nextIndex;
    }

    // Intervalo para trocar os cards automaticamente
    setInterval(showNextCards, 6000);
});
