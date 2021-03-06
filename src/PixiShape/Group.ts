﻿module Pixis {
    export class Group extends Shape implements IContainer {
        public shape: PIXI.DisplayObjectContainer;

        constructor(config: IShapeConfig) {
            super(new PIXI.DisplayObjectContainer(), config);
        }

        public add(child: Shape) {
            child.parent = this;
            this.shape.addChild(child.shape);
        }

        public remove(child: Shape) {
            this.shape.removeChild(child.shape);
            child.parent = null;
        }

        public getStage() {
            return this.parent.getStage();
        }

        public removeAll() {
            var shape = this.shape;

            while (shape.children.length > 0) {
                shape.removeChild(shape.children[0]);
            }
        }
    }
} 