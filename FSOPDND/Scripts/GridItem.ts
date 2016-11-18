module FSOPDND {
    'use strict';

    export class GridItem {
        private _element: HTMLElement;
        private _startingX: number;
        private _startingY: number;

        constructor(element: HTMLElement) {
            this._element = element;
            
        }

        protected move = (start: WebKitPoint, end: WebKitPoint) => {
            let x = end.x - start.x,
                y = end.y - start.y;

            this._element.style.transform = `translate(${x}px, ${y}px)`;
        };

        protected handleTouchEvent = (e: TouchEvent) => {

        };

        protected handleMouseEvent = (e: MouseEvent) => {

        };
    }
}
