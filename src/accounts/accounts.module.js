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
exports.AccountModule = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var Account_schema_1 = require("../../../../../src/schemas/Account.schema");
var accounts_service_1 = require("./accounts.service");
var accounts_controller_1 = require("./accounts.controller");
var validation_project_decorator_1 = require("./decorators/validation-project.decorator");
var logging_account_decorator_1 = require("./decorators/logging-account.decorator");
var cache_account_decorator_1 = require("./decorators/cache-account.decorator");
var account_factory_1 = require("./factory/account.factory");
var AccountModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [
                mongoose_1.MongooseModule.forFeature([{ name: Account_schema_1.Account.name, schema: Account_schema_1.AccountSchema }]),
            ],
            providers: [accounts_service_1.AccountService,
                account_factory_1.AccountFactory,
                {
                    provide: 'AccountServiceDecorated',
                    useFactory: function (accountService) {
                        var withValidation = new validation_project_decorator_1.ValidationAccountDecorator(accountService);
                        var withLogging = new logging_account_decorator_1.LoggingAccountDecorator(withValidation);
                        var withCache = new cache_account_decorator_1.CacheAccountDecorator(withLogging);
                        return withCache;
                    },
                    inject: [accounts_service_1.AccountService]
                }
            ],
            controllers: [accounts_controller_1.AccountController],
            exports: [accounts_service_1.AccountService],
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var AccountModule = _classThis = /** @class */ (function () {
        function AccountModule_1() {
        }
        return AccountModule_1;
    }());
    __setFunctionName(_classThis, "AccountModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AccountModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AccountModule = _classThis;
}();
exports.AccountModule = AccountModule;
