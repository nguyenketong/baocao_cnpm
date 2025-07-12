"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressCategorySchema = exports.ProgressCategory = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProgressCategory = class ProgressCategory extends mongoose_2.Document {
};
exports.ProgressCategory = ProgressCategory;
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], ProgressCategory.prototype, "progressCategoryName", void 0);
exports.ProgressCategory = ProgressCategory = __decorate([
    (0, mongoose_1.Schema)()
], ProgressCategory);
;
exports.ProgressCategorySchema = mongoose_1.SchemaFactory.createForClass(ProgressCategory);
//# sourceMappingURL=ProgressCategory.schema.js.map