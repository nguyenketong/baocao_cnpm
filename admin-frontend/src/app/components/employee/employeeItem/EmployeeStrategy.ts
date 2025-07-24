import { Employee } from "@/app/models/employee";


export interface EmployeeStrategy {
  process(employee: Employee): string;
}

export class DefaultEmployeeStrategy implements EmployeeStrategy {
  process(employee: Employee): string {
    return ` ${employee.designation_id?.designationName || "Chưa có chức vụ"}`;
  }
}

export class LeadEmployeeStrategy implements EmployeeStrategy {
  process(employee: Employee): string {
    return `${employee.designation_id?.designationName}`;
  }
}


export class EmployeeContext {
  private strategy: EmployeeStrategy;

  constructor(strategy: EmployeeStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: EmployeeStrategy) {
    this.strategy = strategy;
  }

  executeStrategy(employee: Employee): string {
    return this.strategy.process(employee);
  }
}
