import { axiosInstance } from "@/http";

export interface Salary {
    id?: string,
    roleID: string,
    unitConcurrency: string,
    baseSalary: number,
    bonus: number,
    deduction: number,
    netSalary: number,
    createdAt: Date,
    updatedAt: Date,
}

export interface input {
    role: string,
    baseSalary: number,
    unitConcurrency: number,
    bonus: number,
    deductions: number
}


export const getByID = async(id: string): Promise<Salary | null> => {
    try {
        const response = await axiosInstance.get('salaries/get/_id', {
            params: {id}
        })
        return response.data
    } catch(error) {
        handleError(error)
        return null
    }
};

export const getByRoleTitle = async(title: string): Promise<Salary | null> => {
    try {
        const response = await axiosInstance.get('salaries/get/title', {
            params: {title}
        })
        return response.data
    } catch(error) {
        handleError(error)
        return null
    }
};

export const getAll = async (): Promise<Salary[]> => {
    try {
        const response = await axiosInstance.get('salaries/get/all');
        return response.data;
    } catch (error) {
        handleError(error);
        return []; 
    }
};

export const deleteSalary = async (id: string): Promise<void> => {
    try {
        await axiosInstance.delete('salaries/delete', {
            params: { id }
        });
    } catch (error) {
        handleError(error);
    }
};

export const createSalary = async (salary: Salary): Promise<void> => {
    try {
        await axiosInstance.post('salaries/create', salary);
    } catch (error) {
        handleError(error);
    }
};

export const updateSalary = async (salary: Salary, id: string): Promise<void> => {
    try {
        await axiosInstance.put(`salaries/update`, salary, {
            params: { id }
        });
    } catch (error) {
        handleError(error);
    }
};