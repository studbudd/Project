import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Container, Grid, Header, Loader } from 'semantic-ui-react';
import { Mentors } from '/imports/api/mentor/mentor';
import { withTracker } from 'meteor/react-meteor-data';
import PropTypes from 'prop-types';

/** Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
class AdminMentorList extends React.Component {

  /** If the subscription(s) have been received, render the page, otherwise show a loading icon. */
  render() {
    return (this.props.ready) ? this.renderPage() : <Loader active>Getting data</Loader>;
  }

  /** Render the page once subscriptions have been received. */
  renderPage() {
    return (
        /*
        11/15/18 - Jeff
        Implementing layout for mentor list display
        Nothing Changed yet
        Only changed mentor references and imported Mentors schema from /imports/api/mentor/mentor
         */
        <Container>
          <Header as="h2" textAlign="center">Mentor List (Admin)</Header>
          <Grid>
            <Header as='h1'>THIS IS A TEST</Header>
          </Grid>
        </Container>
    );
  }
}

/** Require an array of Stuff documents in the props. */
AdminMentorList.propTypes = {
  mentors: PropTypes.array.isRequired,
  ready: PropTypes.bool.isRequired,
};

/** withTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker */
export default withTracker(() => {
  /*
  Going to need to make a mentor.js file in '/startup/server'
  11/25/18
  -subscribed 'MentorAdmin' is from '/api/mentor/mentor.js'
   */

  const subscription = Meteor.subscribe('MentorAdmin');
  return {
    mentor: Mentors.find({}).fetch(),
    ready: subscription.ready(),
  };
})(AdminMentorList);
