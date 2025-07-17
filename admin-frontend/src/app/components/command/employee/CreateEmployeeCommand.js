"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateEmployeeCommand = void 0;
var axios_1 = require("axios");
var swr_1 = require("swr");
var API_EMPLOYEE_URL = "http://localhost:3000/employees";
var CreateEmployeeCommand = /** @class */ (function () {
    function CreateEmployeeCommand(employeeData, file) {
        this.employeeData = employeeData;
        this.file = file;
    }
    CreateEmployeeCommand.prototype.execute = function () {
        return __awaiter(this, void 0, void 0, function () {
            var formData, response, error_1;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        formData = new FormData();
                        // Thêm thông tin Employee
                        formData.append("employeeName", this.employeeData.employeeName.trim());
                        if (this.file) {
                            formData.append("employeeProfile", this.file);
                        }
                        formData.append("joiningDate", this.employeeData.joiningDate);
                        formData.append("phone", this.employeeData.phone.trim());
                        formData.append("description", (this.employeeData.description || "").trim());
                        formData.append("department_id", this.employeeData.department);
                        formData.append("designation_id", this.employeeData.designation);
                        // Thêm thông tin tài khoản
                        formData.append("account[userName]", this.employeeData.account.userName.trim());
                        formData.append("account[password]", this.employeeData.account.password);
                        formData.append("account[email]", this.employeeData.account.email.trim());
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, axios_1.default.post(API_EMPLOYEE_URL, formData, {
                                headers: { "Content-Type": "multipart/form-data" },
                            })];
                    case 2:
                        response = _c.sent();
                        if (response.status === 201 || response.status === 200) {
                            (0, swr_1.mutate)(API_EMPLOYEE_URL);
                            return [2 /*return*/, { success: true, message: "Employee created successfully" }];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _c.sent();
                        if (axios_1.default.isAxiosError(error_1)) {
                            return [2 /*return*/, { success: false, message: ((_b = (_a = error_1.response) === null || _a === void 0 ? void 0 : _a.data) === null || _b === void 0 ? void 0 : _b.message) || "Error creating employee" }];
                        }
                        return [2 /*return*/, { success: false, message: "An unexpected error occurred" }];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return CreateEmployeeCommand;
}());
exports.CreateEmployeeCommand = CreateEmployeeCommand;
