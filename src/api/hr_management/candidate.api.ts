import {axiosInstance} from "@/http/axios";

interface Candidate {
    id: string;
    name: string;
    email: string;
    phone: string;
    resume: string;
    skills: string[];
    roleHire: string;
    experiences: Experience[];
    education: Education[];
    status: string;
    createdAt: Date;
    updatedAt: Date;
}

interface Experience {
    companyName: string;
    role: string;
    startDate: Date;
    endDate: Date;
}

interface Education {
    schoolName: string;
    degree: string;
    major: string;
    graduationYear: number;
}

// Đặt các URL vào hằng số
const API_ENDPOINTS = {
    ALL: 'candidates/get/all',
    BY_ID: 'candidates/get/_id',
    BY_NAME: 'candidates/get/name',
    UPDATE: 'candidates/update',
    DELETE: 'candidates/delete',
    CREATE: 'candidates/create',
};

export const getAll = async (): Promise<Candidate[]> => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.ALL);
        return response.data;
    } catch (error) {
        handleError(error);
        return [];
    }
};

export const getByID = async (id: string): Promise<Candidate | null> => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.BY_ID, {
            params: {id},
        });
        return response.data;
    } catch (error) {
        handleError(error);
        return null;
    }
};

export const getByName = async (name: string): Promise<Candidate[]> => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.BY_NAME, {
            params: {name},
        });
        return response.data;
    } catch (error) {
        handleError(error);
        return [];
    }
};

export const updateCandidate = async (candidate: Candidate, id: string): Promise<void> => {
    try {
        await axiosInstance.put(API_ENDPOINTS.UPDATE, candidate, {
            params: {id},
        });
    } catch (error) {
        handleError(error);
    }
};

export const deleteCandidate = async (id: string): Promise<void> => {
    try {
        await axiosInstance.delete(API_ENDPOINTS.DELETE, {
            params: {id},
        });
    } catch (error) {
        handleError(error);
    }
};

export const createCandidate = async (candidate: Candidate): Promise<void> => {
    try {
        await axiosInstance.post(API_ENDPOINTS.CREATE, candidate);
    } catch (error) {
        handleError(error);
    }
};
