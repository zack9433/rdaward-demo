import SocketService from './socket.service';
export default (app) => {
  app.service('socketService', SocketService);
}
