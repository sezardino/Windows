import "./slider";
import modals from "./modules/modals";
import tabs from "./modules/tabs";
import forms from "./modules/forms";
import checkModalInfo from "./modules/checkModalInfo";
import timer from "./modules/timer";
import galery from "./modules/galery";


const modalInfo = {
  form: 0,
  type: 'plastic'
};

checkModalInfo(modalInfo);
modals('.popup_engineer_btn', '.popup_engineer', '.popup_close');
modals('.phone_link', '.popup', '.popup_close', true);
modals('.popup_calc_btn', '.popup_calc', '.popup_calc_close', false , false);
modals('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false , false);
modals('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false , false);
tabs('.decoration_slider', '.no_click', '.after_click', '.decoration_content > div > div');
tabs('.glazing_slider', '.glazing_block', '.active', '.glazing_content');
tabs('.balcon_icons', '.balcon_icons_img', '.do_image_more', '.big_img > img', 'inline');
forms('assets/server.php', modalInfo);
timer('.container1', '#days', '#hours', '#minutes', '#seconds', '2020-06-30');
galery('.works', '.row', '.preview');
