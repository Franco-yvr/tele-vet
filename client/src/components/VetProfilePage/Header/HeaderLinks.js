/*eslint-disable*/
import React, {useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import {Apps, CloudDownload, FeaturedVideo} from "@material-ui/icons";

// core components
import CustomDropdown from "../../../third-party-assets-material-ui/components/CustomDropdown/CustomDropdown.js";
import Button from "../../../third-party-assets-material-ui/components/CustomButtons/Button.js";

import styles from "../../../third-party-assets-material-ui/jss/material-kit-react/components/headerLinksStyle.js";
import EditContactInfo from "../Edit/EditContactInfo";

const useStyles = makeStyles(styles);

export default function HeaderLinks({auth, id}) {
    const classes = useStyles();
    const [ContactInfoPopup, SetContactInfoPopup] = useState(false);
    console.log("ID=");
    console.log(id);
    console.log('AUTH=');
    console.log(auth);
    let dropdownList = auth ?
        [
            <a
                target="_blank"
                className={classes.dropdownLink}
            >
                Upload Profile Picture
            </a>,
            <a
                target="_blank"
                className={classes.dropdownLink}
            >
                Edit Photos
            </a>,
            <a
                target="_blank"
                className={classes.dropdownLink}
                // href={'/login/vet' + '?id=' + id}
                onClick={() => SetContactInfoPopup(true)}
            >
                Edit Contact Information
            </a>
        ] : [
            <a
                target="_blank"
                className={classes.dropdownLink}
                >
                Review This Vet
            </a>,
            <a
                target="_blank"
                className={classes.dropdownLink}
                href={'/login/vet' + '?id=' + id}
            >
                Login
            </a>,
            <a
                target="_blank"
                className={classes.dropdownLink}
            >
                Contact Televet to Sign Up
            </a>
        ]

    return (
        <List className={classes.list}>
            <ListItem className={classes.listItem}>
                <CustomDropdown
                    noLiPadding
                    buttonText="Your clinic?"
                    buttonProps={{
                        className: classes.navLink,
                        color: "transparent"
                    }}
                    buttonIcon={Apps}
                    dropdownList={dropdownList}
                />
                <EditContactInfo key0={ContactInfoPopup}/>
            </ListItem>
            <ListItem className={classes.listItem}>
                <Tooltip
                    id="Video-Appointment"
                    title="Start a Video Appointment"
                    placement={window.innerWidth > 959 ? "top" : "left"}
                    classes={{tooltip: classes.tooltip}}
                >
                    <Button
                        color="transparent"
                        target="_blank"
                        className={classes.navLink}
                    >
                        <FeaturedVideo className={classes.icons}/> Video Appointment
                    </Button>
                </Tooltip>
            </ListItem>
        </List>
    );
}
