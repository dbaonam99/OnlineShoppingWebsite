const CryptoJS = require('crypto-js');
const config = require('../config.json');

class Mac {
  Compute(data) {
    return CryptoJS.HmacSHA256(data, config.key1).toString();
  }

  _createOrderMacData(order) {
    return order.appid +"|"+ order.apptransid +"|"+ order.appuser
      +"|"+ order.amount +"|"+ order.apptime +"|"+ order.embeddata
      +"|"+ order.item;
  }

  CreateOrder(order) {
    return this.Compute(this._createOrderMacData(order));
  }

  QuickPay(order, paymentcodeRaw) {
    return this.Compute(this._createOrderMacData(order) +"|"+ paymentcodeRaw);
  }

  Refund(params) {
    return this.Compute(params.appid +"|"+ params.zptransid
      +"|"+ params.amount +"|"+ params.description
      +"|"+ params.timestamp);
  }

  GetOrderStatus(params) {
    return this.Compute(params.appid +"|"+ params.apptransid +"|"+ config.key1);
  }

  GetRefundStatus(params) {
    return this.Compute(params.appid +"|"+ params.mrefundid +"|"+ params.timestamp);
  }

  GetBankList(params) {
    return this.Compute(params.appid +"|"+ params.reqtime);
  }
}

module.exports = {
  Mac: new Mac()
};