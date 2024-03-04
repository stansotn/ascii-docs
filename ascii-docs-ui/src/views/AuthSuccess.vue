<!--
Dummy component rendered on authentication success.
-->

<script setup lang="ts">
import { getAuth } from "firebase/auth";
import FileBrowser from "@/components/FileBrowser.vue";

const signOut = async (): Promise<void> => {
    await getAuth().signOut();
};
</script>

<template>
    <v-toolbar>
        <v-toolbar-title> ascii-docs </v-toolbar-title>
        <v-toolbar-items>
            <v-btn color="primary" @click="signOut"> sign out </v-btn>
        </v-toolbar-items>
    </v-toolbar>
    <FileBrowser />
</template>
