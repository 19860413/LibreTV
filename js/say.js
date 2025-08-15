  document.addEventListener('DOMContentLoaded', () => {
    const quotes = [
      '持之以恒，金石可镂',
      '山不厌高，水不厌深',
      '千里之行，始于足下',
      '学如逆水行舟，不进则退',
      '志不强者智不达'
    ];
    
    const pTag = document.querySelector('p.text-gray-500.text-sm.mt-2.text-center.md\\:text-left');
    if (pTag) {
      pTag.textContent = quotes[Math.floor(Math.random() * quotes.length)];
    }
  });
