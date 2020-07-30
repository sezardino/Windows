const galery = (sectionSelector, parentSelector, imgSelector) => {
  const container = document.querySelector(sectionSelector);
        parent = container.querySelector(parentSelector);
  const overlay = document.querySelector('.overlay');
  const img = document.createElement('img');
  img.style.cssText = `margin: 0 auto;
                      display: block;
                      width: 500px;
                      height: 500px;
                      margin-top: 50px;`;
  overlay.append(img);

  parent.addEventListener('click', function(evt) {
    evt.preventDefault();


    const target = evt.target;
    if (target.classList.contains(imgSelector.slice(1))) {
      img.src = target.parentNode.href;
      overlay.style.display = 'block'
      document.body.style.overflow = 'hidden'
    }
  })

  overlay.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('overlay')) {
      overlay.style.display = ''
      document.body.style.overflow = ''
    }
  })
};

export default galery;