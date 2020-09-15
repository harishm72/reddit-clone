import { Box } from "@chakra-ui/core";
import React from "react";

interface LayoutProps {
  variant?: "small" | "regular";
}

export const Layout: React.FC<LayoutProps> = ({ children, variant }) => {
  return (
    <Box
      mt={8}
      mx="auto"
      maxW={variant === "regular" ? "800px" : "400px"}
      w="100%"
    >
      {children}
    </Box>
  );
};
