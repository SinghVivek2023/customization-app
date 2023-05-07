import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function Dashbboard() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50">
      {/* sidebar */}
      <GridItem
        as="aside"
        colSpan={{ base: 6, lg: 2, xl: 1 }}
        bg="purple.400"
        minHeight={{ lg: "100vh" }}
        p={{ base: "20px", lg: "30px" }}
      >
        <Header />
      </GridItem>
      <Outlet />
    </Grid>
  );
}

export default Dashbboard;
