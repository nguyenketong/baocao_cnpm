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
exports.ProgressModule = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var Progress_schema_1 = require("../../../../../src/schemas/Progress.schema");
var progress_service_1 = require("./progress.service");
var progress_controller_1 = require("./progress.controller");
var progressCategories_module_1 = require("../../../../../src/progresscategories/progressCategories.module");
var notifications_module_1 = require("../../../../../src/notifications/notifications.module");
var employees_module_1 = require("../../../../../src/employees/employees.module");
var Employee_schema_1 = require("../../../../../src/schemas/Employee.schema");
var NotificationSent_schema_1 = require("../../../../../src/schemas/NotificationSent.schema");
var ProgressCategory_schema_1 = require("../../../../../src/schemas/ProgressCategory.schema");
var Project_schema_1 = require("../../../../../src/schemas/Project.schema");
var projects_module_1 = require("../../../../../src/projects/projects.module");
var cache_progress_decorator_1 = require("./decorators/cache-progress.decorator");
var logging_progress_decorator_1 = require("./decorators/logging-progress.decorator");
var validation_progress_decorator_1 = require("./decorators/validation-progress.decorator");
var progress_factory_1 = require("./factory/progress.factory");
var ProgressModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [
                mongoose_1.MongooseModule.forFeature([
                    { name: Progress_schema_1.Progress.name, schema: Progress_schema_1.ProgressSchema },
                    { name: Employee_schema_1.Employee.name, schema: Employee_schema_1.EmployeeSchema },
                    { name: NotificationSent_schema_1.NotificationSent.name, schema: NotificationSent_schema_1.NotificationSentSchema },
                    { name: ProgressCategory_schema_1.ProgressCategory.name, schema: ProgressCategory_schema_1.ProgressCategorySchema },
                    { name: Project_schema_1.Project.name, schema: Project_schema_1.ProjectSchema },
                ]),
                progressCategories_module_1.ProgressCategoryModule,
                notifications_module_1.NotificationModule,
                employees_module_1.EmployeeModule,
                projects_module_1.ProjectModule
            ],
            providers: [progress_service_1.ProgressService,
                progress_factory_1.ProgressFactory,
                {
                    provide: 'ProgressServiceDecorated',
                    useFactory: function (progressService) {
                        var withValidation = new validation_progress_decorator_1.ValidationProgressDecorator(progressService);
                        var withLogging = new logging_progress_decorator_1.LoggingProgressDecorator(withValidation);
                        var withCache = new cache_progress_decorator_1.CacheProgressDecorator(withLogging);
                        return withCache;
                    },
                    inject: [progress_service_1.ProgressService]
                }
            ],
            controllers: [progress_controller_1.ProgressController],
            exports: [progress_service_1.ProgressService],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ProgressModule = _classThis = /** @class */ (function () {
        function ProgressModule_1() {
        }
        return ProgressModule_1;
    }());
    __setFunctionName(_classThis, "ProgressModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ProgressModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ProgressModule = _classThis;
}();
exports.ProgressModule = ProgressModule;
