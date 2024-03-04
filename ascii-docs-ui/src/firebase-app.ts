import { initializeApp, type FirebaseOptions, FirebaseApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFunctions } from "firebase/functions";
import { getDatabase } from "firebase/database";
import { connectAuthEmulator } from "firebase/auth";
import { connectFunctionsEmulator } from "firebase/functions";
import { connectDatabaseEmulator } from "firebase/database";

const getFirebaseConfig = (name: string): FirebaseOptions => {
    switch (name) {
        case "demo": {
            return {
                apiKey: "demo-key",
                authDomain: "demo-ascii-docs-dev.firebaseapp.com",
                databaseURL: "https://demo-ascii-docs.firebaseio.com",
                projectId: "demo-ascii-docs-dev",
                storageBucket: "demo",
                messagingSenderId: "demo-id",
                appId: "demo-id",
            };
        }
    }
    throw Error("Unable to resolve firebase configuration.");
};

/**
 * Firebase Config.
 */
const config = getFirebaseConfig("demo");

export const initializeFirebaseApp = (): FirebaseApp => initializeApp(config);
