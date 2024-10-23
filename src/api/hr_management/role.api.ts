import { axiosInstance } from "@/http";
import type { input } from "./salary.api";

export interface Role {
    id?: string,
    title: string,
    description: string,
    numberOfPeople: number,
    createdAt: Date,
    updatedAt: Date,
}

export interface Input {
    title: string,
    description: string,
}

export const getByID = async (id: string): Promise<Role | null> => {
    try {
        const response = await axiosInstance.get('roles/get/_id', {
            params: { id }
        });
        return response.data;
    } catch (error) {
        handleError(error);
        return null; 
    }
};

export const getByTitle = async (title: string): Promise<Role | null> => {
    try {
        const response = await axiosInstance.get('roles/get/name', {
            params: { title },
        });
        return response.data;
    } catch (error) {
        handleError(error);
        return null; 
    }
};

export const getAll = async (): Promise<Role[]> => {
    try {
        const response = await axiosInstance.get('roles/get/all');
        return response.data;
    } catch (error) {
        handleError(error);
        return []; 
    }
};

export const updateRole = async (role: Role, id: string): Promise<void> => {
    try {
        await axiosInstance.put(`roles/update`, role, {
            params: { id }
        });
    } catch (error) {
        handleError(error);
    }
};

export const deleteRole = async (id: string): Promise<void> => {
    try {
        await axiosInstance.delete('roles/delete', {
            params: { id }
        });
    } catch (error) {
        handleError(error);
    }
};

export const createRole = async (role: input): Promise<void> => {
    try {
        await axiosInstance.post('roles/create', role);
    } catch (error) {
        handleError(error);
    }
};
