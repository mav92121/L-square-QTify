import React from "react";
import { Button } from "@mui/material";
import styles from "../components/Navbar/Navbar.module.css";

const ButtonComponent = ({ text }) => {
  return <Button className={styles.feedbackButton}> {text}</Button>;
};

export default ButtonComponent;
