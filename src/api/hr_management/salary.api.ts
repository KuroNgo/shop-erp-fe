import {axiosInstance} from "@/http/axios";

export interface Salary {
    id?: string;
    roleID: string;
    unitConcurrency: string;
    baseSalary: number;
    bonus: number;
    deduction: number;
    netSalary: number;
    createdAt: Date;
    updatedAt: Date;
}

export type Input = Omit<Salary, 'id' | 'createdAt' | 'updatedAt'>;

// Hằng số cho endpoint API
const API_ENDPOINTS = {
    GET_ALL: 'salaries/get/all',
    GET_BY_ID: 'salaries/get/_id',
    GET_BY_TITLE: 'salaries/get/title',
    DELETE: 'salaries/delete',
    CREATE: 'salaries/create',
    UPDATE: 'salaries/update',
};

// Lấy thông tin lương theo ID
export const getByID = async (id: string): Promise<Salary | null> => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.GET_BY_ID, {
            params: {id}
        });
        return response.data;
    } catch (error) {
        handleError(error);
        return null;
    }
};

// Lấy thông tin lương theo tiêu đề vai trò
export const getByRoleTitle = async (title: string): Promise<Salary | null> => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.GET_BY_TITLE, {
            params: {title}
        });
        return response.data;
    } catch (error) {
        handleError(error);
        return null;
    }
};

// Lấy tất cả các thông tin lương
export const getAll = async (): Promise<Salary[]> => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.GET_ALL);
        return response.data;
    } catch (error) {
        handleError(error);
        return [];
    }
};

// Xóa thông tin lương theo ID
export const deleteSalary = async (id: string): Promise<void> => {
    try {
        await axiosInstance.delete(API_ENDPOINTS.DELETE, {
            params: {id}
        });
    } catch (error) {
        handleError(error);
    }
};

// Tạo thông tin lương mới
export const createSalary = async (salary: Input): Promise<void> => {
    try {
        await axiosInstance.post(API_ENDPOINTS.CREATE, salary);
    } catch (error) {
        handleError(error);
    }
};

// Cập nhật thông tin lương
export const updateSalary = async (salary: Salary, id: string): Promise<void> => {
    try {
        await axiosInstance.put(API_ENDPOINTS.UPDATE, salary, {
            params: {id}
        });
    } catch (error) {
        handleError(error);
    }
};
