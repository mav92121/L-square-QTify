import React from "react";
import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const CardComponent = ({ image, followers }) => {
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
        <CardMedia sx={{ height: 170 }} image={image} title="green iguana" />
        <div
          style={{
            height: "35px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
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
        </div>
      </Card>
    </>
  );
};

export default CardComponent;
