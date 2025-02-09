import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyARF4cQBWmOl2LXGt4aQl28K3P2dLaE3Fw',
  authDomain: 'fitai-c4a8c.firebaseapp.com',
  projectId: 'fitai-c4a8c',
  storageBucket: 'fitai-c4a8c.firebasestorage.app',
  messagingSenderId: '210366313516',
  appId: '1:210366313516:ios:f44b73e35fdd5e1cd68d89'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);