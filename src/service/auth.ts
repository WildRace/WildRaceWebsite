// src/service/auth.ts
"use client";

import React from "react";
import { User } from "firebase/auth"; // Optional: only if using Firebase

export const AuthContext = React.createContext<User | null>(null);