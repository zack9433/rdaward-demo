import io from 'socket.io-client';
import 'angular-socket-io';

const $inject = ['socketFactory'];
class SocketService {
  constructor(...injects) {
    let ioSocket = io.connect();
    SocketService.$inject.forEach((item, index) => this[item] = injects[index]);
    this.socket = this.socketFactory({
      ioSocket: ioSocket
    });
    this.socket.on('addDir', function(msg) {
      console.log('add dir', JSON.parse(msg));
    });
  }
}

SocketService.$inject = $inject;

export default SocketService;
