<script setup lang="ts">
import { auth as ui } from "firebaseui";
import {
    GoogleAuthProvider,
    EmailAuthProvider,
    getAuth,
    sendEmailVerification,
    type UserCredential,
} from "firebase/auth";
import { computed, onMounted, reactive, ref } from "vue";
import "firebaseui/dist/firebaseui.css";

const authElement = ref<Element>();
const authUI = new ui.AuthUI(getAuth());

// ---------- component state ----------
const state = reactive({
    hasEmailVerificationSent: false,
    mustVerifyEmail: "",
});

const uiConfig = {
    callbacks: {
        /**
         * FirebaseUI authentication success callback.
         *
         * @param userCredential - Object describing authenticated user.
         * @returns Boolean True if we are to proceed, false otherwise.
         */
        signInSuccessWithAuthResult: (
            userCredential: UserCredential,
        ): boolean => {
            const user = userCredential.user;
            if (!user.emailVerified) {
                // Send verification email if user just signed up.
                if (
                    user.metadata.creationTime === user.metadata.lastSignInTime
                ) {
                    sendEmailVerification(user).then(
                        () => {
                            state.hasEmailVerificationSent = true;
                        },
                        () => {},
                    );
                }
                state.mustVerifyEmail = user.email;
            }
            return user.emailVerified;
        },
    },
    signInSuccessUrl: "/success",
    signInOptions: [
        EmailAuthProvider.PROVIDER_ID,
        GoogleAuthProvider.PROVIDER_ID,
    ],
};

// ---------- component methods ----------
/**
 * Close the email verification dialog and reload sign-in UI component.
 */
const dismissVerificationDialog = async (): Promise<void> => {
    const auth = getAuth();
    await auth.signOut();
    authUI.reset();
    authUI.start(authElement.value, uiConfig);
    state.mustVerifyEmail = "";
};

/**
 * Resend verification email, close dialog, and reload sign-in UI component.
 */
const resendVerification = async (): Promise<void> => {
    const auth = getAuth();
    await sendEmailVerification(auth.currentUser);
    state.hasEmailVerificationSent = true;
    await dismissVerificationDialog();
};

// ---------- computed properties ----------
/**
 * Is dialog active.
 */
const is_dialog_active = computed(() => state.mustVerifyEmail != "");

// ---------- lifetime hooks ----------
/**
 * Mount firebase authentication UI component.
 */
onMounted(() => {
    // const authUI = new ui.AuthUI(getAuth());
    authUI.start(authElement.value, uiConfig);
});
</script>

<template>
    <v-container>
        <div ref="authElement" />
        <v-dialog v-model="is_dialog_active" persistent max-width="300">
            <v-card>
                <v-card-title> Email Verification Required </v-card-title>
                <v-card-text>
                    Please follow a link we sent to {{ state.mustVerifyEmail }}
                </v-card-text>
                <v-card-actions>
                    <v-btn
                        :disabled="state.hasEmailVerificationSent"
                        @click="resendVerification"
                    >
                        resend
                    </v-btn>
                    <v-spacer />
                    <v-btn @click="dismissVerificationDialog"> dismiss </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>
