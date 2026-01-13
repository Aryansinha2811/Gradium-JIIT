import axios from "axios"

// Configure your API base URL here
const API_BASE_URL = "https://gradium.onrender.com/api/v1"

// Create axios instance with default config
const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
})

// Add token to requests if it exists
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token")
        if (token) {
            config.headers.Authorization = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

// Response interceptor for handling errors
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            // Token expired or invalid
            localStorage.removeItem("token")
            localStorage.removeItem("user")
            window.location.href = "/"
        }
        return Promise.reject(error)
    }
)

// Auth Service Functions

/**
 * Login user with email, password, and role
 * Backend expects: "user" (student), "company", or "admin"
 */
export const loginUser = async (email: string, password: string, role: string) => {
    try {
        const response = await axiosInstance.post("/users/login", {
            email,
            password,
            role, // Backend expects: "user", "company", or "admin"
        })
        return response.data
    } catch (error) {
        throw error
    }
}

/**
 * Sign up new user
 * Backend expects different fields based on role:
 * - user (student): name, email, password, role, dob, phone, course, batch
 * - company: name, email, password, role, phone, companyName, website, industry
 * - admin: name, email, password, role, dob, phone
 */
export const signupUser = async (userData: {
    name: string
    email: string
    password: string
    role: string
    phone?: string
    dob?: string
    course?: string
    batch?: string
    companyName?: string
    website?: string
    industry?: string
    profileImage?: string
}) => {
    try {
        // Register the user
        const registerResponse = await axiosInstance.post("/users/register", userData)
        
        // After successful registration, automatically login
        if (registerResponse.data.message === "User registered successfully") {
            const loginResponse = await loginUser(userData.email, userData.password, userData.role)
            return loginResponse
        }
        
        return registerResponse.data
    } catch (error) {
        throw error
    }
}

/**
 * Logout user
 */
export const logoutUser = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    window.location.href = "/"
}

/**
 * Get current user profile
 */
export const getCurrentUser = async () => {
    try {
        const response = await axiosInstance.get("/users/profile")
        return response.data
    } catch (error) {
        throw error
    }
}

/**
 * Update user profile
 */
export const updateProfile = async (profileData: any) => {
    try {
        const response = await axiosInstance.put("/users/profile", profileData)
        return response.data
    } catch (error) {
        throw error
    }
}

/**
 * Delete user account
 */
export const deleteUser = async () => {
    try {
        const response = await axiosInstance.delete("/users/profile")
        return response.data
    } catch (error) {
        throw error
    }
}

/**
 * Get all users (Admin only)
 */
export const getAllUsers = async () => {
    try {
        const response = await axiosInstance.get("/users")
        return response.data
    } catch (error) {
        throw error
    }
}

/**
 * Check if user is authenticated
 */
export const isAuthenticated = (): boolean => {
    const token = localStorage.getItem("token")
    return !!token
}

/**
 * Get user role from localStorage
 */
export const getUserRole = (): string | null => {
    const userStr = localStorage.getItem("user")
    if (userStr) {
        try {
            const user = JSON.parse(userStr)
            return user.role
        } catch {
            return null
        }
    }
    return null
}

export default axiosInstance