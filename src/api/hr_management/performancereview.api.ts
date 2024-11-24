import {axiosInstance} from "@/http";

const handleError = (error: any) => {
    console.error('API call failed: ', error);
    throw error;
}

export interface PerformanceReview {
    id?: string;
    employeeID: string;
    reviewDate: Date;
    reviewerID: string;
    performanceScore: number;
    comments: string;
    createdAt: Date;
    updatedAt: Date;
}

// Hằng số URL endpoints
const API_ENDPOINTS = {
    GET_ALL: 'performance-reviews/get/all',
    GET_BY_ID: 'performance-reviews/get/_id',
    GET_BY_EMAIL: 'performance-reviews/get/name',
    UPDATE: 'performance-reviews/update',
    DELETE: 'performance-reviews/delete',
    CREATE: 'performance-reviews/create',
};

// Lấy tất cả các review
export const getAll = async (): Promise<PerformanceReview[]> => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.GET_ALL);
        return response.data;
    } catch (error) {
        handleError(error);
        return [];
    }
};

// Lấy review theo ID
export const getByID = async (id: string): Promise<PerformanceReview | null> => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.GET_BY_ID, {params: {id}});
        return response.data;
    } catch (error) {
        handleError(error);
        return null;
    }
};

// Lấy review theo email nhân viên
export const getByEmployeeEmail = async (email: string): Promise<PerformanceReview | null> => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.GET_BY_EMAIL, {params: {email}});
        return response.data;
    } catch (error) {
        handleError(error);
        return null;
    }
};

// Cập nhật review
export const updatePerformanceReview = async (performanceReview: PerformanceReview, id: string): Promise<void> => {
    try {
        await axiosInstance.put(API_ENDPOINTS.UPDATE, performanceReview, {params: {id}});
    } catch (error) {
        handleError(error);
    }
};

// Xóa review
export const deletePerformanceReview = async (id: string): Promise<void> => {
    try {
        await axiosInstance.delete(API_ENDPOINTS.DELETE, {params: {id}});
    } catch (error) {
        handleError(error);
    }
};

// Tạo mới review
export const createPerformanceReview = async (performanceReview: Omit<PerformanceReview, 'id' | 'createdAt' | 'updatedAt'>): Promise<void> => {
    try {
        await axiosInstance.post(API_ENDPOINTS.CREATE, performanceReview);
    } catch (error) {
        handleError(error);
    }
};
