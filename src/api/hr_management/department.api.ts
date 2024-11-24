import {axiosInstance} from "@/http";

const handleError = (error: any) => {
    console.error('API call failed: ', error);
    throw error;
}

export interface DepartmentApi {
    id: string;
    managerID: string;
    name: string;
    description: string;
    parentID: string;
    level: number;
    status: string;
    whoDeleted: string;
    createdAt: Date;
    updatedAt: Date;
}

// Hằng số URL endpoints
const API_ENDPOINTS = {
    GET_ALL: 'departments/get/all',
    GET_ALL_SOFT_DELETE: 'departments/get/all/delete',
    GET_BY_ID: 'departments/get/id',
    GET_BY_NAME: 'departments/get/name',
    GET_BY_STATUS: 'departments/get/status',
    UPDATE: 'departments/update',
    DELETE: 'departments/delete',
    DELETE_SOFT: 'departments/delete/_id',
    CREATE: 'departments/create',
    CREATE_WITH_MANAGER: 'departments/create/manager',
};

export const fetchAll = async (): Promise<DepartmentApi[]> => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.GET_ALL);
        return response.data;
    } catch (error) {
        handleError(error);
        return [];
    }
};

export const fetchAllSoftDelete = async (): Promise<DepartmentApi[]> => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.GET_ALL);
        return response.data;
    } catch (error) {
        handleError(error);
        return [];
    }
};

export const fetchByID = async (id: string): Promise<DepartmentApi | null> => {
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

export const fetchByName = async (name: string): Promise<DepartmentApi[]> => {
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

export const fetchByStatus = async (name: string): Promise<DepartmentApi[]> => {
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

export const updateOne = async (employee: DepartmentApi, id: string): Promise<void> => {
    try {
        await axiosInstance.put(API_ENDPOINTS.UPDATE, employee, {
            params: {id},
        });
    } catch (error) {
        handleError(error);
    }
};

export const deleteOne = async (id: string): Promise<void> => {
    try {
        await axiosInstance.delete(API_ENDPOINTS.DELETE, {
            params: {id},
        });
    } catch (error) {
        handleError(error);
    }
};

export const softDelete = async (employee: DepartmentApi, id: string): Promise<void> => {
    try {
        await axiosInstance.put(API_ENDPOINTS.UPDATE, employee, {
            params: {id},
        });
    } catch (error) {
        handleError(error);
    }
};

export const createOne = async (employee: DepartmentApi): Promise<void> => {
    try {
        await axiosInstance.post(API_ENDPOINTS.CREATE, employee);
    } catch (error) {
        handleError(error);
    }
};

export const createOneWithManager = async (employee: DepartmentApi): Promise<void> => {
    try {
        await axiosInstance.post(API_ENDPOINTS.CREATE, employee);
    } catch (error) {
        handleError(error);
    }
};
