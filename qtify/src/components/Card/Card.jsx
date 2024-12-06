import React from "react";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const CardComponent = ({ image, followers, title }) => {
  return (
    <>
      <Card
        sx={{
          maxWidth: 159,
          maxHeight: 250,
          display: "inline-block",
          position: "relative",
        }}
      >
        <CardMedia sx={{ height: 170 }} image={image} title={title} />
        <div
          style={{
            height: "55px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingTop: "10px",
          }}
        >
          <Chip
            style={{
              borderRadius: "10px",
              marginLeft: "8px",
              height: "23px",
              padding: "4px 8px",
              backgroundColor: "var(--color-black)",
              color: "var(--color-white)",
            }}
            label={`${followers} Follows`}
          />
          <div>{title}</div>
        </div>
      </Card>
    </>
  );
};

export default CardComponent;
