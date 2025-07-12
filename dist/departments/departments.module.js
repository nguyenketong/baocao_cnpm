"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DepartmentModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const Department_schema_1 = require("../schemas/Department.schema");
const departments_controller_1 = require("./departments.controller");
const departments_service_1 = require("./departments.service");
let DepartmentModule = class DepartmentModule {
};
exports.DepartmentModule = DepartmentModule;
exports.DepartmentModule = DepartmentModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                {
                    name: Department_schema_1.Department.name, schema: Department_schema_1.DepartmentSchema
                }
            ])
        ],
        controllers: [departments_controller_1.DepartmentController],
        providers: [departments_service_1.DepartmentService],
        exports: [departments_service_1.DepartmentService],
    })
], DepartmentModule);
//# sourceMappingURL=departments.module.js.map