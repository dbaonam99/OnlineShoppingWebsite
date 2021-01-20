import { APIs, postJSON } from './common'; 

export class ZaloPay {
    static listenCallback(apptransid, cb) {
      const ws = new WebSocket(APIs.SUBSCRIBE + "?apptransid=" + apptransid); 
      console.log(ws)
      ws.onopen = e => {
          console.log('open ws', apptransid);
      };
      ws.onmessage = e => {
          const data = JSON.parse(e.data);
          console.log('ws message', data);
          cb(data);
        //   alert('Thanh toán thành công');
      };
      ws.onclose = e => {
          console.log('close ws', apptransid);
      };
    }

    static pay(url, data = {}, done) {
        return postJSON(url, data, done, () => {
            // alert('Thanh toán thất bại');
        })
    }
  
    static qr(data, done) {
        ZaloPay.pay(APIs.QR, data, res => {
            if (res.returncode === 1) { 
                done(res);
            } else {
                // alert(parseResult(res));
            }
        });
    }  
}