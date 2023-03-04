<template>
    <div>
        <h1>Welcome back, {{ username }}!</h1>
        <button @click="logout">Logout</button>
        <router-link :to="{name: 'invoices'}">
            <button>Invoices</button>
        </router-link>
    </div>
</template>

<script>
import {ref} from 'vue'
import { useRouter } from 'vue-router';
export default {
    setup() {
        const username = ref(window.user)
        const router = useRouter()

        const logout = () => {
            window.user = null
            router.push({name: "Home", query: {logout: null}})
        }
        return { username, logout }
    }
}
</script>