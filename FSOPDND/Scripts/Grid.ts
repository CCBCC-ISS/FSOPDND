module FSOPDND {
    'use strict';

    class Column {
    }

    class Row {
    }

    class Grid {
        columns: Column[];
        rows: Row[];
        elements: GridItem[];

        private height: number;
        private width: number;
        private backgroundImage: HTMLImageElement;
    }
}