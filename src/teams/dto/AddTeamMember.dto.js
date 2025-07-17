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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTeamMemberDto = void 0;
var class_validator_1 = require("class-validator");
var AddTeamMemberDto = function () {
    var _a;
    var _employeeId_decorators;
    var _employeeId_initializers = [];
    var _employeeId_extraInitializers = [];
    var _timestamp_decorators;
    var _timestamp_initializers = [];
    var _timestamp_extraInitializers = [];
    var _addedBy_decorators;
    var _addedBy_initializers = [];
    var _addedBy_extraInitializers = [];
    return _a = /** @class */ (function () {
            function AddTeamMemberDto() {
                this.employeeId = __runInitializers(this, _employeeId_initializers, void 0);
                this.timestamp = (__runInitializers(this, _employeeId_extraInitializers), __runInitializers(this, _timestamp_initializers, void 0));
                this.addedBy = (__runInitializers(this, _timestamp_extraInitializers), __runInitializers(this, _addedBy_initializers, void 0));
                __runInitializers(this, _addedBy_extraInitializers);
            }
            return AddTeamMemberDto;
        }()),
        (function () {
            var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _employeeId_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _timestamp_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            _addedBy_decorators = [(0, class_validator_1.IsString)(), (0, class_validator_1.IsNotEmpty)()];
            __esDecorate(null, null, _employeeId_decorators, { kind: "field", name: "employeeId", static: false, private: false, access: { has: function (obj) { return "employeeId" in obj; }, get: function (obj) { return obj.employeeId; }, set: function (obj, value) { obj.employeeId = value; } }, metadata: _metadata }, _employeeId_initializers, _employeeId_extraInitializers);
            __esDecorate(null, null, _timestamp_decorators, { kind: "field", name: "timestamp", static: false, private: false, access: { has: function (obj) { return "timestamp" in obj; }, get: function (obj) { return obj.timestamp; }, set: function (obj, value) { obj.timestamp = value; } }, metadata: _metadata }, _timestamp_initializers, _timestamp_extraInitializers);
            __esDecorate(null, null, _addedBy_decorators, { kind: "field", name: "addedBy", static: false, private: false, access: { has: function (obj) { return "addedBy" in obj; }, get: function (obj) { return obj.addedBy; }, set: function (obj, value) { obj.addedBy = value; } }, metadata: _metadata }, _addedBy_initializers, _addedBy_extraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
}();
exports.AddTeamMemberDto = AddTeamMemberDto;
