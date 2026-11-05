import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Topbar from "./components/Layout/Topbar";
import EditorPanel from "./components/Editor/EditorPanel";
import GuidePage from "./components/Guide/GuidePage";
import SettingsPage from "./components/Settings/SettingsPage";

export default function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Topbar />
                <Routes>
                    <Route path="/" element={<EditorPanel />} />
                    <Route path="/guide" element={<GuidePage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}
