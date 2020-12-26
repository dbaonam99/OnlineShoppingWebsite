const fs = require("fs");
const NodeRSA = require("node-rsa");
const axios = require("axios").default;
const CryptoJS = require("crypto-js");
const moment = require("moment");

const config = require("../config.json");
const Crypto = require("./Crypto"); 

const publicKey = fs.readFileSync("publickey.pem", "utf8");
const rsa = new NodeRSA(publicKey, {
  encryptionScheme: "pkcs1",
});

let uid = Date.now();

class ZaloPay {
  constructor() {
    const self = this;
    // Ngrok.GetPublicURL().then((publicURL) => {
    //   console.log("[Public_url]", publicURL);
    //   self.publicURL = publicURL;
    // });
  }

  VerifyCallback(data, requestMac) {
    const result = {};
    const mac = CryptoJS.HmacSHA256(data, config.key2).toString();

    if (mac !== requestMac) {
      result.returncode = -1;
      result.returnmessage = "mac not equal";
    } else {
      result.returncode = 1;
      result.returnmessage = "success";
    }

    return result;
  }

  VerifyCheckSum(data) {
    let {
      appid,
      apptransid,
      pmcid,
      bankcode,
      amount,
      discountamount,
      status,
      checksum,
    } = data;
    let params =
      appid +
      "|" +
      apptransid +
      "|" +
      pmcid +
      "|" +
      bankcode +
      "|" +
      amount +
      "|" +
      discountamount +
      "|" +
      status;
    let hash = CryptoJS.HmacSHA256(params, config.key2).toString();
    if (checksum === hash) return true;
    return false;
  }

  GenTransID() {
    return `${moment().format("YYMMDD")}_${config.appid}_${++uid}`;
  }

  NewOrder({ amount, description, bankcode }) {
    const self = this;
    return {
      amount,
      description,
      appid: config.appid,
      appuser: "Demo",
      embeddata: JSON.stringify({
        redirecturl: self.publicURL + "/redirect-url",
        description,
      }),
      item: JSON.stringify([{ name: "demo item", amount }]),
      apptime: Date.now(),
      bankcode,
      apptransid: this.GenTransID(),
    };
  }

  async CreateOrder(params = {}) {
    const order = this.NewOrder(params);
    order.mac = Crypto.Mac.CreateOrder(order);
    const { data: result } = await axios.post(config.api.createorder, null, {
      params: order,
    });

    result.apptransid = order.apptransid;
    return result;
  }

  Gateway(params = {}) {
    const order = this.NewOrder(params);
    order.mac = Crypto.Mac.CreateOrder(order);
    const orderJSON = JSON.stringify(order);
    const b64Order = Buffer.from(orderJSON).toString("base64");
    return config.api.gateway + encodeURIComponent(b64Order);
  }

  async QuickPay(params = {}) {
    const order = this.NewOrder(params);
    order.userip = "127.0.0.1";
    order.paymentcode = rsa.encrypt(params.paymentcodeRaw, "base64");
    order.mac = Crypto.Mac.QuickPay(order, params.paymentcodeRaw);

    const { data: result } = await axios.post(config.api.quickpay, null, {
      params: order,
    });

    result.apptransid = order.apptransid;
    return result;
  }

  async GetOrderStatus(apptransid = "") {
    const params = {
      appid: config.appid,
      apptransid,
    };

    params.mac = Crypto.Mac.GetOrderStatus(params);

    const { data: result } = await axios.post(config.api.getorderstatus, null, {
      params,
    }); 
    return result;
  }

  async Refund({ zptransid, amount, description }) {
    const refundReq = {
      appid: config.appid,
      zptransid,
      amount,
      description,
      timestamp: Date.now(),
      mrefundid: this.GenTransID(),
    };

    refundReq.mac = Crypto.Mac.Refund(refundReq);

    const { data: result } = await axios.post(config.api.refund, null, {
      params: refundReq,
    });

    result.mrefundid = refundReq.mrefundid;
    return result;
  }

  async GetRefundStatus(mrefundid) {
    const params = {
      appid: config.appid,
      mrefundid,
      timestamp: Date.now(),
    };

    params.mac = Crypto.Mac.GetRefundStatus(params);

    const { data: result } = await axios.post(
      config.api.getrefundstatus,
      null,
      {
        params,
      }
    );

    return result;
  }

  async GetBankList() {
    const params = {
      appid: config.appid,
      reqtime: Date.now(),
    }; 
    params.mac = Crypto.Mac.GetBankList(params);

    const { data: result } = await axios.post(config.api.getbanklist, null, {
      params,
    });
    console.log("result", result.banks["39"]);

    return result;
  }
}

module.exports = new ZaloPay();
