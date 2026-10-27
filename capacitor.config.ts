import type {CapacitorConfig} from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ahmed.tellock',
  appName: 'tel-lock',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
