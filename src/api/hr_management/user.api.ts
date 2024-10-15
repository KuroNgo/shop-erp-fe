import { axiosInstance } from "@/http";

export interface User {
    email:string,
    password:string,
    fullName:string,
    avatarUrl:string,
    phone:string
}

export interface ChangePassword {
    Password:string 
    PasswordCompare:string
}

export interface LoginUser {
    email: string,
    password: string,
}

const handleError = (error: any) => {
    console.error('API call failed: ', error);
    throw error;
}

export const getInfor = async(): Promise<User | null> => {
    try {
        const response = await axiosInstance.get('users/get/info');
        return response.data
    } catch(error) {
        handleError(error);
        return null;
    }
}

export const login = async(login: LoginUser): Promise<User | null> => {
    try {
        const response = await axiosInstance.post("users/login", login)
        return response.data
    } catch (error) {
        handleError(error)
        return null;
    }
}

export const loginGoogle = async(): Promise<void> => {
    try {
        const response = await axiosInstance.post("auth/google/callback")
        return response.data
    } catch (error) {
        handleError(error)
    }
} 

export const refreshToken = async(): Promise<void> => {
    try {
        await axiosInstance.get("users/get/refresh")
    } catch (error) {
        handleError(error)
    }
}

export const deleteUser = async(): Promise<void> => {
    try {
        await axiosInstance.delete("users/delete")
    } catch (error) {
        handleError(error)
    }
}

// #region Forget password
// TODO: Forget password stage 1
export const forgetPassword = async(email: string): Promise<void> => {
    try {
        await axiosInstance.post("users/forget", email)
    } catch(error) {
        handleError(error)
    }
}

// TODO: Forget password stage 2
export const verificationCodeForChangePassword = async(verificationCode: string): Promise<void> => {
    try {
        await axiosInstance.patch("users/verify/password", verificationCode)
    } catch (error) {
        handleError(error)
    }
}

// TODO: Forget password stage 3
export const ChangePassword = async(changePassword: ChangePassword): Promise<void> => {
    try {
        await axiosInstance.patch("users/password/forget", changePassword)
    } catch (error) {
        handleError(error)
    }
}
// #endregion

export const logout = async(): Promise<string | null> => {
    try {
        const response = await axiosInstance.get('users/logout')
        return response.data.message

    } catch (error) {
        handleError(error);
        return null;
    }
}

// #region Signup Process
// TODO: Sign up process Stage 1
export const signup = async(user: User): Promise<void> => {
    try {
      await axiosInstance.post('users/register', user)
    } catch(error) {
        handleError(error)
    }
}

// TODO: Sign up process Stage 2
export const verify = async(verificationCode: string): Promise<User | null> => {
    try {
        const response = await axiosInstance.patch("users/verify", verificationCode)
        return response.data
    } catch(error) {
        handleError(error)
        return null;
    }
}
// #endregion

export const update = async(user:User): Promise<void> => {
    const formData = new FormData();

    formData.append('full_name', user.fullName);

    if (user.avatarUrl) {
        formData.append('profilePicture', user.avatarUrl);
    }

    try {
        const response = await axiosInstance.put('users/update', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        // console.log('User updated successfully:', response.data);
   
    } catch (error) {
        handleError(error)
    }
}

