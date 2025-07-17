"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeService = void 0;
var common_1 = require("@nestjs/common");
var EmployeeService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var EmployeeService = _classThis = /** @class */ (function () {
        function EmployeeService_1(employeeModel, teamModel, projectModel, accountModel, projectPermissionsModel, departmentService, designationService, projectPermissionService, accountService, employeeFactory, dbConnection) {
            this.employeeModel = employeeModel;
            this.teamModel = teamModel;
            this.projectModel = projectModel;
            this.accountModel = accountModel;
            this.projectPermissionsModel = projectPermissionsModel;
            this.departmentService = departmentService;
            this.designationService = designationService;
            this.projectPermissionService = projectPermissionService;
            this.accountService = accountService;
            this.employeeFactory = employeeFactory;
            this.dbConnection = dbConnection;
            console.log('🏗️ TeamsService được khởi tạo');
            console.log('📊 Database connection status:', this.dbConnection.getConnectionStatus());
        }
        EmployeeService_1.prototype.ensureConnection = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log('🔍 Kiểm tra kết nối database...');
                            if (!!this.dbConnection.getConnection()) return [3 /*break*/, 2];
                            console.log('⚠️ Chưa có kết nối, đang kết nối...');
                            return [4 /*yield*/, this.dbConnection.connect()];
                        case 1:
                            _a.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            console.log('✅ Đã có kết nối database');
                            _a.label = 3;
                        case 3:
                            console.log('📊 Trạng thái kết nối hiện tại:', this.dbConnection.getConnectionStatus());
                            return [2 /*return*/];
                    }
                });
            });
        };
        EmployeeService_1.prototype.createEmployee = function (_a) {
            return __awaiter(this, void 0, void 0, function () {
                var newEmployee;
                var account = _a.account, projectpermission = _a.projectpermission, createEmployee = __rest(_a, ["account", "projectpermission"]);
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            console.log('📝 Bắt đầu tạo employee mới...');
                            return [4 /*yield*/, this.ensureConnection()];
                        case 1:
                            _b.sent();
                            return [4 /*yield*/, this.employeeFactory.create(__assign({ account: account, projectpermission: projectpermission }, createEmployee))];
                        case 2:
                            newEmployee = _b.sent();
                            return [4 /*yield*/, newEmployee.save()];
                        case 3: return [2 /*return*/, _b.sent()];
                    }
                });
            });
        };
        EmployeeService_1.prototype.getEmployeeByUsernameOrEmail = function (email) {
            return __awaiter(this, void 0, void 0, function () {
                var employee;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.ensureConnection()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.employeeFactory.getByUsernameOrEmail(email)];
                        case 2:
                            employee = _a.sent();
                            return [2 /*return*/, employee];
                    }
                });
            });
        };
        EmployeeService_1.prototype.getEmployees = function () {
            return __awaiter(this, void 0, void 0, function () {
                var employees;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            console.log('🔍 Lấy danh sách tất cả employees...');
                            return [4 /*yield*/, this.ensureConnection()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.employeeFactory.getAll()];
                        case 2:
                            employees = _a.sent();
                            return [2 /*return*/, employees];
                    }
                });
            });
        };
        // ✅ Lấy thông tin nhân viên theo ID
        EmployeeService_1.prototype.getEmployeeById = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var employee;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.ensureConnection()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.employeeFactory.getById(id)];
                        case 2:
                            employee = _a.sent();
                            return [2 /*return*/, employee];
                    }
                });
            });
        };
        EmployeeService_1.prototype.getTeamsByEmployeeId = function (employeeId) {
            return __awaiter(this, void 0, void 0, function () {
                var teams;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.ensureConnection()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.employeeFactory.getTeamsById(employeeId)];
                        case 2:
                            teams = _a.sent();
                            return [2 /*return*/, teams];
                    }
                });
            });
        };
        EmployeeService_1.prototype.getProjectsByEmployeeId = function (employeeId) {
            return __awaiter(this, void 0, void 0, function () {
                var projects;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.ensureConnection()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.employeeFactory.getProjectsById(employeeId)];
                        case 2:
                            projects = _a.sent();
                            return [2 /*return*/, projects];
                    }
                });
            });
        };
        // ✅ Cập nhật thông tin nhân viên
        EmployeeService_1.prototype.updateEmployee = function (employee_id, updateEmployeeDto) {
            return __awaiter(this, void 0, void 0, function () {
                var updatedEmployee;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.ensureConnection()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.employeeFactory.update(employee_id, updateEmployeeDto)];
                        case 2:
                            updatedEmployee = _a.sent();
                            return [2 /*return*/, updatedEmployee];
                    }
                });
            });
        };
        // ✅ Xóa nhân viên
        EmployeeService_1.prototype.deleteEmployee = function (employee_id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.ensureConnection()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, this.employeeFactory.delete(employee_id)];
                    }
                });
            });
        };
        EmployeeService_1.prototype.getEmployeeProfileFromToken = function (email) {
            return __awaiter(this, void 0, void 0, function () {
                var employee;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.ensureConnection()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.employeeFactory.getProfileFromToken(email)];
                        case 2:
                            employee = _a.sent();
                            return [2 /*return*/, employee];
                    }
                });
            });
        };
        EmployeeService_1.prototype.removeTeamFromEmployee = function (employeeId, teamId) {
            return __awaiter(this, void 0, void 0, function () {
                var team;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.ensureConnection()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.employeeFactory.removeTeam(employeeId, teamId)];
                        case 2:
                            team = _a.sent();
                            return [2 /*return*/, team];
                    }
                });
            });
        };
        EmployeeService_1.prototype.getEmployeesByTeamId = function (teamId) {
            return __awaiter(this, void 0, void 0, function () {
                var employee;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.ensureConnection()];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.employeeFactory.getByTeamId(teamId)];
                        case 2:
                            employee = _a.sent();
                            return [2 /*return*/, employee];
                    }
                });
            });
        };
        return EmployeeService_1;
    }());
    __setFunctionName(_classThis, "EmployeeService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        EmployeeService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return EmployeeService = _classThis;
}();
exports.EmployeeService = EmployeeService;
