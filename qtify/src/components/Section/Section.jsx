import React from "react";
import CardComponent from "../Card/Card";
import ButtonComponent from "../Button";
import styles from "./Section.module.css";

const Section = ({ data, title, isSongComponent = false }) => {
  console.log("albums  :", data);
  return (
    <div
      style={{
        padding: "0 31px",
        backgroundColor: "var(--color-black)",
        paddingBottom: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          height: "40px",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h3 style={{ color: "var(--color-white)" }}>{title}</h3>
        {!isSongComponent && <ButtonComponent text="Show All" />}
      </div>
      <div className={styles.gridContainer}>
        {data.map((album) => (
          <CardComponent
            isSongComponent={isSongComponent}
            key={album.id}
            image={album.image}
            followers={album.follows}
            title={album.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Section;
