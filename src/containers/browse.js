import React, { useContext, useState, useEffect } from 'react';
import { SelectProfileContainer } from '../containers/profiles';
import { FirebaseContext } from '../context/firebase';

export function BrowseContainer() {
  const [profile, setProfile] = useState({});
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  return <SelectProfileContainer user={user} setProfile={setProfile} />;
}
