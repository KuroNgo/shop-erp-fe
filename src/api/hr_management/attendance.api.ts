import { axiosInstance } from "@/http";

interface Attendance {
   employee: string,
   date:Date,
}

const handleError = (error: any) => {
    console.error('API call failed:', error);
    throw error; 
};

export const getAll = async (): Promise<Attendance[]> => {
    try {
        const response = await axiosInstance.get('attendances/get/all');
        return response.data;
    } catch (error) {
        handleError(error);
        return []; 
    }
};

export const getByID = async (id: string): Promise<Attendance | null> => {
    try {
        const response = await axiosInstance.get('attendaces/get/_id', {
            params: { id }
        });
        return response.data;
    } catch (error) {
        handleError(error);
        return null; 
    }
};

export const getByName = async (name: string): Promise<Attendance[]> => {
    try {
        const response = await axiosInstance.get('attendaces/get/name', {
            params: { name },
        });
        return response.data;
    } catch (error) {
        handleError(error);
        return []; 
    }
};

export const update = async (attendance: Attendance, id: string): Promise<void> => {
    try {
        await axiosInstance.put(`attendaces/update`, attendance, {
            params: { id }
        });
    } catch (error) {
        handleError(error);
    }
};

export const deleteEmployee = async (id: string): Promise<void> => {
    try {
        await axiosInstance.delete('attendaces/delete', {
            params: { id }
        });
    } catch (error) {
        handleError(error);
    }
};

export const createEmployee = async (attendace: Attendance): Promise<void> => {
    try {
        await axiosInstance.post('attendaces/create', attendace);
    } catch (error) {
        handleError(error);
    }
};
