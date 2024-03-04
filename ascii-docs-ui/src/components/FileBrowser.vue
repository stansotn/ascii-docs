<script setup lang="ts">
import {reactive} from "vue";

const tableHeader = [
    {
        title: "",
        value: "icon",
        align: "center",
        sortable: false,
        width: 100,
    },
    {
        title: "Name",
        align: "start",
        sortable: true,
        value: "name",
    },
    {
        title: "Owner",
        value: "owner",
        sortable: true,
        align: "end",
    },
    {
        title: "Actions",
        value: "actions",
        align: "center",
        sortable: false,
        width: 200,
    },
];

const state = reactive({
    hasNewFileProgress: false,

});

const onNewDir = (): void => {

}

const onNewFile = (): void => {

}

</script>

<template>
    <v-data-table :headers="tableHeader" class="elevation-1">
        <template #top>
            <v-toolbar flat>
                <v-toolbar-title>File Browser</v-toolbar-title>
                <v-divider class="mx-4" inset vertical />
<!--                <v-breadcrumbs :items="crumbs">-->
<!--                    <template v-slot:item="{ item }">-->
<!--                        <v-breadcrumbs-item>-->
<!--                            <v-btn-->
<!--                                text-->
<!--                                color="primary"-->
<!--                                class="text-lowercase pa-0"-->
<!--                                :disabled="-->
<!--                                    item.index ===-->
<!--                                    currentDir.split('/').length - 1-->
<!--                                "-->
<!--                                v-on:click="onBreadCrumb(item)"-->
<!--                            >-->
<!--                                {{ item.text }}-->
<!--                            </v-btn>-->
<!--                        </v-breadcrumbs-item>-->
<!--                    </template>-->
<!--                </v-breadcrumbs>-->
                <v-spacer />

                <v-btn
                    tile
                    icon="mdi-file-plus"
                    @click="onNewFile"
                    :disabled="state.hasNewFileProgress"
                    :loading="state.hasNewFileProgress"
                >
                </v-btn>
<!--                <v-divider class="mx-4" inset vertical />-->
                <v-btn tile icon @click="onNewDir">
                    <v-icon large color="primary"> mdi-folder-plus </v-icon>
                </v-btn>
            </v-toolbar>
        </template>
        <template #bottom />
    </v-data-table>
</template>
