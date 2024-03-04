<script setup lang="ts">
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { RouterView, useRouter } from "vue-router";
import { onMounted } from "vue";

const router = useRouter();

onMounted(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            void router.push("/auth");
        }
    });
});
</script>

<template>
    <RouterView />
</template>
