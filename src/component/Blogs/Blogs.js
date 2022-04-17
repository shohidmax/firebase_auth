import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <div className="qustiondiv">
        <h2>Difference between Authorization and Authentication ?</h2>
        <p>
          authentication is the process of verifying who someone is, whereas
          authorization is the process of verifying what specific applications,
          files, and data a user has access to. The situation is like that of an
          airline that needs to determine which people can come on board.
          Authentication verifies who the user is Or Authorization determines
          what resources a user can access. Authentication works through
          passwords, one-time pins, biometric information, and other information
          provided or entered by the user Or Authorization works through
          settings that are implemented and maintained by the organization.
        </p>
      </div>
      <div className="qustiondiv">
        <h2>
          Why are you using firebase And What other options do you have to
          implement authentication?
        </h2>
        <p>
          Firebase manages all data real-time in the database. So, the exchange
          of data to and fro from the database is easy and quick. Hence, if you
          are looking to develop mobile apps such as live streaming, chat
          messaging, etc., you can use Firebase. Firebase allow syncing the
          real-time data across all the devices- Android, iOS, and the web
          without refreshing the screen Firebase offers integration to Google
          Ads, AdMob, DoubleClick, Play Store, Data Studio, BigQuery, and Slack,
          to make your app development with efficient and accurate management
          and maintenance. So we use Firebase. <br/>
          <b>There are many integration platform like , </b>
          <a href="https://parseplatform.org">Parse</a>, 
          <a href="https://parseplatform.org">Back4App</a>, 
          <a href="https://aws.amazon.com/amplify/?tag=rigorousthemes-20">AWS Amplify</a>, 
          <a href="https://kuzzle.io">Kuzzle</a>, 
          <a href="https://www.couchbase.com">Couchbase</a> etc.
        </p>
      </div>
      <div className="qustiondiv">
          <h2> What other services does firebase provide other than authentication ?</h2>
          <p> Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more. So that Firebase Authentication is more user friendly and useable and also High sequrity So that  firebase provide other than authentication.</p>
      </div>
    </div>
  );
};

export default Blogs;
