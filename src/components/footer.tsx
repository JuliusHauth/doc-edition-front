import React from "react"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"
import { Box } from "@mui/material"

const styles = {
  footer: {
    backgroundColor: "#007c1d",
    padding: "1rem 0",
    borderTop: "1px solid #000000",
    fontSize: "1rem",
    fontFamily: "Calibri light, sans-serif",
    color: "white"
  }
}

const Footer = () => (
  <Box component="footer" sx={styles.footer}>
    <Container maxWidth="lg">
      <Grid container={true}>
        <Grid item={true} xs={9}>
          <br /> This site is work in progress
          <br /> © {new Date().getFullYear()} Julius Hauth
        </Grid>
      </Grid>
    </Container>
  </Box>
)

export default Footer