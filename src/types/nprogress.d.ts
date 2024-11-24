declare module 'nprogress' {
    const NProgress: {
        start: () => void;
        done: () => void;
        set: (n: number) => void;
        configure: (options: { showSpinner?: boolean; minimum?: number; }) => void;
    };
    export default NProgress;
}
  