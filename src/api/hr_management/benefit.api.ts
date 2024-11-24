import {axiosInstance} from "@/http";

const handleError = (error: any) => {
    console.error('API call failed: ', error);
    throw error;
}

// Định nghĩa kiểu dữ liệu cho Benefit
interface Benefit {
    id: string;
    employeeID: string;
    benefitType: string;
    amount: number;
    startDate: Date;
    endDate: Date; // Đổi tên EndDate thành endDate để nhất quán với camelCase
    createdAt: Date; // Đổi tên CreatedAt thành createdAt
    updatedAt: Date; // Đổi tên UpdatedAt thành updatedAt
}

interface Input {
    employeeEmail: string;
    benefitType: string;
    amount: number;
    startDate: Date;
    endDate: Date;
}

// Đặt các URL vào hằng số
const API_ENDPOINTS = {
    GET_ALL: 'candidates/get/all',
    GET_BY_ID: 'candidates/get/_id',
    GET_BY_NAME: 'candidates/get/name',
    UPDATE: 'candidates/update',
    UPDATE_STATUS: 'candidates/update/status',
    DELETE: 'candidates/delete',
    CREATE: 'candidates/create',
};

// Định nghĩa thông báo lỗi
const ERROR_MESSAGES = {
    FETCH: 'Error fetching data',
    CREATE: 'Error creating candidate',
    UPDATE: 'Error updating candidate',
    DELETE: 'Error deleting candidate',
};

// Lấy tất cả các lợi ích
export const getAllBenefits = async (): Promise<Benefit[]> => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.GET_ALL);
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(ERROR_MESSAGES.FETCH);
        }
    } catch (error) {
        handleError(error);
        return [];
    }
};

// Lấy lợi ích theo ID
export const getBenefitByID = async (id: string): Promise<Benefit | null> => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.GET_BY_ID, {
            params: {id},
        });
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(ERROR_MESSAGES.FETCH);
        }
    } catch (error) {
        handleError(error);
        return null;
    }
};

// Lấy lợi ích theo tên
export const getBenefitsByName = async (name: string): Promise<Benefit[]> => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.GET_BY_NAME, {
            params: {name},
        });
        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(ERROR_MESSAGES.FETCH);
        }
    } catch (error) {
        handleError(error);
        return [];
    }
};

// Cập nhật thông tin lợi ích
export const updateBenefit = async (benefit: Benefit, id: string): Promise<void> => {
    try {
        await axiosInstance.put(API_ENDPOINTS.UPDATE, benefit, {
            params: {id},
        });
    } catch (error) {
        handleError(error);
    }
};

// Cập nhật trạng thái lợi ích
export const updateBenefitStatus = async (status: string, id: string): Promise<void> => {
    try {
        await axiosInstance.put(API_ENDPOINTS.UPDATE_STATUS, {status}, {
            params: {id},
        });
    } catch (error) {
        handleError(error);
    }
};

// Xóa lợi ích
export const deleteBenefit = async (id: string): Promise<void> => {
    try {
        await axiosInstance.delete(API_ENDPOINTS.DELETE, {
            params: {id},
        });
    } catch (error) {
        handleError(error);
    }
};

// Tạo lợi ích mới
export const createBenefit = async (benefit: Benefit): Promise<void> => {
    try {
        await axiosInstance.post(API_ENDPOINTS.CREATE, benefit);
    } catch (error) {
        handleError(error);
    }
};
