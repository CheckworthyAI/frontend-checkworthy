import { Card } from "@mui/material";
import React from "react";

const DashboardVideo = () => {
  return (
    <Card
      sx={{
        width: 480,
        height: 236,
        position: "relative",
        overflow: "hidden",
        borderRadius: 4, // More curve
        boxShadow: "0 4px 32px 0 rgba(0, 0, 0, 0.25), 0 0 40px 0 #7f5cff55", // Stylish glow
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)", // Soft gradient
      }}
    >
      {/* Video will go here in the future */}
    </Card>
  );
};

export default DashboardVideo;
