/*
 *
 * OverviewCard
 *
 */

import React, { FC, ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import SwAvatar from "../../assets/sw-avatar.png";

import { StyledOverviewCard } from "./styledComponents";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  actions: {
    display: "flex",
    alignItems: "right",
  },
});
const OverviewCard: FC<{ name: String; onLeanMore: Function }> = ({
  name,
  onLeanMore,
}): ReactElement => {
  const classes = useStyles();
  return (
    <StyledOverviewCard>
      <Card className={classes.root}>
        <CardContent>
          <img src={SwAvatar} alt="avatar" />

          <Typography variant="h5" component="h2">
            {name}
          </Typography>
        </CardContent>
        <CardActions style={{ width: "100%", justifyContent: "flex-end" }}>
          <Button size="small" onClick={() => onLeanMore(name)}>
            Read More...
          </Button>
        </CardActions>
      </Card>
    </StyledOverviewCard>
  );
};

export default OverviewCard;
