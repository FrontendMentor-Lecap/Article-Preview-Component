const share = document.getElementById('share');
const socials = document.getElementById('socials');
const shareIcon = document.getElementById('share-icon');

share.addEventListener('click', () => {
  share.classList.toggle('share__active');
  shareIcon.classList.toggle('share__icon__active');
  socials.classList.toggle('socials__active');
});
