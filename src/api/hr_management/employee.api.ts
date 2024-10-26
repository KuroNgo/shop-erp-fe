import {axiosInstance} from "@/http/axios";

interface Employee {
    address: string;
    avatarURL: string;
    dateOfBirth: string;
    dayOfWork: string;
    department: string;
    email: string;
    firstName: string;
    gender: string;
    lastName: string;
    phone: string;
    role: string;
}

// Hằng số URL endpoints
const API_ENDPOINTS = {
    GET_ALL: 'employees/get/all',
    GET_BY_ID: 'employees/get/id',
    GET_BY_NAME: 'employees/get/name',
    UPDATE: 'employees/update',
    DELETE: 'employees/delete',
    CREATE: 'employees/create',
};

export const fetchAllEmployees = async (): Promise<Employee[]> => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.GET_ALL);
        return response.data;
    } catch (error) {
        handleError(error);
        return [];
    }
};

export const fetchEmployeeByID = async (id: string): Promise<Employee | null> => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.GET_BY_ID, {
            params: {id},
        });
        return response.data;
    } catch (error) {
        handleError(error);
        return null;
    }
};

export const fetchEmployeesByName = async (name: string): Promise<Employee[]> => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.GET_BY_NAME, {
            params: {name},
        });
        return response.data;
    } catch (error) {
        handleError(error);
        return [];
    }
};

export const updateEmployee = async (employee: Employee, id: string): Promise<void> => {
    try {
        await axiosInstance.put(API_ENDPOINTS.UPDATE, employee, {
            params: {id},
        });
    } catch (error) {
        handleError(error);
    }
};

export const deleteEmployee = async (id: string): Promise<void> => {
    try {
        await axiosInstance.delete(API_ENDPOINTS.DELETE, {
            params: {id},
        });
    } catch (error) {
        handleError(error);
    }
};

export const createEmployee = async (employee: Employee): Promise<void> => {
    try {
        await axiosInstance.post(API_ENDPOINTS.CREATE, employee);
    } catch (error) {
        handleError(error);
    }
};
