function GridContainer() {
  const { makeStyles, Paper, Grid } = MaterialUI;

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  const classes  = useStyles();

  return (
    <div>
      <Grid container spacing={1}>
        <Grid item md={3} sm={4} xs={12}>
          <Paper className={classes.paper}>
            <Controls />
          </Paper>
        </Grid>
        <Grid item md={9} sm={8} xs={12}>
          <Paper className={classes.paper}>
            <Instruments />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
