import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import Places from "./places";
import NavBar from "./navbar";
import SideBar from "./sidebar";
import Grid from "@mui/material/Grid";

export default function Home() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <NavBar />
      <Grid container spacing={1}>
        <Grid item xs={7}>
          <SideBar />
        </Grid>
        <Grid item xs={5}>
          <Places />
        </Grid>
      </Grid>
    </>
  );
}
