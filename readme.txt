* React & Firebase Workshop with Steve Kinney



** Firebase Stuff

*** Events

    - on -- turn on event listening
    - once -- listen for an event once, then turn off
    - off -- turn off event listening

*** Firebase Database Snapshot

    - Link: [[https://firebase.google.com/docs/reference/js/firebase.database.DataSnapshot][firebase.database.DataSnapshot]]



*** Firebase and React state

    When the database updates, it fires an event ~value~ which can be
    used to update the component's state.

    #+BEGIN_SRC javascript
      componentDidMount() {
          database.ref().on('value', (snapshot) => {
              this.setState({
                  data: snapshot.val(),
                  newData: ''
              });
          });
      }

    #+END_SRC



*** Firebase Auth

    ~auth~ represents the currently authorized user

    Look into rules simulator for checking rules


*** Firebase and Redux: Why?

    Could import firebase directly into each component, why do we need
    redux?

**** Two sorts of *state*:
     - data we persist
     - information about the application



** Stuff

   - link: [[https://github.com/tiberiuc/redux-react-firebase][tiberiuc/redux-react-firebase: Use Firebase with React and Redux in ES6]]
