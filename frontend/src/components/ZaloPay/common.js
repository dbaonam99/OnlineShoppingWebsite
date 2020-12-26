import $ from 'jquery'; 
export const HOST = 'http://pe.heromc.net:4000';

export const APIs = {
  QR: HOST + '/order/zalo/createorder?ordertype=createorder',
  GATEWAY: HOST + '/order/zalo/createorder?ordertype=gateway',
  QUICKPAY: HOST + '/order/zalo/createorder?ordertype=quickpay',
  GETBANKLIST: HOST + '/order/zalo/getbanklist',
  GETORDERSTATUS: HOST + '/order/zalo/getorderstatus',
  GETREFUNDSTATUS: HOST + '/order/zalo/getrefundstatus',
  REFUND: HOST + '/order/zalo/refund',
  GETHISTORY: HOST + '/order/zalo/gethistory',
  SUBSCRIBE: HOST.replace('http', 'ws') + '/subscribe',
}

export function parseResult(obj) {
  let str = '';
  for(const key in obj) {
    str += key + ' = ' + obj[key] + '\n';
  }
  return str;
}

export function postJSON(url, data = {}, done, fail) {
  return $.ajax({
    url,
    data: JSON.stringify(data),
    method: 'POST',
    contentType: 'application/json'
  })
  .done(res => {
    try {
      res = JSON.parse(res);
      done(res);
    } catch {
      done(res);
    }
  })
  .fail(fail);
}

export function getQueryString() {
  const result = {};
  const querys = window.location.search.slice(1).split('&');
  querys.forEach(q => {
    const [key, val] = q.split('=');
    result[key] = val;
  });
  return result;
}