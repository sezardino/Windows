import {chectInputForNumbers} from './utils';

const checkModalInfo = (data) => {
  const windowForm = document.querySelectorAll('.balcon_icons_img'),
        widthInput = document.querySelectorAll('#width'),
        heightInput = document.querySelectorAll('#height'),
        viewType = document.querySelectorAll('#view_type'),
        profileType = document.querySelectorAll('.checkbox');

  chectInputForNumbers('#width')
  chectInputForNumbers('#height')

  const getData = (element, event, property ) => {
    element.forEach((item, index) => {
      item.addEventListener(event, () => {
        switch(item.nodeName) {
          case 'SPAN':
            data[property] = index;
            break;
          case 'INPUT':
            if (item.getAttribute('type') === 'checkbox') {
              index === 0 ? data.profile = 'cold' : data.profile = 'warm';
              element.forEach((elem, j) => {
                elem.checked = false;
                if (index == j) {
                  elem.checked = true;
                }
              })
            } else {
              data[property] = item.value;
            };
            break;
          case 'SELECT':
            data[property] = item.value;
            break;
        };
      });
    });
  };

  getData(windowForm, 'click', 'form');
  getData(widthInput, 'input', 'width');
  getData(heightInput, 'input', 'height');
  getData(profileType, 'change', 'height');
  getData(viewType, 'change', 'type');
};

export default checkModalInfo;