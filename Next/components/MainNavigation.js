import Link from "next/link";
import classes from "./MainNavigation.module.css";
import { Card, Avatar, Button } from '@nextui-org/react';
import { useContext } from 'react';
import DataContext from '../store/data-store.js'

function MainNavigation(props) {
  const dataCtx = useContext(DataContext)
  let noOfEmployees = dataCtx.getNoEmployees()
  
  return (
    <>
      <Card bordered shadow={false} hoverable css={{ mw: "50%" }}>
        <div className={classes.mainDiv}>
          <Avatar squared src="/avatars/avatar-1.png" css={{ size: "$20" }} />
          <div className={classes.linkDiv}>
            <Link href="/"><a><Button shadow color="gradient" auto>Logout</Button></a></Link>
          </div>
          <div className={classes.linkDiv}>
            <Link href="/userpage"><a><Button shadow color="gradient" auto>UserPage</Button></a></Link>
          </div>
          <div className={classes.linkDiv}>
            <Link href="/tickets"><a><Button shadow color="gradient" auto>Transactions</Button></a></Link>
          </div>
        </div>
      </Card>
    </>
  );
}

export default MainNavigation;
