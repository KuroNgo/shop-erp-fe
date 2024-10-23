import { axiosInstance } from "@/http";

export interface PerformanceReview {
    id?: string,
    employeeID: string,
    reviewDate: Date,
    ReviewerID: string,
    performanceScore: number,
    comments: string,
    createdAt: Date,
    updatedAt: Date,
}

export interface Input {
    employeeID: string,
    reviewerID: string,
    reviewDate: Date,
    performanceScore: number,
    comments: string,
}

export const getByID = async (id: string): Promise<PerformanceReview | null> => {
    try {
        const response = await axiosInstance.get('performance-reviews/get/_id', {
            params: { id }
        });
        return response.data;
    } catch (error) {
        handleError(error);
        return null; 
    }
};

export const getByEmployeeEmail = async (email: string): Promise<PerformanceReview | null> => {
    try {
        const response = await axiosInstance.get('performance-reviews/get/name', {
            params: { email },
        });
        return response.data;
    } catch (error) {
        handleError(error);
        return null; 
    }
};

export const getAll = async (): Promise<PerformanceReview[]> => {
    try {
        const response = await axiosInstance.get('performance-reviews/get/all');
        return response.data;
    } catch (error) {
        handleError(error);
        return []; 
    }
};

export const updatePerformanceReview = async (performanceReview: PerformanceReview, id: string): Promise<void> => {
    try {
        await axiosInstance.put(`performance-reviews/update`, performanceReview, {
            params: { id }
        });
    } catch (error) {
        handleError(error);
    }
};

export const deletePerformanceReview = async (id: string): Promise<void> => {
    try {
        await axiosInstance.delete('performance-reviews/delete', {
            params: { id }
        });
    } catch (error) {
        handleError(error);
    }
};

export const createPerformanceReview = async (performanceReview: PerformanceReview): Promise<void> => {
    try {
        await axiosInstance.post('performance-reviews/create', performanceReview);
    } catch (error) {
        handleError(error);
    }
};
