import { defineStore } from 'pinia';
import axios from 'axios';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as null | { id: number; name: string }, // Kiểu dữ liệu của `user` có thể được thay đổi tùy thuộc vào API của bạn
    token: null as string | null,
    loading: false,
    error: null as string | null, // Cho phép `error` là chuỗi hoặc null
  }),
  actions: {
    async login(email: string, password: string): Promise<boolean> {
      this.loading = true;
      this.error = null;

      try {
        const response = await axios.post('http://localhost:3000/authentication/sigh-in', {
          email,
          password,
        });
        this.token = response.data.accessToken;
        return true;
      } catch (error) {
        this.error = 'Login failed. Please check your credentials.';
        return false;
      } finally {
        this.loading = false;
      }
    },
    loadToken() {
      const token = localStorage.getItem('token');
      if (token) {
        this.token = token;
      }
    },
  },
});
