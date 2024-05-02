import axios from "axios";
import { useEffect, useState } from "react";
import {
  Container,
  styled,
  Typography,
  Paper,
  Grid,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import { blue, green } from "@mui/material/colors";
import { fetchType } from "./fetchType";

type GradientProps = {
  colors?: string[];
};

const GradientTypography = styled(Typography)<GradientProps>(({ colors }) => ({
  color: "white",
  ...(colors && {
    background: `linear-gradient(to right bottom, ${colors.join(",")})`,
  }),
}));

export default function App() {
  const [weatherData, setWeatherData] = useState<fetchType | null>(null);

  useEffect(() => {
    axios
      .get("https://weather.tsukumijima.net/api/forecast?city=270000")
      .then((res) => {
        console.log(res.data);
        setWeatherData(res.data);
      });
  }, []);
  return (
    <>
      <Container maxWidth="sm">
        <Paper elevation={5} sx={{ borderRadius: "5px", overflow: "hidden" }}>
          <GradientTypography
            variant="h4"
            align="center"
            colors={[blue[600], blue[300], green[400], green[200]]}
            px={2}
            py={2}
          >
            {weatherData ? weatherData.title : "loading..."}
          </GradientTypography>
          <Grid
            container
            alignItems={"stretch"}
            justifyContent={"space-between"}
            spacing={2}
            px={2}
            py={4}
          >
            {weatherData
              ? weatherData.forecasts.map((forecast, index) => {
                  return (
                    <Grid item xs={4} key={index}>
                      <Card
                        sx={{
                          textAlign: "center",
                        }}
                      >
                        <CardContent>
                          <Typography
                            sx={{ fontSize: "1.1rem", fontWeight: "bold" }}
                          >
                            {forecast.dateLabel}
                          </Typography>
                          <CardMedia
                            component="img"
                            src={forecast.image.url}
                            alt={forecast.image.title}
                            sx={{ marginBottom: "1rem" }}
                          ></CardMedia>
                          <Typography gutterBottom sx={{ fontWeight: "bold" }}>
                            {forecast.telop}
                          </Typography>
                          <Typography>
                            {forecast.temperature.max.celsius
                              ? forecast.temperature.max.celsius + "℃/"
                              : "no Data"}
                            {index !== 0 &&
                              `${forecast.temperature.min.celsius}℃`}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  );
                })
              : "loading..."}
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
