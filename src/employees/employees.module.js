"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeModule = void 0;
var Project_schema_1 = require("../../../../../src/schemas/Project.schema");
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var serve_static_1 = require("@nestjs/serve-static");
var Account_schema_1 = require("../../../../../src/schemas/Account.schema");
var Employee_schema_1 = require("../../../../../src/schemas/Employee.schema");
var employees_service_1 = require("./employees.service");
var employees_controller_1 = require("./employees.controller");
var departments_module_1 = require("../../../../../src/departments/departments.module");
var designations_module_1 = require("../../../../../src/designations/designations.module");
var accounts_module_1 = require("../../../../../src/accounts/accounts.module");
var ProjectPermissions_schema_1 = require("../../../../../src/schemas/ProjectPermissions.schema");
var projectpermissions_module_1 = require("../../../../../src/projectpermissions/projectpermissions.module");
var teams_module_1 = require("../../../../../src/teams/teams.module");
var employee_factory_1 = require("./factory/employee.factory");
var validation_employee_decorator_1 = require("./decorators/validation-employee.decorator");
var logging_employee_decorator_1 = require("./decorators/logging-employee.decorator");
var cache_employee_decorator_1 = require("./decorators/cache-employee.decorator");
var EmployeeModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [
                serve_static_1.ServeStaticModule.forRoot({
                    rootPath: 'uploads',
                    serveRoot: '/uploads',
                }),
                // Định nghĩa schema chính xác trong MongooseModule
                mongoose_1.MongooseModule.forFeature([
                    { name: Employee_schema_1.Employee.name, schema: Employee_schema_1.EmployeeSchema },
                    { name: Account_schema_1.Account.name, schema: Account_schema_1.AccountSchema },
                    { name: Project_schema_1.Project.name, schema: Project_schema_1.ProjectSchema },
                    { name: ProjectPermissions_schema_1.ProjectPermissions.name, schema: ProjectPermissions_schema_1.ProjectPermissionsSchema },
                ]),
                (0, common_1.forwardRef)(function () { return teams_module_1.TeamModule; }), // Tránh vòng lặp
                departments_module_1.DepartmentModule,
                designations_module_1.DesignationModule,
                accounts_module_1.AccountModule,
                projectpermissions_module_1.ProjectPermissionsModule,
            ],
            providers: [employees_service_1.EmployeeService,
                employee_factory_1.EmployeeFactory,
                {
                    provide: 'EmployeeServiceDecorated',
                    useFactory: function (employeeService) {
                        var withValidation = new validation_employee_decorator_1.ValidationEmployeeDecorator(employeeService);
                        var withLogging = new logging_employee_decorator_1.LoggingEmployeeDecorator(withValidation);
                        var withCache = new cache_employee_decorator_1.CacheEmployeeDecorator(withLogging);
                        return withCache;
                    },
                    inject: [employees_service_1.EmployeeService]
                }
            ],
            controllers: [employees_controller_1.EmployeeController],
            exports: [employees_service_1.EmployeeService],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var EmployeeModule = _classThis = /** @class */ (function () {
        function EmployeeModule_1() {
        }
        return EmployeeModule_1;
    }());
    __setFunctionName(_classThis, "EmployeeModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        EmployeeModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return EmployeeModule = _classThis;
}();
exports.EmployeeModule = EmployeeModule;
