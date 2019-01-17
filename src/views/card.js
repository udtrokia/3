/* model.js */
import {DOM, Element} from '../lib';
import { router } from '../views';
import '../styles/card.css';
import '../styles/pics.css';

/* const */
const d = new DOM();
const e = new Element();

/* model_card */
export function model_card_head(element, pic, title, sub) {
  // content
  let msg = e.i('div', {'class': 'msg_notifications', 'id': title}).t(element);
  // left
  let left_msg = e.i('div', {'class': 'left_msg_notifications'}).t(msg);
  e.i('div', {'class': `left_msg_pic ${pic}`}).t(left_msg);
  // right
  let right_msg = e.i('div', {'class': 'right_msg_notifications'}).t(msg);
  e.i('text', {'class': 'right_title_msg'}).p(title).t(right_msg);
  e.i('text', {'class': 'right_sub_msg'}).p(sub).t(right_msg);
  // icon
  e.i('div', {'class': 'right_arrow_msg_2 arrow', 'id': 'double_arrow'}, {
    'click': () => {
      if(e && e.stopPropagation){ e.stopPropagation();}
      element.element
        .parentNode.parentNode.parentNode
        .removeChild(d.id('wrapper_model'))
    }
  }).t(msg);
}

/* model b */
export function model_b(element, pic, title, sub, cb, tapp) {
  // wrapper
  let msg_wrapper = e.i('div', {'class': 'msg_wrapper_b'}).t(element);
  // content
  let msg = e.i('div', {'class': 'msg_notifications_b', 'id': title}).t(msg_wrapper);
  // left
  let left_msg = e.i('div', {'class': 'left_msg_notifications_b'}).t(msg);
  e.i('div', {'class': `left_msg_pic_b ${pic}`}).t(left_msg);
  // riight
  let right_msg = e.i('div', {'class': 'right_msg_notifications'}).t(msg);
  e.i('text', {'class': 'right_title_msg_b'}).p(title).t(right_msg);
  e.i('text', {'class': 'right_sub_msg_b'}).p(sub).t(right_msg);
  // MODEL_A
  if (tapp == 'space') {
    e.i('div', {'class': 'right_arrow_msg right_white'}, {
      'touchend': () => {cb?cb():''}
    }).t(msg);
  }
}

/* model c */
export function model_c(element, pic, title, sub) {
  // wrapper
  let msg_wrapper = e.i('div', {'class': 'msg_wrapper_c'}, {
    'touchstart': () => {}, 'touchend': () => {}
  }).t(element);
  // content
  let msg = e.i('div', {'class': 'msg_notifications_c', 'id': title}).t(msg_wrapper);
  // left
  let left_msg = e.i('div', {'class': 'left_msg_notifications_c'}).t(msg);
  e.i('div', {'class': `left_msg_pic_c ${pic}`}).t(left_msg);
  // right
  let right_msg = e.i('div', {'class': 'right_msg_notifications_c_2'}).t(msg);
  e.i('text', {'class': 'right_title_msg_b'}).p(title).t(right_msg);
  e.i('text', {'class': 'right_sub_msg_c'}).p(sub).t(right_msg);
}

/* model d */
export function model_d(element, pic, title, sub1, sub2, cb, cb2, flag, order) {
  /* wrapper */
  let ts = 0;
  let msg_wrapper = e.i('div', {'class': 'msg_wrapper_d', 'id': 'slide_controller'}, {
    // CMODEL
    'click': () => { if (cb2 != undefined) { cb2(); } },
    'touchstart': e => {
      // e.preventDefault();
      ts = e.changedTouches[0].clientX;
    },
    'touchend': e => {
      // e.preventDefault();
      ts = ts - e.changedTouches[0].clientX;
      if(flag && ts > 50){
        d.id('dot_1').className = 'slide_dot slide_dot_off'
        d.id('dot_2').className = 'slide_dot slide_dot_on'
        d.id('slide_model_d').scrollTo({ left: 1000, behavior: 'smooth'})
      } else if (flag && ts < -50) {
        d.id('slide_model_d').scrollTo({ left: -1000, behavior: 'smooth'})
        d.id('dot_1').className = 'slide_dot slide_dot_on'
        d.id('dot_2').className = 'slide_dot slide_dot_off'        
      }
    }
  }).t(element);
  e.i('div', {'class': 'big_title_msg_d'}, {}, title).t(msg_wrapper);
  // content
  let msg = e.i('div', {'class': 'msg_notifications_d', 'id': title}).t(msg_wrapper);
  // left
  let left_msg = e.i('div', {'class': 'left_msg_notifications_c'}).t(msg);
  e.i('div', {'class': `left_msg_pic_d ${pic}`}).t(left_msg);
  // right
  let right_msg = e.i('div', {'class': 'right_msg_notifications_c'}).t(msg);
  e.i('text', {'class': 'right_sub_msg'}).p(sub1).t(right_msg);
  e.i('text', {'class': 'right_sub_msg'}).p(sub2).t(right_msg);
  let id = `judge_circle_${order}`;
  let judge_circle = e.i('text', {
    'id': id, 'class': 'right_arrow_msg_d_filled'
  }, {
    'click': (e) => {
      if(e && e.stopPropagation){ e.stopPropagation();}
      d.id(id).parentNode.removeChild(d.id(id));
      setTimeout(() => {
        if (cb != undefined) { cb(); }
        d.id('slide_model_d').className = 'slide_model_d disabled';
      }, 300);
    }
  }).t(msg);
  e.i('text', {'style': 'font-size: 1.8em; color: white'}).p('OK').t(judge_circle);
}

/* model e */
export function model_e(element, pic, title, sub, cb, cb2, flag) {  
  // wrapper
  let msg_wrapper = e.i('div', {'class': 'msg_wrapper_e', 'id': title}, {
    'click': () => cb?cb():''
  }).t(element);
  // content
  let msg = e.i('div', {'class': 'msg_notifications_d'}).t(msg_wrapper);
  // right
  let right_msg = e.i('div', {'class': 'right_msg_notifications_c'}).t(msg);
  e.i('text', {'class': 'right_title_msg_e'}).p(title).t(right_msg);
  e.i('text', {'class': 'right_title_msg_e'}).p(sub).t(right_msg);
  // icon
  let judge_circle = e.i('text', {
    'id': `judge_circle_e_${title}`,
    'class': 'right_arrow_msg_e icon_2_2'
  }).t(msg);
  // animate
  e.i('text', {'style': 'font-size: 1.8em; color: white'}).p('OK').t(judge_circle);

  if (flag) {
    e.i('div', {'class': 'white_space_detail'}, {}, '&nbsp;').t(d.id('slide_area_detail'));
    d.id('slide_area_detail').scrollTo({ left: 800, behavior: 'smooth'});
  }
  
  setTimeout(() => {    
    if (cb2 != undefined ) { cb2() }
  }, 1000)
}

/* model f */
export function model_f(element, pic, title, sub) {
  // content
  let msg = e.i('div', {'class': 'msg_notifications_f', 'id': title}).t(element);
  // left
  let left_msg = e.i('div', {'class': ''}).t(msg);
  e.i('div', {'class': `left_msg_pic_f ${pic}`}).t(left_msg);
  // right
  let right_msg = e.i('div', {'class': 'right_msg_notifications'}).t(msg);
  e.i('text', {'class': 'right_title_msg'}).p(title).t(right_msg);
  e.i('text', {'class': 'right_sub_msg'}).p(sub).t(right_msg);
  // e.i('div', {'class': 'right_arrow_msg right'}).t(msg);
}
