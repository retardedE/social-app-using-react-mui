import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from "@mui/material";
import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import React from "react";

export default function Post() {
  return (
    <Box>
      <Card>
        <CardHeader
          avatar={
            <Avatar
              src="https://mui.com/static/images/avatar/1.jpg"
              sx={{ bgcolor: "red" }}
              aria-label="recipe"
            >
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title="Emad Alizade"
          subheader="February 24, 2024"
        />
        <CardMedia
          component="img"
          height="20%"
          image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Paella dish"
        />
        <CardContent>
          <Typography
            variant="body2"
            fontWeight={600}
            mb={1}
            color="text.secondary"
          >
            EmPsychoXLive :
          </Typography>
          <Typography
            variant="body2"
            fontSize={"18px"}
            sx={{ width: "300px" }}
            color="text.secondary"
          >
            “A waterfall happily and cheerfully flows in the nature; there is
            happiness only if there is freedom! ”
          </Typography>
        </CardContent>
        <CardActions
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            marginLeft: "10px",
          }}
          disableSpacing
        >
          <Box>
            <Typography
              variant="body2"
              fontSize={"12px"}
              color="text.secondary"
            >
              February 24, 2024
            </Typography>
          </Box>
          <Box>
            <IconButton aria-label="add to favorites">
              <Checkbox
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite sx={{color:'red'}} />}
              />
            </IconButton>
            <IconButton aria-label="share">
              <Share />
            </IconButton>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
}
