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
exports.ValidationProjectDecorator = void 0;
const common_1 = require("@nestjs/common");
const base_project_decorator_1 = require("./base-project.decorator");
let ValidationProjectDecorator = class ValidationProjectDecorator extends base_project_decorator_1.BaseProjectDecorator {
    constructor(projectService) {
        super(projectService);
    }
    async createProject(createProjectDto) {
        this.validateProjectData(createProjectDto);
        return super.createProject(createProjectDto);
    }
    async updateProject(id, updateProjectDto) {
        this.validateProjectData(updateProjectDto);
        return super.updateProject(id, updateProjectDto);
    }
    validateProjectData(projectDto) {
        if (projectDto.projectName && projectDto.projectName.length < 3) {
            throw new common_1.BadRequestException('Tên project phải có ít nhất 3 ký tự');
        }
    }
};
exports.ValidationProjectDecorator = ValidationProjectDecorator;
exports.ValidationProjectDecorator = ValidationProjectDecorator = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [Object])
], ValidationProjectDecorator);
//# sourceMappingURL=validation-project.decorator.js.map