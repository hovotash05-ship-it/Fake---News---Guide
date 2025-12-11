document.addEventListener("DOMContentLoaded", function() {
  // Смена языка
  window.setLang = function(lang) {
    const allLang = document.querySelectorAll('.lang');

    allLang.forEach(el => {
      el.style.display = 'none';
      el.style.opacity = '0';
    });

    const showLang = document.querySelectorAll('.lang-' + lang);
    showLang.forEach(el => {
      el.style.display = 'block';
      el.animate([{opacity:0}, {opacity:1}], {duration:800, fill:'forwards'});
    });
  }

  // По умолчанию: французский
  setLang('fr');
});