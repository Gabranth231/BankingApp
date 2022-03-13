import Link from "next/link";
import classes from "./MainNavigation.module.css";
import { Card } from "@nextui-org/react";
import { Avatar } from '@nextui-org/react';
import { Button } from '@nextui-org/react';

function MainNavigation(props) {
  return (
    <>
      <Card bordered shadow={false} hoverable css={{ mw: "100%" }}>
        <div className={classes.mainDiv}>
          <Avatar squared src="/avatars/avatar-1.png" css={{ size: "$20" }} />
          <div className={classes.linkDiv}> 
            <Link href="/"><a><Button shadow color="gradient" auto>Home</Button></a></Link> 
          </div>
          <div className={classes.linkDiv}>     
            <Link href="/account"><a><Button shadow color="gradient" auto>Account</Button></a></Link> 
          </div>
          <div className={classes.linkDiv}> 
            <Link href="/employees"><a><Button shadow color="gradient" auto>Employees</Button></a></Link> 
          </div>
          <div className={classes.linkDiv}>
            <Link href="/tickets"><a><Button shadow color="gradient" auto>Tickets</Button></a></Link> 
          </div>
          <div></div>
        </div>
      </Card>
    </>
  );
}

export default MainNavigation;
