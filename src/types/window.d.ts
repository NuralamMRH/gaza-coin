import { ExternalProvider } from "@ethersproject/providers";

declare global {
  interface Window {
    ethereum?: ExternalProvider & {
      on: (event: string, callback: (...args: any[]) => void) => void;
      removeAllListeners: () => void;
      request: (args: { method: string; params?: any[] }) => Promise<any>;
    };
  }
}
