declare module 'locomotive-scroll' {
    export interface LocomotiveScrollOptions {
        el?: HTMLElement;
        smooth?: boolean;
        multiplier?: number;
        class?: string;
        smartphone?: {
            smooth?: boolean;
        };
        tablet?: {
            smooth?: boolean;
        };
    }

    export default class LocomotiveScroll {
        constructor(options: LocomotiveScrollOptions);
        update(): void;
        destroy(): void;
        scrollTo(target: string | number | HTMLElement, options?: any): void;
    }
}
