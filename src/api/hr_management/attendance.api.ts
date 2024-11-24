import {axiosInstance} from "@/http";

const handleError = (error: any) => {
    console.error('API call failed: ', error);
    throw error;
}

interface Attendance {
    id: string;
    employeeId: string;
    date: Date;
    checkInTime: Date;
    checkOutTime: Date;
    hoursWorked: number;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}

interface AttendanceInput {
    emailEmployee: string;
    date: Date;
    checkInTime: Date;
    checkOutTime: Date;
    status: string;
}

// Đặt các URL vào hằng số
const API_ENDPOINTS = {
    ALL: 'attendances/get/all',
    BY_ID: 'attendances/get/_id',
    BY_NAME: 'attendances/get/name',
    UPDATE: 'attendances/update',
    DELETE: 'attendances/delete',
    CREATE: 'attendances/create',
};

export const getAll = async (): Promise<Attendance[]> => {
    try {
        const response = await axiosInstance.get(API_ENDPOINTS.ALL);
        return response.data;
    } catch (error) {
        handleError(error);
        return [];
    }
};

export const getByID = async (id: string): Promise<Attendance | null> => {
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

export const getByName = async (name: string): Promise<Attendance[]> => {
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

export const updateAttendance = async (attendance: AttendanceInput, id: string): Promise<void> => {
    try {
        await axiosInstance.put(API_ENDPOINTS.UPDATE, attendance, {
            params: {id},
        });
    } catch (error) {
        handleError(error);
    }
};

export const deleteAttendance = async (id: string): Promise<void> => {
    try {
        await axiosInstance.delete(API_ENDPOINTS.DELETE, {
            params: {id},
        });
    } catch (error) {
        handleError(error);
    }
};

export const createAttendance = async (attendance: AttendanceInput): Promise<void> => {
    try {
        await axiosInstance.post(API_ENDPOINTS.CREATE, attendance);
    } catch (error) {
        handleError(error);
    }
};
