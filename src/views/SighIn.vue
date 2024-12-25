<template>
    <div class="login-container">
        <form @submit.prevent="handleLogin" class="login-form">
            <h2>Login</h2>

            <div class="form-group">
                <label for="email">Email</label>
                <input id="email" v-model="email" type="email" placeholder="Enter your email" required />
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input id="password" v-model="password" type="password" placeholder="Enter your password" required />
            </div>

            <button type="submit" :disabled="authStore.loading">
                {{ authStore.loading ? 'Logging in...' : 'Login' }}
            </button>

            <p v-if="authStore.error" class="error-message">{{ authStore.error }}</p>
        </form>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useAuthStore } from '../stores/authStore.ts'
import { useRouter } from 'vue-router';

export default defineComponent({
    name: 'LoginPage',
    setup() {
        const email = ref('');
        const password = ref('');
        const authStore = useAuthStore();
        const router = useRouter();

        const handleLogin = async () => {
            const success = await authStore.login(email.value, password.value);
            if (success) {
                router.push('/home');
            }
        };

        return { email, password, authStore, handleLogin };
    },
});
</script>

<style scoped>
.login-form-container {
    max-width: 400px;
    margin: 2rem auto;
    padding: 1.5rem;
    border: 1px solid #ddd;
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.login-form {
    display: flex;
    flex-direction: column;
}

.form-group {
    margin-bottom: 1rem;
}

label {
    margin-bottom: 0.5rem;
    font-weight: bold;
}

input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    padding: 0.75rem;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:disabled {
    background-color: #6c757d;
}

.error-message {
    margin-top: 1rem;
    color: red;
    font-weight: bold;
}
</style>