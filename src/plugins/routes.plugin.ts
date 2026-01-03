import { Plugin, Server } from '@hapi/hapi';
import AuthModule from '../modules/auth/auth.module';

const routesPlugin: Plugin<void> = {
  name: 'routes',
  version: '1.0.0',
  register: async (_server: Server) => {
    await AuthModule.register(_server);
  },
};

export default routesPlugin;
