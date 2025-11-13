// import { ConvexReactClient } from "convex/react";
// import { Platform } from "react-native";

// const getConvexUrl = () => {
//   if (process.env.EXPO_PUBLIC_CONVEX_URL) {
//     return process.env.EXPO_PUBLIC_CONVEX_URL;
//   }

//   // fallback to your LAN IP for dev+q
//   if (Platform.OS === "web") {
//     return "http://localhost:3210";
//   }

//   return "192.168.31.237 2409:40d0:2d9:458d:a5ff:82ec:d985:223a 2409:40d0:2d9:458d:35e8:213d:9d05:118e"; // 👈 your LAN IP
// };

// export const convex = new ConvexReactClient(getConvexUrl(), {
//   unsavedChangesWarning: false,
// });
