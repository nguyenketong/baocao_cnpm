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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamFactory = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("mongoose");
var TeamFactory = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var TeamFactory = _classThis = /** @class */ (function () {
        function TeamFactory_1(teamModel, employeeService, projectService) {
            this.teamModel = teamModel;
            this.employeeService = employeeService;
            this.projectService = projectService;
        }
        TeamFactory_1.prototype.create = function (createTeamDto) {
            return __awaiter(this, void 0, void 0, function () {
                var teamLead, projectid, employeeExists, projectExists, newTeam;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            teamLead = createTeamDto.teamLead, projectid = createTeamDto.projectid;
                            if (!teamLead) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.employeeService.getEmployeeById(teamLead)];
                        case 1:
                            employeeExists = _a.sent();
                            if (!employeeExists) {
                                throw new common_1.BadRequestException('Employee không tồn tại');
                            }
                            _a.label = 2;
                        case 2:
                            if (!projectid) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.projectService.getProjectById(projectid)];
                        case 3:
                            projectExists = _a.sent();
                            if (!projectExists) {
                                throw new common_1.BadRequestException('Project không tồn tại');
                            }
                            _a.label = 4;
                        case 4:
                            newTeam = new this.teamModel(createTeamDto);
                            return [4 /*yield*/, newTeam.save()];
                        case 5: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        TeamFactory_1.prototype.findAll = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.teamModel.find().populate(['teamLead', 'projectid']).exec()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        TeamFactory_1.prototype.findById = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var team;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.teamModel.findById(id).populate(['teamLead', 'projectid']).exec()];
                        case 1:
                            team = _a.sent();
                            if (!team) {
                                throw new common_1.NotFoundException('Team không tồn tại');
                            }
                            return [2 /*return*/, team];
                    }
                });
            });
        };
        TeamFactory_1.prototype.update = function (id, updateTeamDto) {
            return __awaiter(this, void 0, void 0, function () {
                var employeeExists, projectExists, updatedTeam;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!updateTeamDto.teamLead) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.employeeService.getEmployeeById(updateTeamDto.teamLead)];
                        case 1:
                            employeeExists = _a.sent();
                            if (!employeeExists) {
                                throw new common_1.BadRequestException('Employee không tồn tại');
                            }
                            _a.label = 2;
                        case 2:
                            if (!updateTeamDto.projectid) return [3 /*break*/, 4];
                            return [4 /*yield*/, this.projectService.getProjectById(updateTeamDto.projectid)];
                        case 3:
                            projectExists = _a.sent();
                            if (!projectExists) {
                                throw new common_1.BadRequestException('Project không tồn tại');
                            }
                            _a.label = 4;
                        case 4: return [4 /*yield*/, this.teamModel.findByIdAndUpdate(id, updateTeamDto, { new: true }).populate(['teamLead', 'projectid'])];
                        case 5:
                            updatedTeam = _a.sent();
                            if (!updatedTeam) {
                                throw new common_1.NotFoundException('Không tìm thấy Team để cập nhật');
                            }
                            return [2 /*return*/, updatedTeam];
                    }
                });
            });
        };
        TeamFactory_1.prototype.delete = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var deletedTeam;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.teamModel.findByIdAndDelete(id)];
                        case 1:
                            deletedTeam = _a.sent();
                            if (!deletedTeam) {
                                throw new common_1.NotFoundException('Không tìm thấy Team để xóa');
                            }
                            return [2 /*return*/, { message: 'Team đã được xóa thành công' }];
                    }
                });
            });
        };
        TeamFactory_1.prototype.addTeamMember = function (teamId, addTeamMemberDto) {
            return __awaiter(this, void 0, void 0, function () {
                var employeeId, timestamp, addedBy, teamObjectId, employeeObjectId, team, employee, currentTeamIds, updatedTeamIds, updateEmployeeDto, updatedEmployee, error_1, rollbackDto;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            employeeId = addTeamMemberDto.employeeId, timestamp = addTeamMemberDto.timestamp, addedBy = addTeamMemberDto.addedBy;
                            if (!mongoose_1.Types.ObjectId.isValid(teamId) || !mongoose_1.Types.ObjectId.isValid(employeeId)) {
                                throw new common_1.BadRequestException('ID không hợp lệ');
                            }
                            teamObjectId = new mongoose_1.Types.ObjectId(teamId);
                            employeeObjectId = new mongoose_1.Types.ObjectId(employeeId);
                            return [4 /*yield*/, this.teamModel
                                    .findById(teamObjectId)
                                    .populate(['teamLead', 'projectid'])
                                    .exec()];
                        case 1:
                            team = _b.sent();
                            if (!team) {
                                throw new common_1.NotFoundException('Team không tồn tại');
                            }
                            return [4 /*yield*/, this.employeeService.getEmployeeById(employeeId)];
                        case 2:
                            employee = _b.sent();
                            if (!employee) {
                                throw new common_1.BadRequestException('Employee không tồn tại');
                            }
                            if ((_a = employee.team_id) === null || _a === void 0 ? void 0 : _a.some(function (id) { return id.toString() === teamId; })) {
                                throw new common_1.BadRequestException('Employee đã là thành viên của team này');
                            }
                            _b.label = 3;
                        case 3:
                            _b.trys.push([3, 5, , 8]);
                            currentTeamIds = employee.team_id || [];
                            updatedTeamIds = __spreadArray(__spreadArray([], currentTeamIds, true), [teamObjectId], false);
                            updateEmployeeDto = {
                                team_id: updatedTeamIds,
                                lastModifiedBy: 'HMK1510',
                                lastModifiedAt: '2025-03-06 15:39:41'
                            };
                            return [4 /*yield*/, this.employeeService.updateEmployee(employeeId, updateEmployeeDto)];
                        case 4:
                            updatedEmployee = _b.sent();
                            return [2 /*return*/, {
                                    success: true,
                                    message: 'Thêm thành viên vào team thành công',
                                    data: {
                                        team: {
                                            _id: team._id,
                                            teamName: team.teamName,
                                            teamLead: team.teamLead,
                                            projectid: team.projectid
                                        },
                                        employee: {
                                            _id: updatedEmployee._id,
                                            employeeName: updatedEmployee.employeeName,
                                            teams: updatedTeamIds.map(function (id) { return id.toString(); })
                                        },
                                        addedInfo: {
                                            timestamp: '2025-03-06 15:39:41',
                                            addedBy: 'HMK1510'
                                        }
                                    }
                                }];
                        case 5:
                            error_1 = _b.sent();
                            if (!employee.team_id) return [3 /*break*/, 7];
                            rollbackDto = {
                                team_id: employee.team_id,
                                lastModifiedBy: 'HMK1510',
                                lastModifiedAt: '2025-03-06 15:39:41'
                            };
                            return [4 /*yield*/, this.employeeService.updateEmployee(employeeId, rollbackDto)];
                        case 6:
                            _b.sent();
                            _b.label = 7;
                        case 7:
                            console.error('Error adding team member:', error_1);
                            throw new common_1.BadRequestException('Không thể thêm thành viên vào team. Vui lòng thử lại sau.');
                        case 8: return [2 /*return*/];
                    }
                });
            });
        };
        TeamFactory_1.prototype.getTeamMembers = function (teamId) {
            return __awaiter(this, void 0, void 0, function () {
                var team, members;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!mongoose_1.Types.ObjectId.isValid(teamId)) {
                                throw new common_1.BadRequestException('Team ID không hợp lệ');
                            }
                            return [4 /*yield*/, this.teamModel
                                    .findById(teamId)
                                    .populate(['teamLead', 'projectid'])
                                    .exec()];
                        case 1:
                            team = _a.sent();
                            if (!team) {
                                throw new common_1.NotFoundException('Team không tồn tại');
                            }
                            return [4 /*yield*/, this.employeeService.getEmployeesByTeamId(teamId)];
                        case 2:
                            members = _a.sent();
                            return [2 /*return*/, {
                                    team: {
                                        _id: team._id,
                                        teamName: team.teamName,
                                        teamLead: team.teamLead,
                                        projectid: team.projectid
                                    },
                                    members: members.map(function (member) { return ({
                                        _id: member._id,
                                        employeeName: member.employeeName,
                                        employeeProfile: member.employeeProfile,
                                        phone: member.phone,
                                        teams: member.team_id
                                    }); }),
                                    totalMembers: members.length
                                }];
                    }
                });
            });
        };
        TeamFactory_1.prototype.removeTeamMember = function (teamId, employeeId) {
            return __awaiter(this, void 0, void 0, function () {
                var team, updatedEmployee, error_2;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 3, , 4]);
                            if (!mongoose_1.Types.ObjectId.isValid(teamId) || !mongoose_1.Types.ObjectId.isValid(employeeId)) {
                                throw new common_1.BadRequestException('ID không hợp lệ');
                            }
                            return [4 /*yield*/, this.teamModel
                                    .findById(teamId)
                                    .populate(['teamLead', 'projectid'])
                                    .exec()];
                        case 1:
                            team = _b.sent();
                            if (!team) {
                                throw new common_1.NotFoundException('Team không tồn tại');
                            }
                            return [4 /*yield*/, this.employeeService.removeTeamFromEmployee(employeeId, teamId)];
                        case 2:
                            updatedEmployee = _b.sent();
                            return [2 /*return*/, {
                                    success: true,
                                    message: 'Xóa thành viên khỏi team thành công',
                                    data: {
                                        team: {
                                            _id: team._id,
                                            teamName: team.teamName,
                                            teamLead: team.teamLead,
                                            projectid: team.projectid
                                        },
                                        employee: {
                                            _id: updatedEmployee._id,
                                            employeeName: updatedEmployee.employeeName,
                                            teams: (_a = updatedEmployee.team_id) === null || _a === void 0 ? void 0 : _a.map(function (id) { return id.toString(); })
                                        },
                                        removedInfo: {
                                            timestamp: '2025-03-06 15:39:41',
                                            removedBy: 'HMK1510'
                                        }
                                    }
                                }];
                        case 3:
                            error_2 = _b.sent();
                            console.error('Error in removeTeamMember:', error_2);
                            if (error_2 instanceof common_1.BadRequestException || error_2 instanceof common_1.NotFoundException) {
                                throw error_2;
                            }
                            throw new common_1.BadRequestException('Không thể xóa thành viên khỏi team. Vui lòng thử lại sau.');
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        return TeamFactory_1;
    }());
    __setFunctionName(_classThis, "TeamFactory");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        TeamFactory = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return TeamFactory = _classThis;
}();
exports.TeamFactory = TeamFactory;
