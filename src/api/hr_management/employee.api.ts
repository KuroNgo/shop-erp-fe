import { axiosInstance } from "@/http";

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

const handleError = (error: any) => {
    console.error('API call failed:', error);
    throw error; 
};

export const getAll = async (): Promise<Employee[]> => {
    try {
        const response = await axiosInstance.get('employees/get/all');
        return response.data;
    } catch (error) {
        handleError(error);
        return []; 
    }
};

export const getByID = async (id: string): Promise<Employee | null> => {
    try {
        const response = await axiosInstance.get('employees/get/id', {
            params: { id }
        });
        return response.data;
    } catch (error) {
        handleError(error);
        return null; 
    }
};

export const getByName = async (name: string): Promise<Employee[]> => {
    try {
        const response = await axiosInstance.get('employees/get/name', {
            params: { name },
        });
        return response.data;
    } catch (error) {
        handleError(error);
        return []; 
    }
};

export const update = async (employee: Employee, id: string): Promise<void> => {
    try {
        await axiosInstance.put(`employees/update`, employee, {
            params: { id }
        });
    } catch (error) {
        handleError(error);
    }
};

export const deleteEmployee = async (id: string): Promise<void> => {
    try {
        await axiosInstance.delete('employees/delete', {
            params: { id }
        });
    } catch (error) {
        handleError(error);
    }
};

export const createEmployee = async (employee: Employee): Promise<void> => {
    try {
        await axiosInstance.post('employees/create', employee);
    } catch (error) {
        handleError(error);
    }
};
