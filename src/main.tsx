import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { Web3Modal } from '@web3modal/standalone';
const web3modal = new Web3Modal({
  projectId: 'sssss',
  walletConnectVersion: 2
});

web3modal.openModal();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
