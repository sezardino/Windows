const tabs = (tabsParentSelector, tabsSelector, activeClass, tabContentSelector, display = 'block') => {
  const tabsParent = document.querySelector(tabsParentSelector),
        tabs = document.querySelectorAll(tabsSelector),
        tabContent = document.querySelectorAll(tabContentSelector);
  const hideActiveTabs = () => {
    tabs.forEach((tab) => {
      tab.classList.remove(activeClass.slice(1));
    });
    tabContent.forEach((content) => {
      content.style.display = 'none';
    });
  };

  const showActiveTab = (i = 0) => {
    tabs[i].classList.add(activeClass.slice(1));
    tabContent[i].style.display = display;
  };

  const onTabsParentClick = (evt) => {
    evt.preventDefault();
    const target = evt.target;
    if (target && 
      target.classList.contains(tabsSelector.slice(1)) ||
      target.parentNode.classList.contains(tabsSelector.slice(1))) {
        hideActiveTabs()
        tabs.forEach((tab, index) => {
          if (tab === target || tab === target.parentNode) {
            showActiveTab(index)
          }
        })
      }

  };

  hideActiveTabs();
  showActiveTab(0)

  tabsParent.addEventListener('click', onTabsParentClick);
};

export default tabs;