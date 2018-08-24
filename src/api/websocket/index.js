import ReconnectingWebSocket from 'reconnecting-websocket';


export default class WazoWebSocket {
  constructor(params) {
    this.ws_init = false;
    this.callback = params.callback;
    this.host = params.host;
    this.token = params.token;
  }

  init() {
    const sock = new ReconnectingWebSocket(`wss://${this.host}/api/websocketd/?token=${this.token}`);
    sock.debug = false;

    sock.onmessage = (e) => {
      const ev = JSON.parse(e.data);
      if (!this.ws_init) {
        this.initialize(ev, sock);
      } else {
        this.callback(ev);
      }
    };

    sock.onclose = (e) => {
      switch (e.code) {
        case 4002:
          break;
        case 4003:
          break;
        default:
      }
    };

    return sock;
  }

  initialize(data, sock) {
    const routingKey = ['*'];

    switch (data.op) {
      case 'init':
        for (let i = 0; i < routingKey.length; i += 1) {
          const op = {
            op: 'subscribe',
            data: {
              event_name: routingKey[i],
            },
          };
          sock.send(JSON.stringify(op));
        }
        sock.send(JSON.stringify({ op: 'start' }));
        break;
      case 'subscribe':
        break;
      case 'start':
        this.ws_init = true;
        break;
      default:
        // nothing
    }
  }
}
