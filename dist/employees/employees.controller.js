"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeController = void 0;
const common_1 = require("@nestjs/common");
const CreateEmployee_dto_1 = require("./dto/CreateEmployee.dto");
const UpdateEmployee_dto_1 = require("./dto/UpdateEmployee.dto");
const employees_service_1 = require("./employees.service");
const multer_1 = require("multer");
const uuid_1 = require("uuid");
const platform_express_1 = require("@nestjs/platform-express");
const path = __importStar(require("path"));
const swagger_1 = require("@nestjs/swagger");
let EmployeeController = class EmployeeController {
    constructor(employeeService) {
        this.employeeService = employeeService;
    }
    async createEmployee(createEmployeeDto, file) {
        if (file) {
            createEmployeeDto.employeeProfile = `/uploads/employeeProfile/${file.filename}`;
        }
        const newEmployee = await this.employeeService.createEmployee(createEmployeeDto);
        return { success: true, data: newEmployee };
    }
    async getEmployees() {
        return this.employeeService.getEmployees();
    }
    async getEmployeeById(id) {
        return this.employeeService.getEmployeeById(id);
    }
    async getTeamsByEmployeeId(id) {
        return this.employeeService.getTeamsByEmployeeId(id);
    }
    async getProjectsByEmployeeId(id) {
        return this.employeeService.getProjectsByEmployeeId(id);
    }
    async updateEmployee(id, updateEmployeeDto, file) {
        if (file) {
            updateEmployeeDto.employeeProfile = `/uploads/employeeProfile/${file.filename}`;
        }
        return this.employeeService.updateEmployee(id, updateEmployeeDto);
    }
    async deleteEmployee(id) {
        return this.employeeService.deleteEmployee(id);
    }
};
exports.EmployeeController = EmployeeController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiOperation)({ summary: 'Create new employee' }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('employeeProfile', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/employeeProfile',
            filename: (req, file, cb) => {
                const fileExt = path.extname(file.originalname);
                const filename = `${(0, uuid_1.v4)()}${fileExt}`;
                cb(null, filename);
            }
        })
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateEmployee_dto_1.CreateEmployeeDto, Object]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "createEmployee", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all employees' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "getEmployees", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get employee by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "getEmployeeById", null);
__decorate([
    (0, common_1.Get)('project/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get employee by ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "getTeamsByEmployeeId", null);
__decorate([
    (0, common_1.Get)('pm/:id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get projects by Employee ID' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "getProjectsByEmployeeId", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, swagger_1.ApiOperation)({ summary: 'Update employee' }),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('employeeProfile', {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads/employeeProfile',
            filename: (req, file, cb) => {
                const fileExt = path.extname(file.originalname);
                const filename = `${(0, uuid_1.v4)()}${fileExt}`;
                cb(null, filename);
            }
        })
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateEmployee_dto_1.UpdateEmployeeDto, Object]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "updateEmployee", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete employee' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EmployeeController.prototype, "deleteEmployee", null);
exports.EmployeeController = EmployeeController = __decorate([
    (0, swagger_1.ApiTags)('employees'),
    (0, common_1.Controller)('employees'),
    __param(0, (0, common_1.Inject)('EmployeeServiceDecorated')),
    __metadata("design:paramtypes", [employees_service_1.EmployeeService])
], EmployeeController);
//# sourceMappingURL=employees.controller.js.map